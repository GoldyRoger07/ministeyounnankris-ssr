import { Component, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { SeoService } from '../../services/seo.service';

@Component({
  imports: [Header, RouterOutlet, Footer],
  selector: 'app-app-layout',
  styleUrl: './app-layout.css',
  templateUrl: './app-layout.html',
})
export class AppLayout {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  constructor() {
    // Titre et description suivent la page (`data.seo` des routes) et la langue.
    this.seo.setPageFrom(this.router.routerState.snapshot.root);
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.seo.setPageFrom(this.router.routerState.snapshot.root));

    effect(() => this.seo.apply());
  }
}
