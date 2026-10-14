import { SiteContent } from '../../models/content.model';

export const fr: SiteContent = {
  languageName: 'Français',

  nav: [
    { label: 'Accueil', url: '/'},
    { label: 'À propos', url: '/about-us'},
    { label: 'Nos activités', url: '/'},
    { label: 'Formations', url: '/'},
    { label: 'Médias', url: '/'},
    { label: 'Événements', url: "/" },
    { label: 'Contact', url: "/" }

  ],

  header: {
    skipToContent: 'Aller au contenu principal',
    mainNav: 'Navigation principale',
    homeAria: 'Ministe Youn Nan Kris — accueil',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    actions: {
      askForPraye: { label: "Demande de prière", url: '/prayer-request' },
      donate: { label: 'Faire un don', url: '/donate' },
    },
  },

  footer: {
    tagline: 'Ministè Youn Nan Kris rassemble des croyants, chorales, musiciens et serviteurs autour d\'une même mission : louer Dieu, annoncer l\'Évangile, grandir dans la prière et servir notre communauté.',
    rights: 'Tous droits réservés.',
    credit: {
      label: 'Conçu et développé par',
      name: 'Raiki Services',
      url: 'https://www.raikiservices.com',
    },
    contact: 'Nous contacter',
    legalContent: {
      label: 'Informations légales',
      links: [
        {
          label: 'Mentions légales',
          url: ''
        },
        {
          label: 'Politique de confidentialité',
          url: ''
        },
        {
          label: 'Politique de cookies',
          url: ''
        },
        {
          label: 'Conditions générales',
          url: ''
        }
      ]
    }
  },

  home: {
    seo: {
      title: 'Ministe Youn Nan Kris',
      description: 'Ministè Youn Nan Kris rassemble des croyants, chorales, musiciens et serviteurs autour d\'une même mission : louer Dieu, annoncer l\'Évangile, grandir dans la prière et servir notre communauté.',
    },

    heroSection: {
      title: 'A Dieu soit la Gloire',
      desc: 'Ministè Youn Nan Kris rassemble des croyants, chorales, musiciens et serviteurs autour d\'une même mission : louer Dieu, annoncer l\'Évangile, grandir dans la prière et servir notre communauté.',
      cta1:{
        label: 'Découvrir le ministère',
        url: '/'
      },
      cta2:{
        label: 'Demande de prière',
        url: '/'
      }
    },
    whoWeAreSection: {
      title: 'Ministè Youn Nan Kris',
      subtitle: 'Depuis 2021, unis pour faire grandir le Royaume de Dieu.',
      desc: 'Ministè Youn Nan Kris est né le 15 mai 2021 dans un contexte de collaboration entre plusieurs chorales. Aujourd\'hui, le ministère rassemble choristes, musiciens, pasteurs et différents groupes autour d\'une même vision spirituelle.',
      cta1: {
        label: 'Découvrir notre histoire',
        url: '/'
      }
    },
    visionAndMissionSection: {
      content:[
        {
          title: 'Notre Vision',
          subtitle: 'Être un phare spirituel dans notre communauté.',
          desc: 'Créer un espace physique et virtuel où chacun peut trouver réconfort, guidance et inspiration, tout en rendant accessibles des formations et des ressources spirituelles au-delà des frontières géographiques et sociales.'
        },
        {
          title: 'Notre Mission',
          subtitle: 'Créer un espace de croissance spirituelle ouvert à tous.',
          desc: 'Favoriser la prière, proposer des formations et ressources pour nourrir la foi et promouvoir l\'amour, la compassion et l\'unité au sein de la société.'
        }
      ]
    },
    nosPilierSection: {
      title: 'Nos piliers',
      cards:[
        {
          icon: '🎵',
          title: 'Louange & Adoration',
          desc: 'Services de louange, musique chrétienne, développement des talents, ateliers et accompagnement des chorales.'
        },
        {
          icon: '✝️',
          title: 'Évangélisation',
          desc: 'Concerts publics, réveils spirituels, retraites et initiatives permettant de partager l\'Évangile.'
        },
        {
          icon: '🙏',
          title: 'Prière',
          desc: 'Réunions de prière, veillées, intercession, accompagnement et ressources permettant de développer une vie de prière.'
        },
        {
          icon: '📖',
          title: 'Formation & Discipulat',
          desc: 'Programmes de formation permettant aux membres de grandir spirituellement et de devenir des disciples engagés.'
        },
        {
          icon: '❤️',
          title: 'Action communautaire',
          desc: 'Initiatives sociales, soutien aux personnes dans le besoin, cliniques mobiles et collaborations avec d\'autres organisations.'
        }
      ],
      cta1:{
        label: 'Découvrir nos activités',
        url: '/'
      }
    },
    uneCommunauteUnieSection: {
      title: 'Une communauté unie',
      cards: [
        {
          title: 'Année de fondation',
          desc: '2021',
          noCounter: true
        },
        {
          title: 'Membres actifs',
          desc: '210+'
        },
        {
          title: 'Chorales & groupes',
          desc: '9+'
        },
        {
          title: 'Mission commune',
          desc: '1'
        }
      ]
    },
    choralesAndGroupSection: {
      title: 'Chorales & groupes',
      cards: [
        {
          title: 'Les Bénis de l\'Éternel',
          desc: ''
        },
        {
          title: 'Voice Of God Gospel',
          desc: ''
        },{
          title: 'Marge Gospel',
          desc: ''
        },{
          title: 'Les Amis de Dieu',
          desc: ''
        },{
          title: 'TEE Mass Choir',
          desc: ''
        },{
          title: 'Ehud Athaja',
          desc: ''
        },{
          title: 'Salem International',
          desc: ''
        },{
          title: 'Prémices de Shékinah',
          desc: ''
        },{
          title: 'Holy Music',
          desc: ''
        },
      ]
    },
    evenementSection: {
      title: 'Nos prochains rendez-vous',
      cards:[
        {
          title: 'Concert de louange',
          desc: '12/04/2021, Petion-Ville, Rue Faubert',
          image:{
            url: '/img/events/event-1.webp',
            alt: ''
          }
        },
        {
          title: 'Veillée de prière',
          desc: '12/04/2021, Petion-Ville, Rue Faubert',
          image:{
            url: '/img/events/event-2.webp',
            alt: ''
          }
        },{
          title: 'Réveil spirituel',
          desc: '12/04/2021, Petion-Ville, Rue Faubert',
          image:{
            url: '/img/events/event-3.webp',
            alt: ''
          }
        },{
          title: 'Retraite spirituelle',
          desc: '12/04/2021, Petion-Ville, Rue Faubert',
          image:{
            url: '/img/events/event-4.webp',
            alt: ''
          }
        }
      ],
      cta1: {
        label: 'Voir tous les événements',
        url: '/'
      }
    },
    formationSection: {
      title: 'Grandir dans la foi',
      subtitle: 'Découvrez nos enseignements et formations conçus pour accompagner votre croissance spirituelle.',
      formationCards: [
        {
          cover: '/img/formations/01.jpg',
          category: 'FONDEMENTS BIBLIQUES',
          title: 'Les fondements de la foi chrétienne',
          shortDescription: 'Découvrir les bases de la foi en Jésus-Christ.',
          level: 'Débutant',
          duration: '6 SEMAINES'
        },

        {
          cover: '/img/formations/02.jpg',
          category: 'ÉTUDES BIBLIQUES',
          title: 'Comprendre et étudier la Parole de Dieu',
          shortDescription: 'Approfondir la compréhension des Écritures.',
          level: 'Intermédiaire',
          duration: '8 SEMAINES'
        },

        {
          cover: '/img/formations/03.jpg',
          category: 'VIE SPIRITUELLE',
          title: 'La puissance de la prière et du jeûne',
          shortDescription: 'Développer une communion profonde avec Dieu.',
          level: 'Débutant',
          duration: '4 SEMAINES'
        },

        {
          cover: '/img/formations/04.jpg',
          category: 'LEADERSHIP CHRÉTIEN',
          title: 'Devenir un leader selon le cœur de Dieu',
          shortDescription: 'Apprendre à diriger avec humilité et sagesse.',
          level: 'Avancé',
          duration: '10 SEMAINES'
        },

        {
          cover: '/img/formations/05.jpg',
          category: 'ÉVANGÉLISATION',
          title: 'Partager l’Évangile et faire des disciples',
          shortDescription: 'Témoigner de sa foi et accompagner les autres.',
          level: 'Débutant',
          duration: '6 SEMAINES'
        },
        
      ],
      cta1: {
        label: 'Voir les formations',
        url: '/'
      }
    },
    prayerSection: {
      title: 'Besoin de prière ?',
      desc: 'Vous traversez une situation difficile ou souhaitez simplement confier un sujet à Dieu ? Notre équipe est disponible pour prier avec vous.',
      title2: 'Envoyer une demande de prière',
      desc2: 'Remplissez le formulaire ci-dessous, cela ne prendra que deux petites minutes',
      formulaire: {
        nom: {label:'Nom', placeholder: 'Entrez votre nom complet'},
        email: {label:'Email', placeholder: 'Entrez votre email'},
        telephone: {label:'Tel', placeholder: 'Entrez votre numero de telephone'},
        sujet: {label:'Sujet', placeholder: 'Entrez le sujet de la demande'},
        message: {label:'Message', placeholder: 'Entrez les details de la demande'},
        option: 'Je souhaite que ma demande reste confidentielle.',
        cta: {label: 'Envoyer ma demande', url: '/'}
      }
    },
    mediaSection: {
      title: 'Revivez nos moments',
      desc: 'Vidéos | Photos | Prédications | Louanges'
    },
    lastCtaSection: {
      title: 'Ensemble, faisons grandir le Royaume de Dieu.',
      desc: 'Rejoignez une communauté engagée dans la louange, la prière, l\'évangélisation et le service.',
      cta1: {
        label: 'Nous rejoindre',
        url: ''
      },
      cta2: {
        label: 'Nous contacter',
        url: ''
      }
    }
  },

  about: {
    seo: {
      title: 'About | Ministe Youn Nan Kris',
      description: 'Ministe Youn Nan Kris, a call center services provider.',
    },
    heroSection: {
      subtitle: 'DÉCOUVREZ NOTRE MINISTÈRE',
      title: 'Unis par la foi, guidés par une même mission.',
      desc: 'Depuis 2021, Ministè Youn Nan Kris rassemble des chorales, des musiciens et des serviteurs de Dieu autour d\'une même vision : grandir ensemble dans la foi, célébrer Dieu par la louange et contribuer à l\'expansion de Son Royaume.',
      cta1: {
        label: 'Découvrir notre mission',
        url: '#'
      }
    },
    missionAndValueSection: {
      subtitle: 'CE QUI NOUS ANIME',
      title: 'Une foi vivante, une mission qui nous rassemble.',
      desc: 'Notre engagement repose sur la conviction que la foi grandit à travers la prière, la louange, le partage de la Parole de Dieu et le service envers les autres.',
      cards: [
        {
          title: 'Notre mission',
          desc: 'Créer un espace de prière accueillant et accessible à tous, favoriser la croissance spirituelle et proposer des formations et des ressources qui nourrissent la foi, tout en promouvant l\'amour, la compassion et l\'unité.'
        },
        {
          title: 'Notre vision',
          desc: 'Devenir un phare spirituel pour notre communauté, un lieu physique et virtuel où chacun peut trouver réconfort, inspiration et accompagnement dans son cheminement avec Dieu.'
        }
      ]
    },
    fondateurSection: {
      subtitle: 'À L\'ORIGINE DE NOTRE HISTOIRE',
      title: 'Une vision portée par des hommes de foi.',
      desc: 'Fondé le 15 mai 2021, Ministè Youn Nan Kris est né d\'un esprit de collaboration et d\'unité entre plusieurs chorales. Cette initiative, portée par deux fondateurs, a donné naissance à une communauté engagée dans la louange, l\'évangélisation et la croissance spirituelle.',
      cards: [
        {
          title: 'Pasteur Fortuné Lener Junior',
          desc: 'Cofondateur',
          image: {
            url: '/img/about/Elegant Black-Tie Portrait_500.webp'
          }
        },
        {
          title: 'Maestro Valentin Jean Daniel',
          desc: 'Cofondateur',
          image: {
            url: '/img/about/Maest Val _500.webp'
          }
        }
      ]
    },
    callToActionSection: {
      title: 'Votre place est parmi nous',
      desc: 'Rejoignez une communauté unie dans la foi, engagée dans la louange, la prière et le service. Ensemble, grandissons spirituellement et contribuons à faire rayonner l\'amour de Dieu.',
      cta1: {
        label: 'Rejoindre la communauté',
        url: ''
      },
      cta2: {
        label: 'Nous contacter',
        url: ''
      }
    }
  },

  notFound: {
    seo: {
      title: 'Page introuvable — SECO GROUPE Centers',
      description: "Cette page n'existe pas ou a été déplacée.",
    },
    code: '404',
    title: 'Page introuvable',
    lead: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};
