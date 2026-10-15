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
  /** Petite étiquette au-dessus du titre (catégorie, type d'événement…). */
  tag?: string
  date?: string
  location?: string
  url?: string

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
export type SeoPage = 'home' | 'about' | 'activities' | 'formations' | 'medias' | 'events' | 'contact' | 'donate' | 'notFound';

export type DonationFrequency = 'once' | 'monthly';

export interface PaymentMethod {
  id: string
  label: string
  desc: string
  icon: string
}

export interface DonationForm {
  subtitle: string
  title: string
  desc: string
  /** Libellés des étapes du parcours, dans l'ordre. */
  steps: string[]
  frequency: { label: string; once: string; monthly: string; perMonth: string }
  currency: { label: string }
  /** Code ISO 4217 → montants proposés. La première devise est celle par défaut. */
  presets: Record<string, number[]>
  amount: { label: string; custom: string; placeholder: string }
  designation: { label: string; options: string[] }
  donor: {
    title: string
    firstName: FormInputContent
    lastName: FormInputContent
    email: FormInputContent
    phone: FormInputContent
    country: FormInputContent
    message: FormInputContent
    anonymous: string
    optional: string
  }
  payment: { title: string; methods: PaymentMethod[] }
  summary: { title: string; amount: string; frequency: string; designation: string; method: string }
  secure: string
  back: string
  next: string
  submit: string
  errors: { amount: string; method: string }
  success: { title: string; desc: string; again: string }
}

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

  activities: {
    seo: Seo;
    heroSection: Section
    piliersSection: Section
    rythmeSection: Section
    callToActionSection: Section
  };

  formations: {
    seo: Seo;
    heroSection: Section
    catalogueSection: Section
    parcoursSection: Section
    callToActionSection: Section
  };

  medias: {
    seo: Seo;
    heroSection: Section
    categoriesSection: Section
    gallerySection: Section
    callToActionSection: Section
  };

  events: {
    seo: Seo;
    heroSection: Section
    agendaSection: Section
    callToActionSection: Section
  };

  donate: {
    seo: Seo;
    heroSection: Section
    stepsSection: Section
    form: DonationForm
    impactSection: Section
    faqSection: Section
  };

  contact: {
    seo: Seo;
    heroSection: Section
    infoSection: Section
    formSection: {
      subtitle: string
      title: string
      desc: string
      formulaire: {
        nom: FormInputContent
        email: FormInputContent
        telephone: FormInputContent
        sujet: FormInputContent
        message: FormInputContent
        cta: LinkItem
      }
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
