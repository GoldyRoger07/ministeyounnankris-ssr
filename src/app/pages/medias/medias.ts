import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { CompanyService } from '../../services/company.service';
import { injectPageAnimations } from '../../animations/page-animations';

@Component({
  imports: [Container, RouterLink],
  selector: 'app-medias',
  templateUrl: './medias.html',
})
export default class Medias {
  protected readonly language = inject(LanguageService);
  protected readonly company = inject(CompanyService).company;
  protected readonly content = computed(() => this.language.content().medias);

  private readonly firstSection = viewChild.required<ElementRef<HTMLElement>>('firstSection');

  constructor() {
    injectPageAnimations();
  }

  protected scrollToContent(): void {
    this.firstSection().nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
