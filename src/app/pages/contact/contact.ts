import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { CompanyService } from '../../services/company.service';
import { injectPageAnimations } from '../../animations/page-animations';

@Component({
  imports: [Container],
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export default class Contact {
  protected readonly language = inject(LanguageService);
  protected readonly company = inject(CompanyService).company;
  protected readonly content = computed(() => this.language.content().contact);

  private readonly firstSection = viewChild.required<ElementRef<HTMLElement>>('firstSection');

  constructor() {
    injectPageAnimations();
  }

  protected scrollToContent(): void {
    this.firstSection().nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  /** Pas encore de backend : le message est confié à la messagerie du visiteur. */
  protected send(event: SubmitEvent): void {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const field = (name: string) => String(data.get(name) ?? '').trim();

    const body = [
      field('message'),
      '',
      field('nom'),
      field('email'),
      field('telephone'),
    ].join('\n');

    const params = new URLSearchParams({ subject: field('sujet'), body });
    window.location.href = `mailto:${this.company().contact.email.content}?${params.toString().replace(/\+/g, '%20')}`;
  }
}
