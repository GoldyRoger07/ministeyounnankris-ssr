import { Component, ElementRef, computed, inject, input, output, signal, viewChildren } from '@angular/core';
import { CATALOG, LanguageService, Locale } from '../../services/language.service';

let nextId = 0;

/**
 * Sélecteur de langue personnalisé (motif ARIA « listbox ») :
 * clavier (flèches, Début/Fin, Entrée/Espace, Échap), fermeture au clic extérieur.
 * Il n'émet que le choix : la navigation reste au header.
 */
@Component({
  selector: 'language-select',
  templateUrl: './language-select.html',
  styleUrl: './language-select.css',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class LanguageSelect {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly language = inject(LanguageService);

  /** Libellé accessible : « Langue ». */
  label = input.required<string>();
  /** `up` : la liste s'ouvre au-dessus du bouton (bas du menu mobile). */
  direction = input<'down' | 'up'>('down');

  readonly changed = output<Locale>();

  protected readonly options = (Object.keys(CATALOG) as Locale[]).map((code) => ({
    code,
    name: CATALOG[code].languageName,
  }));

  protected readonly current = computed(
    () => this.options.find((option) => option.code === this.language.language()) ?? this.options[0],
  );

  protected readonly open = signal(false);
  /** Option survolée au clavier. */
  protected readonly activeIndex = signal(0);

  /** Le header en affiche deux (bureau et mobile) : chacun a ses propres ids. */
  protected readonly listId = `language-list-${nextId++}`;

  private readonly optionEls = viewChildren<ElementRef<HTMLElement>>('optionEl');

  protected toggle(): void {
    this.open() ? this.close() : this.show();
  }

  protected show(): void {
    this.activeIndex.set(this.options.indexOf(this.current()));
    this.open.set(true);
  }

  protected close(): void {
    this.open.set(false);
  }

  protected select(code: Locale): void {
    this.close();
    if (code !== this.language.language()) {
      this.changed.emit(code);
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    const last = this.options.length - 1;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault();
        if (!this.open()) {
          this.show();
          return;
        }
        const step = event.key === 'ArrowDown' ? 1 : -1;
        this.moveTo(Math.min(last, Math.max(0, this.activeIndex() + step)));
        return;
      }
      case 'Home':
      case 'End':
        if (this.open()) {
          event.preventDefault();
          this.moveTo(event.key === 'Home' ? 0 : last);
        }
        return;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.open()) {
          this.select(this.options[this.activeIndex()].code);
        } else {
          this.show();
        }
        return;
      case 'Escape':
        if (this.open()) {
          // Ne pas refermer aussi le menu mobile.
          event.stopPropagation();
          this.close();
        }
        return;
      case 'Tab':
        this.close();
        return;
    }
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (this.open() && !this.host.contains(event.target as Node)) {
      this.close();
    }
  }

  private moveTo(index: number): void {
    this.activeIndex.set(index);
    this.optionEls()[index]?.nativeElement.scrollIntoView({ block: 'nearest' });
  }
}
