import { Component, computed, inject, RESPONSE_INIT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [Container, RouterLink],
  selector: 'app-not-found',
  templateUrl: './not-found.html',
})
export default class NotFound {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().notFound);

  constructor() {
    // Rendu serveur : vrai statut 404, pour que les moteurs n'indexent pas l'adresse.
    const response = inject(RESPONSE_INIT, { optional: true });
    if (response) {
      response.status = 404;
    }
  }
}
