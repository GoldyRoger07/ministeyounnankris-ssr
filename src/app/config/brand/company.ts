import { Company } from '../../models/company.model';

/** Identité de la compagnie : un seul endroit à modifier pour toute l'application. */
export const companyConfig: Company = {
  name: 'Ministe Youn Nan Kris',
  legalName: 'Ministe Youn Nan Kris',
  logo: {
    light: '/img/mynk.svg',
    dark: '/images/logos/new_seco_white_logo.png',
  },
  contact: {
    email: 'contact@ministeyounnankris.com',
    phone: '',
    address: '',
  },
};
