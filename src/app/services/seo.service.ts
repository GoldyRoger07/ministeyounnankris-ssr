import { computed, DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SeoPage } from '../models/content.model';
import { CATALOG, DEFAULT_LOCALE, LanguageService, Locale } from './language.service';
import { CompanyService } from './company.service';
import { isPageId } from '../config/pages';
import { absoluteUrl, DEFAULT_SHARE_IMAGE, FOUNDING_DATE, SITE_NAME, SITE_URL } from '../config/site';

/**
 * Balises SEO du projet, dans la langue courante, écrites aussi bien au rendu serveur qu'au navigateur :
 * titre, description, canonical, hreflang, Open Graph, Twitter, robots et données structurées (JSON-LD).
 * Chaque route désigne sa page avec `data: { seo: 'about' }`.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly language = inject(LanguageService);
  private readonly company = inject(CompanyService).company;
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly page = signal<SeoPage>('home');

  readonly seo = computed(() => this.language.content()[this.page()].seo);

  /** Lit la page déclarée par la route la plus profonde. */
  setPageFrom(snapshot: ActivatedRouteSnapshot): void {
    let route = snapshot;
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.page.set(route.data['seo'] ?? 'home');
  }

  /** Écrit les balises ; à appeler dans un `effect` pour suivre page et langue. */
  apply(): void {
    const page = this.page();
    const locale = this.language.language();
    const { title, description } = this.seo();
    const indexable = isPageId(page);
    const url = indexable ? absoluteUrl(this.language.localize(`/${page}`)) : null;
    const image = absoluteUrl(DEFAULT_SHARE_IMAGE);

    this.title.setTitle(title);
    this.setName('description', description);
    this.setName('robots', indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow');

    this.setProperty('og:site_name', SITE_NAME);
    this.setProperty('og:type', 'website');
    this.setProperty('og:title', title);
    this.setProperty('og:description', description);
    this.setProperty('og:image', image);
    this.setProperty('og:locale', this.language.ogLocale());
    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', title);
    this.setName('twitter:description', description);
    this.setName('twitter:image', image);

    this.clearLinks();
    if (url) {
      this.setProperty('og:url', url);
      this.addLink({ rel: 'canonical', href: url });
      // Chaque version linguistique pointe vers toutes les autres (et vers elle-même).
      for (const alternate of Object.keys(CATALOG) as Locale[]) {
        this.addLink({ rel: 'alternate', hreflang: alternate, href: absoluteUrl(this.language.localize(`/${page}`, alternate)) });
      }
      this.addLink({ rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(this.language.localize(`/${page}`, DEFAULT_LOCALE)) });
    } else {
      this.meta.removeTag('property="og:url"');
    }

    this.setJsonLd(this.structuredData(page, title, url));
  }

  /** Retire les balises propres au projet en le quittant. */
  clear(): void {
    this.meta.removeTag('property="og:locale"');
    this.clearLinks();
    this.document.getElementById('seo-jsonld')?.remove();
  }

  // ---- Données structurées (schema.org) ----

  private structuredData(page: SeoPage, title: string, url: string | null): object {
    const content = this.language.content();
    const company = this.company();
    const homeUrl = absoluteUrl(this.language.localize('/'));

    const organization = {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: company.name,
      url: homeUrl,
      logo: absoluteUrl(company.logo.light),
      description: content.home.seo.description,
      foundingDate: FOUNDING_DATE,
      founder: content.about.fondateurSection.cards?.map((card) => ({ '@type': 'Person', name: card.title })),
      email: company.contact.email.content,
      telephone: `+${company.contact.phone.content}`,
      sameAs: company.socials.map((social) => social.url).filter(Boolean),
    };

    const graph: object[] = [organization];

    if (page === 'home') {
      graph.push({
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: homeUrl,
        name: SITE_NAME,
        inLanguage: this.language.language(),
        publisher: { '@id': organization['@id'] },
      });
    } else if (url) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: content.nav[0]?.label ?? SITE_NAME, item: homeUrl },
          { '@type': 'ListItem', position: 2, name: title.split(' | ')[0], item: url },
        ],
      });
    }

    if (page === 'donate') {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: content.donate.faqSection.cards?.map((card) => ({
          '@type': 'Question',
          name: card.title,
          acceptedAnswer: { '@type': 'Answer', text: card.desc },
        })),
      });
    }

    return { '@context': 'https://schema.org', '@graph': graph };
  }

  // ---- Écriture dans <head> ----

  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private addLink(attributes: Record<string, string>): void {
    const link = this.document.createElement('link');
    link.setAttribute('data-seo', '');
    for (const [key, value] of Object.entries(attributes)) {
      link.setAttribute(key, value);
    }
    this.document.head.appendChild(link);
  }

  private clearLinks(): void {
    this.document.head.querySelectorAll('link[data-seo]').forEach((link) => link.remove());
  }

  private setJsonLd(data: object): void {
    let script = this.document.getElementById('seo-jsonld');
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'seo-jsonld';
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    // `<` échappé : le JSON ne peut pas refermer la balise <script>.
    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  }
}
