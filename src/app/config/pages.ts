import type { Locale } from '../services/language.service';

/** Pages du site. L'identifiant sert aussi de clé de contenu SEO (`SiteContent[page].seo`). */
export type PageId = 'home' | 'about' | 'activities' | 'formations' | 'medias' | 'events' | 'donate' | 'contact';

/**
 * Adresse de chaque page dans chaque langue.
 * Dans `config/content/`, les liens internes s'écrivent avec l'identifiant de page (`/about`, `/donate`) :
 * `LanguageService.localize()` les convertit en `/fr/a-propos`, `/en/about-us`…
 */
export const PAGE_SLUGS: Record<PageId, Record<Locale, string>> = {
  home: { fr: '', en: '' },
  about: { fr: 'a-propos', en: 'about-us' },
  activities: { fr: 'nos-activites', en: 'our-activities' },
  formations: { fr: 'formations', en: 'training' },
  medias: { fr: 'medias', en: 'media' },
  events: { fr: 'evenements', en: 'events' },
  donate: { fr: 'faire-un-don', en: 'donate' },
  contact: { fr: 'contact', en: 'contact' },
};

export const PAGE_IDS = Object.keys(PAGE_SLUGS) as PageId[];

export function isPageId(value: string): value is PageId {
  return value in PAGE_SLUGS;
}

/** Identifiant de la page servie à cette adresse, dans n'importe quelle langue : `a-propos` → `about`. */
export function pageIdFromSlug(slug: string): PageId | undefined {
  return PAGE_IDS.find((id) => Object.values(PAGE_SLUGS[id]).includes(slug));
}
