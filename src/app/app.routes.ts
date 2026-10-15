import { Routes } from '@angular/router';
import { Type } from '@angular/core';
import { CATALOG, DEFAULT_LOCALE, LOCALE_PREFIX, Locale } from './services/language.service';
import { AppLayout } from './layout/app-layout/app-layout';
import { localeGuard } from './services/locale.guard';
import { PAGE_IDS, PAGE_SLUGS, PageId } from './config/pages';

const PAGE_COMPONENTS: Record<PageId, () => Promise<{ default: Type<unknown> }>> = {
  home: () => import('./pages/home/home'),
  about: () => import('./pages/about/about'),
  activities: () => import('./pages/activities/activities'),
  formations: () => import('./pages/formations/formations'),
  medias: () => import('./pages/medias/medias'),
  events: () => import('./pages/events/events'),
  donate: () => import('./pages/donate/donate'),
  contact: () => import('./pages/contact/contact'),
};

/** Adresse inconnue : vraie page 404 (statut HTTP compris), dans la langue de la branche. */
const notFoundRoute = {
  path: '**',
  data: { seo: 'notFound' },
  loadComponent: () => import('./pages/not-found/not-found'),
};

/** Une branche par langue, chaque page y ayant son adresse traduite (`/fr/a-propos`, `/en/about-us`). */
const localeRoutes: Routes = (Object.keys(CATALOG) as Locale[]).map((locale) => ({
  path: LOCALE_PREFIX[locale],
  component: AppLayout,
  canActivate: [localeGuard(locale)],
  children: [
    ...PAGE_IDS.map((page) => ({
      path: PAGE_SLUGS[page][locale],
      pathMatch: 'full' as const,
      data: { seo: page },
      loadComponent: PAGE_COMPONENTS[page],
    })),
    notFoundRoute,
  ],
}));

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: LOCALE_PREFIX[DEFAULT_LOCALE] },
  ...localeRoutes,
  // Hors de toute langue (`/xyz`) : 404 dans la langue par défaut.
  {
    path: '',
    component: AppLayout,
    canActivate: [localeGuard(DEFAULT_LOCALE)],
    children: [notFoundRoute],
  },
];
