import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { injectPageAnimations } from '../../animations/page-animations';

@Component({
  imports: [Container, RouterLink],
  selector: 'app-events',
  templateUrl: './events.html',
})
export default class Events {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().events);

  private readonly firstSection = viewChild.required<ElementRef<HTMLElement>>('firstSection');

  constructor() {
    injectPageAnimations();
  }

  protected scrollToContent(): void {
    this.firstSection().nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
