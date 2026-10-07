import { Routes } from '@angular/router';
import { LOCALE_PREFIX, Locale } from './services/language.service';
import { AppLayout } from './layout/app-layout/app-layout';
import { localeGuard } from './services/locale.guard';

export const routes: Routes = [
   
    {
        path: LOCALE_PREFIX['fr'],
        component: AppLayout,
        canActivate: [localeGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./pages/home/home')
            }
        ]
    }
];
