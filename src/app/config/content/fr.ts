import { SiteContent } from '../../models/content.model';

export const fr: SiteContent = {
  languageName: 'Français',

  nav: [
    { label: 'Accueil', url: '/'},
    { label: 'À propos', url: '/about'},
    { label: 'Nos activités', url: '/activities'},
    { label: 'Formations', url: '/formations'},
    { label: 'Médias', url: '/medias'},
    { label: 'Événements', url: '/events' },
    { label: 'Contact', url: '/contact' }

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
      title: 'À propos | Ministe Youn Nan Kris',
      description: 'Fondé en 2021, Ministè Youn Nan Kris unit des chorales, des musiciens et des serviteurs de Dieu autour d\'une même vision : grandir ensemble dans la foi et célébrer Dieu par la louange.',
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

  activities: {
    seo: {
      title: 'Nos activités | Ministe Youn Nan Kris',
      description: 'Louange, évangélisation, prière, formation et action communautaire : découvrez comment Ministè Youn Nan Kris sert Dieu et sa communauté.',
    },
    heroSection: {
      title: 'Servir Dieu, servir notre communauté.',
      desc: 'Louange, évangélisation, prière, formation et action sociale : chaque activité du ministère est une manière concrète de vivre notre foi et de la partager.',
      cta1: { label: 'Découvrir nos piliers', url: '#' }
    },
    piliersSection: {
      subtitle: 'NOS PILIERS',
      title: 'Cinq piliers, une même mission.',
      desc: 'Nos activités s\'organisent autour de cinq piliers qui donnent forme à notre engagement envers Dieu et envers les autres.',
      cards: [
        {
          title: 'Louange & Adoration',
          desc: 'Services de louange, musique chrétienne et développement des talents. Nous accompagnons les chorales et les musiciens à travers des ateliers, des répétitions et un encadrement spirituel.',
          image: { url: '/img/home/hero1.webp', alt: '' }
        },
        {
          title: 'Évangélisation',
          desc: 'Concerts publics, réveils spirituels, retraites et initiatives de terrain pour annoncer l\'Évangile là où les gens se trouvent.',
          image: { url: '/img/home/hero2.webp', alt: '' }
        },
        {
          title: 'Prière',
          desc: 'Réunions de prière, veillées et intercession. Nous offrons accompagnement et ressources pour aider chacun à développer une vie de prière solide.',
          image: { url: '/img/home/Serene Prayer Beside an Open Bible.webp', alt: '' }
        },
        {
          title: 'Formation & Discipulat',
          desc: 'Des programmes de formation pour grandir spirituellement, approfondir la Parole et devenir des disciples engagés.',
          image: { url: '/img/home/Walking Toward the Light Gate.webp', alt: '' }
        },
        {
          title: 'Action communautaire',
          desc: 'Initiatives sociales, soutien aux personnes dans le besoin, cliniques mobiles et collaborations avec d\'autres organisations.',
          image: { url: '/img/home/mynk-members.jpg', alt: '' }
        }
      ]
    },
    rythmeSection: {
      subtitle: 'NOTRE RYTHME',
      title: 'Une vie de ministère tout au long de l\'année.',
      desc: 'Au fil des semaines et des saisons, plusieurs rendez-vous rythment la vie du ministère.',
      cards: [
        { icon: 'fa-solid fa-music', title: 'Répétitions des chorales', desc: 'Chaque chorale prépare ses chants et grandit ensemble dans la louange.' },
        { icon: 'fa-solid fa-hands-praying', title: 'Réunions de prière', desc: 'Des temps d\'intercession pour le ministère, les familles et le pays.' },
        { icon: 'fa-solid fa-microphone-lines', title: 'Concerts & réveils', desc: 'De grands rassemblements pour célébrer Dieu et annoncer l\'Évangile.' },
        { icon: 'fa-solid fa-hand-holding-heart', title: 'Actions sociales', desc: 'Des initiatives concrètes au service des personnes dans le besoin.' }
      ]
    },
    callToActionSection: {
      title: 'Envie de servir avec nous ?',
      desc: 'Chanteur, musicien, intercesseur ou bénévole : il y a une place pour chacun dans le ministère.',
      cta1: { label: 'Rejoindre le ministère', url: '/contact' },
      cta2: { label: 'Voir les événements', url: '/events' }
    }
  },

  formations: {
    seo: {
      title: 'Formations | Ministe Youn Nan Kris',
      description: 'Des formations bibliques et spirituelles pour grandir dans la foi, approfondir la Parole et devenir des disciples engagés.',
    },
    heroSection: {
      title: 'Grandir dans la foi, pas à pas.',
      desc: 'Nos enseignements et formations accompagnent votre croissance spirituelle, des fondements de la foi jusqu\'au leadership chrétien.',
      cta1: { label: 'Voir les formations', url: '#' }
    },
    catalogueSection: {
      subtitle: 'NOS FORMATIONS',
      title: 'Des parcours pour chaque étape de votre marche.',
      desc: 'Que vous découvriez la foi ou que vous serviez depuis longtemps, choisissez la formation qui correspond à votre cheminement.',
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
        }
      ]
    },
    parcoursSection: {
      subtitle: 'COMMENT ÇA MARCHE',
      title: 'Trois étapes pour commencer.',
      desc: 'S\'inscrire à une formation est simple, et notre équipe vous accompagne du début à la fin.',
      cards: [
        { title: 'Choisissez', desc: 'Parcourez nos formations et repérez celle qui correspond à votre niveau et à vos besoins.' },
        { title: 'Inscrivez-vous', desc: 'Contactez-nous pour réserver votre place : nous vous communiquerons les dates et les modalités.' },
        { title: 'Grandissez', desc: 'Suivez les enseignements, échangez avec les autres participants et mettez la Parole en pratique.' }
      ]
    },
    callToActionSection: {
      title: 'Prêt à faire le premier pas ?',
      desc: 'Une question sur une formation ou sur votre inscription ? Notre équipe se fera un plaisir de vous répondre.',
      cta1: { label: 'M\'inscrire', url: '/contact' },
      cta2: { label: 'Poser une question', url: '/contact' }
    }
  },

  medias: {
    seo: {
      title: 'Médias | Ministe Youn Nan Kris',
      description: 'Vidéos, photos, prédications et louanges : revivez les moments forts de Ministè Youn Nan Kris.',
    },
    heroSection: {
      title: 'Revivez nos moments de grâce.',
      desc: 'Vidéos, photos, prédications et louanges : retrouvez les temps forts du ministère et laissez-vous inspirer, où que vous soyez.',
      cta1: { label: 'Explorer les médias', url: '#' }
    },
    categoriesSection: {
      subtitle: 'NOS CONTENUS',
      title: 'La foi, partagée au-delà des murs.',
      desc: 'Nos contenus rendent la Parole et la louange accessibles au-delà des frontières géographiques.',
      cards: [
        { icon: 'fa-solid fa-video', title: 'Vidéos', desc: 'Concerts, cultes et moments forts filmés lors de nos rassemblements.' },
        { icon: 'fa-solid fa-camera', title: 'Photos', desc: 'Les visages et les instants qui racontent la vie du ministère.' },
        { icon: 'fa-solid fa-book-bible', title: 'Prédications', desc: 'Des messages pour nourrir votre foi et éclairer votre marche.' },
        { icon: 'fa-solid fa-music', title: 'Louanges', desc: 'Les chants de nos chorales pour adorer Dieu au quotidien.' }
      ]
    },
    gallerySection: {
      subtitle: 'GALERIE',
      title: 'Quelques instants partagés.',
      desc: 'Un aperçu de nos rassemblements, concerts et temps de communion.',
      cards: [
        { title: 'Concert de louange', desc: '', image: { url: '/img/events/event-1.webp', alt: 'Concert de louange' } },
        { title: 'Membres du ministère', desc: '', image: { url: '/img/home/mynk-members.jpg', alt: 'Membres du ministère' } },
        { title: 'Veillée de prière', desc: '', image: { url: '/img/events/event-2.webp', alt: 'Veillée de prière' } },
        { title: 'Réveil spirituel', desc: '', image: { url: '/img/events/event-3.webp', alt: 'Réveil spirituel' } },
        { title: 'Retraite spirituelle', desc: '', image: { url: '/img/events/event-4.webp', alt: 'Retraite spirituelle' } },
        { title: 'Louange', desc: '', image: { url: '/img/home/hero1.webp', alt: 'Louange' } }
      ]
    },
    callToActionSection: {
      title: 'Restez connectés',
      desc: 'Suivez-nous sur les réseaux sociaux pour ne manquer aucune vidéo, aucun message et aucun événement.',
      cta1: { label: 'Voir les événements', url: '/events' },
      cta2: { label: 'Nous contacter', url: '/contact' }
    }
  },

  events: {
    seo: {
      title: 'Événements | Ministe Youn Nan Kris',
      description: 'Concerts, veillées, réveils et retraites : découvrez les prochains rendez-vous de Ministè Youn Nan Kris.',
    },
    heroSection: {
      title: 'Nos prochains rendez-vous.',
      desc: 'Concerts de louange, veillées de prière, réveils et retraites spirituelles : venez vivre ces moments avec nous.',
      cta1: { label: 'Voir l\'agenda', url: '#' }
    },
    agendaSection: {
      subtitle: 'AGENDA',
      title: 'Marquez ces dates dans votre calendrier.',
      desc: 'Chaque événement est une occasion de louer Dieu, de prier ensemble et de grandir dans la foi.',
      cards: [
        {
          tag: 'Louange',
          title: 'Concert de louange',
          desc: 'Une soirée de louange et d\'adoration avec les chorales du ministère.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-1.webp', alt: '' }
        },
        {
          tag: 'Prière',
          title: 'Veillée de prière',
          desc: 'Une nuit d\'intercession pour nos familles, notre communauté et notre pays.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-2.webp', alt: '' }
        },
        {
          tag: 'Évangélisation',
          title: 'Réveil spirituel',
          desc: 'Plusieurs jours de prédication et de louange pour raviver la flamme de la foi.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-3.webp', alt: '' }
        },
        {
          tag: 'Retraite',
          title: 'Retraite spirituelle',
          desc: 'Un temps à l\'écart pour se ressourcer dans la présence de Dieu.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-4.webp', alt: '' }
        }
      ]
    },
    callToActionSection: {
      title: 'Vous organisez un événement ?',
      desc: 'Invitez nos chorales et nos musiciens à servir lors de votre culte, concert ou célébration.',
      cta1: { label: 'Nous inviter', url: '/contact' },
      cta2: { label: 'Nos activités', url: '/activities' }
    }
  },

  donate: {
    seo: {
      title: 'Faire un don | Ministe Youn Nan Kris',
      description: 'Soutenez la mission de Ministè Youn Nan Kris : louange, évangélisation, prière, formation et action communautaire. Don ponctuel ou mensuel, depuis n\'importe quel pays.',
    },
    heroSection: {
      title: 'Soutenez la mission.',
      desc: 'Chaque don, petit ou grand, nous aide à louer Dieu, annoncer l\'Évangile et servir notre communauté. Où que vous soyez dans le monde, vous pouvez faire partie de l\'œuvre.',
      cta1: { label: 'Faire un don', url: '#' }
    },
    stepsSection: {
      subtitle: 'COMMENT DONNER',
      title: 'Un don en trois étapes simples.',
      desc: 'Le parcours prend moins de deux minutes, depuis n\'importe quel pays et dans la devise de votre choix.',
      cards: [
        { icon: 'fa-solid fa-hand-holding-dollar', title: 'Choisissez votre montant', desc: 'Don ponctuel ou mensuel, dans votre devise, et affecté à la cause qui vous tient à cœur.' },
        { icon: 'fa-solid fa-user', title: 'Renseignez vos informations', desc: 'Votre nom et votre email nous permettent de vous envoyer votre confirmation et votre reçu.' },
        { icon: 'fa-solid fa-lock', title: 'Choisissez votre paiement', desc: 'Carte bancaire, PayPal, MonCash ou virement : choisissez le moyen qui vous convient.' }
      ]
    },
    form: {
      subtitle: 'FAIRE UN DON',
      title: 'Votre don',
      desc: 'Merci de soutenir Ministè Youn Nan Kris.',
      steps: ['Montant', 'Informations', 'Paiement'],
      frequency: { label: 'Fréquence', once: 'Une fois', monthly: 'Chaque mois', perMonth: '/ mois' },
      currency: { label: 'Devise' },
      presets: {
        USD: [25, 50, 100, 250],
        EUR: [25, 50, 100, 250],
        CAD: [25, 50, 100, 250],
        HTG: [1000, 2500, 5000, 10000]
      },
      amount: { label: 'Montant', custom: 'Autre montant', placeholder: 'Montant libre' },
      designation: {
        label: 'Affecter mon don à',
        options: [
          'Là où le besoin est le plus grand',
          'Louange & Adoration',
          'Évangélisation',
          'Prière',
          'Formation & Discipulat',
          'Action communautaire'
        ]
      },
      donor: {
        title: 'Vos informations',
        firstName: { label: 'Prénom', placeholder: 'Votre prénom' },
        lastName: { label: 'Nom', placeholder: 'Votre nom' },
        email: { label: 'Email', placeholder: 'vous@exemple.com' },
        phone: { label: 'Téléphone', placeholder: '+509 …' },
        country: { label: 'Pays', placeholder: 'Choisissez votre pays' },
        message: { label: 'Message', placeholder: 'Un mot, une intention de prière…' },
        anonymous: 'Je souhaite que mon don reste anonyme.',
        optional: 'facultatif'
      },
      payment: {
        title: 'Moyen de paiement',
        methods: [
          { id: 'card', label: 'Carte bancaire', desc: 'Visa, Mastercard, American Express', icon: 'fa-solid fa-credit-card' },
          { id: 'paypal', label: 'PayPal', desc: 'Payez avec votre compte PayPal', icon: 'fa-brands fa-paypal' },
          { id: 'moncash', label: 'MonCash', desc: 'Pour les donateurs en Haïti', icon: 'fa-solid fa-mobile-screen-button' },
          { id: 'transfer', label: 'Virement bancaire', desc: 'Les coordonnées vous seront envoyées par email', icon: 'fa-solid fa-building-columns' }
        ]
      },
      summary: { title: 'Récapitulatif', amount: 'Montant', frequency: 'Fréquence', designation: 'Affectation', method: 'Paiement' },
      secure: 'Vos informations sont confidentielles et ne sont jamais partagées.',
      back: 'Retour',
      next: 'Continuer',
      submit: 'Confirmer mon don',
      errors: {
        amount: 'Veuillez choisir ou saisir un montant.',
        method: 'Veuillez choisir un moyen de paiement.'
      },
      success: {
        title: 'Merci pour votre générosité !',
        desc: 'Votre messagerie va s\'ouvrir avec le récapitulatif de votre don : envoyez-le et notre équipe vous transmettra les instructions de paiement ainsi que votre reçu par email.',
        again: 'Faire un autre don'
      }
    },
    impactSection: {
      subtitle: 'VOTRE IMPACT',
      title: 'Ce que votre don rend possible.',
      desc: 'Vos dons financent directement les activités du ministère, ici et au-delà des frontières.',
      cards: [
        { icon: 'fa-solid fa-music', title: 'Louange', desc: 'Instruments, sonorisation et accompagnement des chorales.' },
        { icon: 'fa-solid fa-bullhorn', title: 'Évangélisation', desc: 'Concerts publics, réveils et retraites spirituelles.' },
        { icon: 'fa-solid fa-book-bible', title: 'Formation', desc: 'Programmes et ressources pour grandir dans la foi.' },
        { icon: 'fa-solid fa-hand-holding-heart', title: 'Action sociale', desc: 'Soutien aux familles et cliniques mobiles.' }
      ]
    },
    faqSection: {
      subtitle: 'QUESTIONS FRÉQUENTES',
      title: 'Vous avez une question ?',
      desc: 'Voici les réponses aux questions que l\'on nous pose le plus souvent.',
      cards: [
        { title: 'Puis-je donner depuis l\'étranger ?', desc: 'Oui. Vous pouvez donner depuis n\'importe quel pays, en dollars américains, euros, dollars canadiens ou gourdes, par carte, PayPal ou virement.' },
        { title: 'Vais-je recevoir un reçu ?', desc: 'Oui. Un reçu vous est envoyé par email après chaque don, à l\'adresse que vous indiquez.' },
        { title: 'Comment arrêter un don mensuel ?', desc: 'Il vous suffit de nous écrire : nous arrêtons ou modifions votre don mensuel sans délai ni justification.' },
        { title: 'Mes informations sont-elles protégées ?', desc: 'Vos données servent uniquement au traitement de votre don et ne sont jamais vendues ni partagées.' }
      ]
    }
  },

  contact: {
    seo: {
      title: 'Contact | Ministe Youn Nan Kris',
      description: 'Une question, une invitation ou l\'envie de rejoindre le ministère ? Contactez Ministè Youn Nan Kris.',
    },
    heroSection: {
      title: 'Parlons-en ensemble.',
      desc: 'Une question, une invitation, un besoin de prière ou l\'envie de rejoindre le ministère ? Notre équipe vous répondra avec plaisir.',
      cta1: { label: 'Nous écrire', url: '#' }
    },
    infoSection: {
      subtitle: 'NOUS JOINDRE',
      title: 'Plusieurs façons de nous contacter.',
      desc: 'Écrivez-nous, appelez-nous ou suivez-nous sur les réseaux sociaux.',
      cards: [
        { title: 'Email', desc: '' },
        { title: 'Téléphone', desc: '' },
        { title: 'Réseaux sociaux', desc: '' }
      ]
    },
    formSection: {
      subtitle: 'FORMULAIRE',
      title: 'Envoyez-nous un message.',
      desc: 'Remplissez le formulaire ci-dessous, nous vous répondrons dans les meilleurs délais.',
      formulaire: {
        nom: { label: 'Nom', placeholder: 'Entrez votre nom complet' },
        email: { label: 'Email', placeholder: 'Entrez votre email' },
        telephone: { label: 'Téléphone', placeholder: 'Entrez votre numéro de téléphone' },
        sujet: { label: 'Sujet', placeholder: 'Entrez le sujet de votre message' },
        message: { label: 'Message', placeholder: 'Écrivez votre message' },
        cta: { label: 'Envoyer le message', url: '' }
      }
    }
  },

  notFound: {
    seo: {
      title: 'Page introuvable — Ministe Youn Nan Kris',
      description: "Cette page n'existe pas ou a été déplacée.",
    },
    code: '404',
    title: 'Page introuvable',
    lead: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};
