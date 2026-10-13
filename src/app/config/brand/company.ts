import { Company } from '../../models/company.model';

/** Identité de la compagnie : un seul endroit à modifier pour toute l'application. */
export const companyConfig: Company = {
  name: 'Ministe Youn Nan Kris',
  legalName: 'Ministe Youn Nan Kris',
  logo: {
    light: '/img/mynk-logo.svg',
    dark: '/images/logos/new_seco_white_logo.png',
  },
  contact: {

    email: {
      icon: 'fa-solid fa-envelope',
      content: 'contact@ministeyounnankris.com'
    },
    phone: {
      icon: 'fa-solid fa-phone',
      content: '50934585426',
      label: '+509 34 58 5426'
    },
    address: {
      icon: 'fa-solid fa-envelope',
      content: 'contact@ministeyounnankris.com'
    }
  },
  socials: [
    {
      icon: 'fa-brands fa-square-facebook',
      url: ''
    },
    {
      icon: 'fa-brands fa-tiktok',
      url: ''
    },
    {
      icon: 'fa-brands fa-instagram',
      url: ''
    },
    {
      icon: 'fa-brands fa-youtube',
      url: ''
    },
  ]
};
