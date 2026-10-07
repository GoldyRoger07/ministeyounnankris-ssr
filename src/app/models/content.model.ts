import { LinkItem } from './link-item.model';

/**
 * Formes de contenu partagées par toutes les pages du site.
 * Une locale = un fichier dans `config/content/` qui implémente `SiteContent`.
 *
 * Les URLs sont écrites sans préfixe de langue ni base (`/`, `/register-now`) :
 * `LanguageService.localize()` les convertit en adresses réelles.
 */

export interface NavItem {
  label: string;
  url?: string;
  children?: LinkItem[];
}

export interface Seo {
  title: string;
  description: string;
}

export interface Image{
  url: string
  alt?: string
}

export interface Card{
  title: string
  desc: string
  image?: Image
  icon?: string

}

export interface Section{
  title?: string
  subtitle?: string
  desc?: string
  cards?: Card[]
  cta1?: LinkItem
  cta2?: LinkItem
  content?:{
        title: string
        subtitle: string
        desc: string
  }[]
}

/** Pages qui ont leur propre bloc `seo` (clé `data.seo` des routes). */
export type SeoPage = 'home' | 'about' | 'notFound';

export interface SiteContent {
  /** Nom affiché de la langue, utilisé par le sélecteur (« Français », « English »). */
  languageName: string;

  nav: NavItem[];

  header: {
    skipToContent: string;
    mainNav: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    /** Libellé accessible du sélecteur de langue : « Langue ». */
    language: string;
    actions: {
      askForPraye: LinkItem;
      // login: LinkItem;
    };
  };

  footer: {
    tagline: string;
    rights: string;
    contact: string;
  };

  home: {
    seo: Seo;

    heroSection:  Section
    
    whoWeAreSection: Section
    visionAndMissionSection: Section

    nosPilierSection: Section

    uneCommunauteUnieSection: Section

    choralesAndGroupSection: Section

    evenementSection: Section

    formationSection: Section

    prayerSection:{
      title: string
      desc: string
      title2: string
      formulaire:{
        nom: string
        email: string
        telephone: string
        sujet: string
        message: string
        option: string
      }
    }

    mediaSection: Section

    lastCtaSection: Section
  };


  about:{
    seo: Seo;
    heroSection:{
      title: string;
      description: string;
      heroImages: string[]
    }
    section2: {
      p1: string
      p2: string
      p3: string
    }

    section3:{
      title: string
      cards: {
        icon: string
        title: string
        desc: string
      }[]
    }

    section4: {
      title: string
      desc1: string
      desc2: string
      cta:{
        content: string
        link: string
      }

      desc3: string
    }
  };

  notFound: {
    seo: Seo;
    code: string;
    title: string;
    lead: string;
    back: string;
  };
}
