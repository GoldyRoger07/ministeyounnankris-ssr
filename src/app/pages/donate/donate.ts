import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { CompanyService } from '../../services/company.service';
import { injectPageAnimations } from '../../animations/page-animations';
import { DonationFrequency } from '../../models/content.model';

/** Codes ISO 3166-1 alpha-2 : les noms sont traduits par le navigateur (Intl.DisplayNames). */
const COUNTRY_CODES =
  'AF AL DZ AD AO AG AR AM AU AT AZ BS BH BD BB BY BE BZ BJ BT BO BA BW BR BN BG BF BI CV KH CM CA CF TD CL CN CO KM CG CD CR CI HR CU CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FJ FI FR GA GM GE DE GH GR GD GT GN GW GY HT HN HK HU IS IN ID IR IQ IE IL IT JM JP JO KZ KE KI KW KG LA LV LB LS LR LY LI LT LU MG MW MY MV ML MT MH MR MU MX FM MD MC MN ME MA MZ MM NA NR NP NL NZ NI NE NG KP MK NO OM PK PW PS PA PG PY PE PH PL PT PR QA RO RU RW KN LC VC WS SM ST SA SN RS SC SL SG SK SI SB SO ZA KR SS ES LK SD SR SE CH SY TW TJ TZ TH TL TG TO TT TN TR TM TV UG UA AE GB US UY UZ VU VA VE VN YE ZM ZW'.split(' ');

/** Pays proposés en tête de liste : ceux d'où vient la majorité des donateurs. */
const SUGGESTED_COUNTRIES = ['HT', 'US', 'CA', 'FR', 'DO'];

@Component({
  imports: [Container],
  selector: 'app-donate',
  templateUrl: './donate.html',
  styleUrl: './donate.css',
})
export default class Donate {
  protected readonly language = inject(LanguageService);
  private readonly company = inject(CompanyService).company;
  protected readonly content = computed(() => this.language.content().donate);
  protected readonly form = computed(() => this.content().form);

  private readonly formSection = viewChild.required<ElementRef<HTMLElement>>('formSection');
  private readonly formEl = viewChild<ElementRef<HTMLFormElement>>('formEl');

  protected readonly step = signal(0);
  protected readonly done = signal(false);
  protected readonly error = signal<string | null>(null);

  protected readonly frequency = signal<DonationFrequency>('once');
  protected readonly currencies = computed(() => Object.keys(this.form().presets));
  protected readonly currency = signal('USD');
  protected readonly presets = computed(() => this.form().presets[this.currency()] ?? []);
  /** Montant choisi parmi les propositions, ou saisi librement. */
  protected readonly amount = signal<number | null>(50);
  protected readonly customAmount = signal(false);
  protected readonly designation = signal(0);
  protected readonly method = signal<string | null>(null);

  protected readonly formattedAmount = computed(() => {
    const amount = this.amount();
    return amount ? this.format(amount) : '—';
  });

  protected readonly methodLabel = computed(
    () => this.form().payment.methods.find((m) => m.id === this.method())?.label ?? '—',
  );

  protected readonly countries = computed(() => {
    const names = new Intl.DisplayNames([this.language.language()], { type: 'region' });
    const toOption = (code: string) => ({ code, name: names.of(code) ?? code });
    const rest = COUNTRY_CODES.filter((code) => !SUGGESTED_COUNTRIES.includes(code))
      .map(toOption)
      .sort((a, b) => a.name.localeCompare(b.name, this.language.language()));
    return { suggested: SUGGESTED_COUNTRIES.map(toOption), rest };
  });

  /** Question de la FAQ dépliée (une seule à la fois). */
  protected readonly openFaq = signal<number | null>(null);

  constructor() {
    injectPageAnimations();
  }

  protected toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }

  protected scrollToForm(): void {
    this.formSection().nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  /** Montant avec le symbole et la ponctuation de la langue courante : « 50 $US », « 1 000 HTG »… */
  protected format(amount: number, currency = this.currency()): string {
    return new Intl.NumberFormat(this.language.language(), {
      style: 'currency',
      currency,
      maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    }).format(amount);
  }

  protected setCurrency(code: string): void {
    this.currency.set(code);
    // Les montants proposés changent d'échelle d'une devise à l'autre (USD → HTG).
    if (!this.customAmount()) {
      this.amount.set(this.presets()[1] ?? this.presets()[0] ?? null);
    }
  }

  protected pickPreset(value: number): void {
    this.customAmount.set(false);
    this.amount.set(value);
    this.error.set(null);
  }

  protected pickCustom(): void {
    this.customAmount.set(true);
    this.amount.set(null);
  }

  protected onCustomInput(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.amount.set(value > 0 ? value : null);
    this.error.set(null);
  }

  protected pickMethod(id: string): void {
    this.method.set(id);
    this.error.set(null);
  }

  protected next(): void {
    if (!this.validateStep()) {
      return;
    }
    this.error.set(null);
    this.step.update((s) => s + 1);
    this.scrollToForm();
  }

  protected back(): void {
    this.error.set(null);
    this.step.update((s) => Math.max(0, s - 1));
    this.scrollToForm();
  }

  protected submit(event: SubmitEvent): void {
    event.preventDefault();
    if (this.step() < this.form().steps.length - 1) {
      this.next();
      return;
    }
    if (!this.validateStep()) {
      return;
    }

    const data = new FormData(event.target as HTMLFormElement);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    const f = this.form();
    const country = this.countries().suggested.concat(this.countries().rest).find((c) => c.code === field('country'));

    const frequency = this.frequency() === 'monthly' ? f.frequency.monthly : f.frequency.once;
    const body = [
      `${f.summary.amount} : ${this.formattedAmount()} (${frequency})`,
      `${f.summary.designation} : ${f.designation.options[this.designation()]}`,
      `${f.summary.method} : ${this.methodLabel()}`,
      '',
      `${field('firstName')} ${field('lastName')}`,
      field('email'),
      field('phone'),
      country?.name ?? '',
      ...(data.has('anonymous') ? [f.donor.anonymous] : []),
      ...(field('message') ? ['', field('message')] : []),
    ].join('\n');

    const subject = `${f.title} — ${this.formattedAmount()} (${frequency})`;
    const params = new URLSearchParams({ subject, body });
    window.location.href = `mailto:${this.company().contact.email.content}?${params.toString().replace(/\+/g, '%20')}`;
    this.done.set(true);
    this.scrollToForm();
  }

  protected restart(): void {
    this.formEl()?.nativeElement.reset();
    this.step.set(0);
    this.method.set(null);
    this.done.set(false);
  }

  /** L'étape « Informations » s'appuie sur la validation native du navigateur (messages déjà traduits). */
  private validateStep(): boolean {
    const f = this.form();
    switch (this.step()) {
      case 0:
        if (!this.amount()) {
          this.error.set(f.errors.amount);
          return false;
        }
        return true;
      case 1: {
        const fields = this.formEl()?.nativeElement.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
          '[data-step="1"] input, [data-step="1"] select',
        );
        const invalid = Array.from(fields ?? []).find((el) => !el.checkValidity());
        invalid?.reportValidity();
        return !invalid;
      }
      default:
        if (!this.method()) {
          this.error.set(f.errors.method);
          return false;
        }
        return true;
    }
  }
}
