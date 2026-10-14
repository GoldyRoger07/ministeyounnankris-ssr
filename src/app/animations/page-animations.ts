import { afterNextRender, DestroyRef, ElementRef, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

/**
 * Animations d'apparition communes aux pages, à appeler dans le constructeur d'un composant de page :
 * - `h1`, `h2` : les mots montent depuis le masque de leur ligne (SplitText) ;
 * - `[data-reveal]` : fondu montant, échelonné par lots ;
 * - `[data-counter]` : le nombre compte de 0 à sa valeur (« 210+ » → 0+ … 210+).
 *
 * Navigateur uniquement, et l'état caché n'est posé que par GSAP : le HTML rendu garde tout son texte (SEO).
 * `setup` accueille les animations propres à la page ; elle reçoit `reducedMotion` pour afficher l'état final.
 */
export function injectPageAnimations(setup?: (reducedMotion: boolean) => void): void {
  const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  const destroyRef = inject(DestroyRef);

  afterNextRender(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      setup?.(reducedMotion);
      if (reducedMotion) {
        return;
      }
      revealTitles(host);
      revealBlocks(host);
      countUp(host);
    });

    destroyRef.onDestroy(() => ctx.revert());
  });
}

/** `autoSplit` redécoupe (et rejoue l'animation) si les polices ou la largeur changent les retours à la ligne. */
function revealTitles(host: HTMLElement): void {
  host.querySelectorAll<HTMLElement>('h1, h2').forEach((title) => {
    SplitText.create(title, {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.words, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }),
    });
  });
}

function revealBlocks(host: HTMLElement): void {
  const blocks = gsap.utils.toArray<HTMLElement>('[data-reveal]', host);
  gsap.set(blocks, { opacity: 0, y: 30 });
  ScrollTrigger.batch(blocks, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.12,
        clearProps: 'opacity,transform',
      }),
  });
}

/** On écrit dans le nœud texte d'Angular lui-même, pour que ses mises à jour (changement de langue) s'y appliquent encore. */
function countUp(host: HTMLElement): void {
  host.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const text = el.firstChild;
    const match = text instanceof Text ? text.data.match(/^(\D*)(\d+)(.*)$/s) : null;
    if (!(text instanceof Text) || !match) {
      return;
    }
    const [, prefix, digits, suffix] = match;
    const counter = { value: 0 };
    text.data = `${prefix}0${suffix}`;

    gsap.to(counter, {
      value: Number(digits),
      duration: 2.5,
      ease: 'power2.out',
      snap: { value: 1 },
      onUpdate: () => {
        text.data = `${prefix}${counter.value}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        once: true,
      },
    });
  });
}
