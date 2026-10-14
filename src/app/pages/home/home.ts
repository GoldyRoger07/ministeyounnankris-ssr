import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { gsap } from 'gsap';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Container } from '../../components/container/container';
import { Hero } from '../../components/hero/hero';
import { LanguageService } from '../../services/language.service';
import { InfiniteHorizontalScroll } from '../../components/infinite-horizontal-scroll/infinite-horizontal-scroll';
import { injectPageAnimations } from '../../animations/page-animations';

@Component({
  imports: [Header, Footer, Container, Hero, InfiniteHorizontalScroll],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export default class Home {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().home);

  private readonly choralesSection = viewChild.required<ElementRef<HTMLElement>>('choralesSection');
  private readonly choralesLine = viewChild.required<ElementRef<SVGPathElement>>('choralesLine');

  constructor() {
    injectPageAnimations((reducedMotion) => {
      const line = this.choralesLine().nativeElement;

      if (reducedMotion) {
        gsap.set(line, { attr: { 'stroke-dashoffset': 0 } });
        return;
      }

      // Le tracé (pathLength = 1) se dessine une fois la section visible à l'écran.
      gsap.to(line, {
        // Attribut SVG (et non propriété CSS) : CSSPlugin arrondirait 1px → 0px d'un coup.
        attr: { 'stroke-dashoffset': 0 },
        duration: 5,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: this.choralesSection().nativeElement,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    });
  }
}
