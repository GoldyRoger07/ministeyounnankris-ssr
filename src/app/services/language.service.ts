import { computed, DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { SiteContent } from '../models/content.model';
import { fr } from '../config/content/fr';
// import { en } from '../config/content/en';

/** Locales disponibles. Ajouter une locale = ajouter un fichier dans `config/content/`. */
export type Locale = 'fr' ;

export const CATALOG: Record<Locale, SiteContent> = { fr };

export const DEFAULT_LOCALE: Locale = 'fr';

/** Préfixe d'URL de chaque locale : le français, langue principale, est servi sans préfixe. */
export const LOCALE_PREFIX: Record<Locale, string> = { fr: 'fr'};

/** Adresse à laquelle le projet est monté dans l'application hôte (voir `app.routes.ts`). */
export const BASE_PATH = '/';

/** Valeur de `og:locale` pour chaque locale. */
const OG_LOCALE: Record<Locale, string> = { fr: 'fr_FR'};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  /** Langue du document avant l'entrée dans le projet, rétablie à la sortie. */
  private readonly hostLang = this.document.documentElement.lang;

  readonly language = signal<Locale>(DEFAULT_LOCALE);

  /** Contenu éditorial de la locale courante. */
  readonly content = computed(() => CATALOG[this.language()]);

  readonly ogLocale = computed(() => OG_LOCALE[this.language()]);

  /** La locale vers laquelle bascule le sélecteur de langue. */
  // readonly otherLanguage = computed<Locale>(() => (this.language() === 'fr' ? 'en' : 'fr'));
  readonly otherLanguage = signal<Locale>('fr');

  setLanguage(locale: Locale): void {
    this.language.set(locale);
    // Rendu serveur compris : le HTML envoyé porte la bonne langue.
    this.document.documentElement.lang = locale;
  }

  /** Rend au reste du site la langue qu'il avait déclarée. */
  restoreHostLanguage(): void {
    this.document.documentElement.lang = this.hostLang;
  }

  /**
   * Adresse réelle d'une page du projet dans une locale (courante par défaut) :
   * `/` → `/secogroupe-centers/en`, `/register-now` → `/secogroupe-centers/en/register-now`.
   * Les liens externes (`https://…`, `mailto:…`) sont renvoyés tels quels.
   */
  localize(url: string, locale: Locale = this.language()): string {
    if (!url.startsWith('/')) {
      return url;
    }
    const prefix = LOCALE_PREFIX[locale];
    const root = prefix ? `${BASE_PATH}/${prefix}` : BASE_PATH;
    return url === '/' ? root : `${root}${url}`;
  }

  /** Même page, dans une autre locale : `/secogroupe-centers/en/x?y=1` → `/secogroupe-centers/x?y=1`. */
  translateUrl(url: string, locale: Locale): string {
    return this.localize(toProjectUrl(url), locale);
  }
}

/** Retire la base et le préfixe de locale : `/secogroupe-centers/en/x` → `/x`, `/secogroupe-centers` → `/`. */
function toProjectUrl(url: string): string {
  let rest = stripSegment(url, BASE_PATH);
  for (const prefix of Object.values(LOCALE_PREFIX)) {
    if (prefix) {
      rest = stripSegment(rest, `/${prefix}`);
    }
  }
  return rest.startsWith('/') ? rest : `/${rest}`;
}

function stripSegment(url: string, segment: string): string {
  const matches = url.startsWith(segment) && /^($|[/?#])/.test(url.slice(segment.length));
  return matches ? url.slice(segment.length) : url;
}
