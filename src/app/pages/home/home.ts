import { Component, computed, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Container } from '../../components/container/container';
import { Hero } from '../../components/hero/hero';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [Header, Footer, Container, Hero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export default class Home {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().home); 
}
