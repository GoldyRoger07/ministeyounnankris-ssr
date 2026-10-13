/** Données de marque indépendantes de la langue (les textes traduits vivent dans `config/content/`). */
export interface Company {
  name: string;
  legalName: string;
  logo: Logo;
  contact: Contact;
  socials: SocialLinkItem[]
}

export interface Logo {
  light: string;
  dark: string;
}

export interface Contact {
  email: ContactItem;
  phone: ContactItem;
  address: ContactItem;
}

export interface SocialLinkItem{
  icon: string
  label?: string
  url: string
}

export interface ContactItem{
  icon: string
  content: string
  label?: string
}
