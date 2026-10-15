import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Nouvelle page : retour en haut ; retour arrière : position précédente ; `#ancre` : défilement.
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    // Le HTML du serveur est réutilisé tel quel, et les clics faits avant l'hydratation sont rejoués.
    provideClientHydration(withEventReplay()),
  ],
};
