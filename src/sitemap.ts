import { PAGE_IDS, PAGE_SLUGS } from './app/config/pages';
import { SITE_URL } from './app/config/site';
import { CATALOG, DEFAULT_LOCALE, LOCALE_PREFIX, Locale } from './app/services/language.service';

const LOCALES = Object.keys(CATALOG) as Locale[];

function pageUrl(page: (typeof PAGE_IDS)[number], locale: Locale): string {
  const path = [LOCALE_PREFIX[locale], PAGE_SLUGS[page][locale]].filter(Boolean).join('/');
  return `${SITE_URL}/${path}`;
}

/**
 * Sitemap multilingue, construit à partir des mêmes données que les routes :
 * une entrée par page et par langue, chacune listant ses versions traduites (hreflang).
 */
export function buildSitemap(): string {
  const entries = PAGE_IDS.flatMap((page) =>
    LOCALES.map((locale) => {
      const alternates = LOCALES.map(
        (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${pageUrl(page, alt)}"/>`,
      );
      alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(page, DEFAULT_LOCALE)}"/>`);
      return [
        '  <url>',
        `    <loc>${pageUrl(page, locale)}</loc>`,
        ...alternates,
        `    <changefreq>${page === 'events' || page === 'home' ? 'weekly' : 'monthly'}</changefreq>`,
        `    <priority>${page === 'home' ? '1.0' : '0.8'}</priority>`,
        '  </url>',
      ].join('\n');
    }),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
  ].join('\n');
}
