import { RenderMode, ServerRoute } from '@angular/ssr';
import { CATALOG, LOCALE_PREFIX, Locale } from './services/language.service';
import { PAGE_IDS, PAGE_SLUGS } from './config/pages';

/**
 * Toutes les pages sont prérendues au build (SSG) : HTML complet, servi instantanément et lisible par les moteurs.
 * Le reste (redirection de `/`, pages 404) est rendu à la demande par le serveur, pour renvoyer le bon statut HTTP.
 */
const prerendered: ServerRoute[] = (Object.keys(CATALOG) as Locale[]).flatMap((locale) =>
  PAGE_IDS.map((page) => ({
    path: [LOCALE_PREFIX[locale], PAGE_SLUGS[page][locale]].filter(Boolean).join('/'),
    renderMode: RenderMode.Prerender,
  })),
);

export const serverRoutes: ServerRoute[] = [
  ...prerendered,
  { path: '**', renderMode: RenderMode.Server },
];
