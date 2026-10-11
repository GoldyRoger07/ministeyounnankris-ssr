import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'my-hero',
  standalone: true,
  templateUrl: './hero.html'
})
export class Hero implements AfterViewInit, OnDestroy {

  @ViewChild('heroVideo')
  videoRef!: ElementRef<HTMLVideoElement>;

  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    const video = this.videoRef.nativeElement;

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay éventuellement bloqué
          });
        } else {
          video.pause();
        }

      },
      {
        threshold: 0.1
      }
    );

    this.observer.observe(video);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}