/**
 * Données SEO indépendantes de la langue.
 * `SITE_URL` sert aux adresses absolues : canonical, hreflang, Open Graph, sitemap, données structurées.
 */
export const SITE_URL = 'https://www.ministeyounnankris.com';

export const SITE_NAME = 'Ministè Youn Nan Kris';

/** Image de partage par défaut (réseaux sociaux), idéalement 1200 × 630. */
export const DEFAULT_SHARE_IMAGE = '/img/home/mynk-members.jpg';

export const FOUNDING_DATE = '2021-05-15';

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}
