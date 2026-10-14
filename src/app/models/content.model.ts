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
  /** Chiffre clé affiché tel quel, sans effet de compteur (ex. une année). */
  noCounter?: boolean

}

export interface FormationCard{
  cover: string
  category: string
  title: string
  shortDescription: string
  level: string
  duration: string
}

export interface Section{
  title?: string
  subtitle?: string
  desc?: string
  cards?: Card[]
  formationCards?: FormationCard[]
  cta1?: LinkItem
  cta2?: LinkItem
  content?:{
        title: string
        subtitle: string
        desc: string
  }[]
}

export interface FormInputContent{
  label: string
  placeholder: string
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
      donate: LinkItem;
      // login: LinkItem;
    };
  };

  footer: {
    tagline: string;
    rights: string;
    /** Mention de l'agence qui a réalisé le site, à côté du copyright. */
    credit: {
      label: string;
      name: string;
      url: string;
    };
    contact: string;
    legalContent:{
      label: string
      links: LinkItem[]
    }
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
      desc2: string
      formulaire:{
        nom: FormInputContent
        email: FormInputContent
        telephone: FormInputContent
        sujet: FormInputContent
        message: FormInputContent
        option: string
        cta: LinkItem
      }
    }

    mediaSection: Section

    lastCtaSection: Section
  };




  about:{
    seo: Seo;
    heroSection: Section
    missionAndValueSection: Section
    fondateurSection: Section
    callToActionSection: Section
  
  };

  notFound: {
    seo: Seo;
    code: string;
    title: string;
    lead: string;
    back: string;
  };
}
