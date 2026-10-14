import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { injectPageAnimations } from '../../animations/page-animations';

@Component({
  imports: [Container],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export default class About {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().about);

  private readonly missionSection = viewChild.required<ElementRef<HTMLElement>>('missionSection');

  constructor() {
    injectPageAnimations();
  }

  protected scrollToMission(): void {
    this.missionSection().nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
