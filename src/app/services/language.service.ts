import { computed, DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { SiteContent } from '../models/content.model';
import { fr } from '../config/content/fr';
import { en } from '../config/content/en';
import { isPageId, PAGE_SLUGS, pageIdFromSlug } from '../config/pages';

/** Locales disponibles. Ajouter une locale = ajouter un fichier dans `config/content/` et ses adresses dans `config/pages.ts`. */
export type Locale = 'fr' | 'en';

export const CATALOG: Record<Locale, SiteContent> = { fr, en };

export const DEFAULT_LOCALE: Locale = 'fr';

/** Préfixe d'URL de chaque locale : `/fr/…`, `/en/…`. */
export const LOCALE_PREFIX: Record<Locale, string> = { fr: 'fr', en: 'en' };

/** Adresse à laquelle le projet est monté dans l'application hôte (voir `app.routes.ts`). */
export const BASE_PATH = '/';

/** Valeur de `og:locale` pour chaque locale. */
const OG_LOCALE: Record<Locale, string> = { fr: 'fr_FR', en: 'en_US' };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  /** Langue du document avant l'entrée dans le projet, rétablie à la sortie. */
  private readonly hostLang = this.document.documentElement.lang;

  readonly language = signal<Locale>(DEFAULT_LOCALE);

  /** Contenu éditorial de la locale courante. */
  readonly content = computed(() => CATALOG[this.language()]);

  readonly ogLocale = computed(() => OG_LOCALE[this.language()]);

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
   * Adresse réelle d'une page du projet dans une locale (courante par défaut).
   * Le premier segment est un identifiant de page (voir `config/pages.ts`) :
   * `/` → `/fr`, `/about` → `/fr/a-propos` ou `/en/about-us`, `/about#equipe` → `/fr/a-propos#equipe`.
   * Les liens externes (`https://…`, `mailto:…`) et les ancres seules sont renvoyés tels quels.
   */
  localize(url: string, locale: Locale = this.language()): string {
    if (!url.startsWith('/')) {
      return url;
    }
    const { segments, suffix } = parse(url);
    const [first, ...rest] = segments;
    const slug = first && isPageId(first) ? PAGE_SLUGS[first][locale] : first;
    return joinPath(BASE_PATH, LOCALE_PREFIX[locale], slug, ...rest) + suffix;
  }

  /** Même page, dans une autre locale : `/fr/a-propos?x=1` → `/en/about-us?x=1`. */
  translateUrl(url: string, locale: Locale): string {
    const { segments, suffix } = parse(toProjectUrl(url));
    const [first, ...rest] = segments;
    const page = first ? (pageIdFromSlug(first) ?? first) : '';
    return this.localize(joinPath(page, ...rest) + suffix, locale);
  }
}

/** Retire la base et le préfixe de locale : `/fr/a-propos` → `/a-propos`, `/fr` → `/`. */
function toProjectUrl(url: string): string {
  let rest = BASE_PATH === '/' ? url : stripSegment(url, BASE_PATH);
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

/** Sépare le chemin de sa requête et de son ancre : `/a/b?x#y` → `['a', 'b']` + `?x#y`. */
function parse(url: string): { segments: string[]; suffix: string } {
  const index = url.search(/[?#]/);
  const path = index === -1 ? url : url.slice(0, index);
  const suffix = index === -1 ? '' : url.slice(index);
  return { segments: path.split('/').filter(Boolean), suffix };
}

/** `joinPath('/', 'fr', '', undefined, 'a-propos')` → `/fr/a-propos` (la page d'accueil n'a pas de segment). */
function joinPath(...parts: (string | undefined)[]): string {
  return '/' + parts.flatMap((part) => part?.split('/') ?? []).filter(Boolean).join('/');
}
