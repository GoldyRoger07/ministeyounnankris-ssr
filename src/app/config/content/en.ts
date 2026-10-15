import { SiteContent } from '../../models/content.model';

export const en: SiteContent = {
  languageName: 'English',

  nav: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Our activities', url: '/activities' },
    { label: 'Training', url: '/formations' },
    { label: 'Media', url: '/medias' },
    { label: 'Events', url: '/events' },
    { label: 'Contact', url: '/contact' }
  ],

  header: {
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    homeAria: 'Ministe Youn Nan Kris — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    actions: {
      askForPraye: { label: 'Prayer request', url: '/prayer-request' },
      donate: { label: 'Donate', url: '/donate' },
    },
  },

  footer: {
    tagline: 'Ministè Youn Nan Kris brings together believers, choirs, musicians and servants around one mission: to praise God, proclaim the Gospel, grow in prayer and serve our community.',
    rights: 'All rights reserved.',
    credit: {
      label: 'Designed and developed by',
      name: 'Raiki Services',
      url: 'https://www.raikiservices.com',
    },
    contact: 'Contact us',
    legalContent: {
      label: 'Legal information',
      links: [
        { label: 'Legal notice', url: '' },
        { label: 'Privacy policy', url: '' },
        { label: 'Cookie policy', url: '' },
        { label: 'Terms and conditions', url: '' }
      ]
    }
  },

  home: {
    seo: {
      title: 'Ministe Youn Nan Kris',
      description: 'Ministè Youn Nan Kris brings together believers, choirs, musicians and servants around one mission: to praise God, proclaim the Gospel, grow in prayer and serve our community.',
    },

    heroSection: {
      title: 'To God be the Glory',
      desc: 'Ministè Youn Nan Kris brings together believers, choirs, musicians and servants around one mission: to praise God, proclaim the Gospel, grow in prayer and serve our community.',
      cta1: { label: 'Discover the ministry', url: '/' },
      cta2: { label: 'Prayer request', url: '/' }
    },
    whoWeAreSection: {
      title: 'Ministè Youn Nan Kris',
      subtitle: 'Since 2021, united to grow the Kingdom of God.',
      desc: 'Ministè Youn Nan Kris was born on May 15, 2021, out of a collaboration between several choirs. Today, the ministry brings together singers, musicians, pastors and various groups around a shared spiritual vision.',
      cta1: { label: 'Discover our story', url: '/' }
    },
    visionAndMissionSection: {
      content: [
        {
          title: 'Our Vision',
          subtitle: 'To be a spiritual lighthouse in our community.',
          desc: 'To create a physical and virtual space where everyone can find comfort, guidance and inspiration, while making training and spiritual resources accessible beyond geographical and social boundaries.'
        },
        {
          title: 'Our Mission',
          subtitle: 'To create a space for spiritual growth, open to all.',
          desc: 'To encourage prayer, offer training and resources that nourish faith, and promote love, compassion and unity within society.'
        }
      ]
    },
    nosPilierSection: {
      title: 'Our pillars',
      cards: [
        {
          icon: '🎵',
          title: 'Praise & Worship',
          desc: 'Worship services, Christian music, talent development, workshops and support for choirs.'
        },
        {
          icon: '✝️',
          title: 'Evangelism',
          desc: 'Public concerts, revivals, retreats and initiatives to share the Gospel.'
        },
        {
          icon: '🙏',
          title: 'Prayer',
          desc: 'Prayer meetings, vigils, intercession, guidance and resources to build a life of prayer.'
        },
        {
          icon: '📖',
          title: 'Training & Discipleship',
          desc: 'Training programs that help members grow spiritually and become committed disciples.'
        },
        {
          icon: '❤️',
          title: 'Community outreach',
          desc: 'Social initiatives, support for people in need, mobile clinics and partnerships with other organizations.'
        }
      ],
      cta1: { label: 'Discover our activities', url: '/' }
    },
    uneCommunauteUnieSection: {
      title: 'A united community',
      cards: [
        { title: 'Year founded', desc: '2021', noCounter: true },
        { title: 'Active members', desc: '210+' },
        { title: 'Choirs & groups', desc: '9+' },
        { title: 'Shared mission', desc: '1' }
      ]
    },
    choralesAndGroupSection: {
      title: 'Choirs & groups',
      cards: [
        { title: 'Les Bénis de l\'Éternel', desc: '' },
        { title: 'Voice Of God Gospel', desc: '' },
        { title: 'Marge Gospel', desc: '' },
        { title: 'Les Amis de Dieu', desc: '' },
        { title: 'TEE Mass Choir', desc: '' },
        { title: 'Ehud Athaja', desc: '' },
        { title: 'Salem International', desc: '' },
        { title: 'Prémices de Shékinah', desc: '' },
        { title: 'Holy Music', desc: '' },
      ]
    },
    evenementSection: {
      title: 'Upcoming events',
      cards: [
        {
          title: 'Worship concert',
          desc: '12/04/2021, Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-1.webp', alt: '' }
        },
        {
          title: 'Prayer vigil',
          desc: '12/04/2021, Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-2.webp', alt: '' }
        },
        {
          title: 'Revival',
          desc: '12/04/2021, Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-3.webp', alt: '' }
        },
        {
          title: 'Spiritual retreat',
          desc: '12/04/2021, Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-4.webp', alt: '' }
        }
      ],
      cta1: { label: 'See all events', url: '/' }
    },
    formationSection: {
      title: 'Growing in faith',
      subtitle: 'Explore our teachings and training programs designed to support your spiritual growth.',
      formationCards: [
        {
          cover: '/img/formations/01.jpg',
          category: 'BIBLICAL FOUNDATIONS',
          title: 'The foundations of the Christian faith',
          shortDescription: 'Discover the basics of faith in Jesus Christ.',
          level: 'Beginner',
          duration: '6 WEEKS'
        },
        {
          cover: '/img/formations/02.jpg',
          category: 'BIBLE STUDIES',
          title: 'Understanding and studying the Word of God',
          shortDescription: 'Deepen your understanding of Scripture.',
          level: 'Intermediate',
          duration: '8 WEEKS'
        },
        {
          cover: '/img/formations/03.jpg',
          category: 'SPIRITUAL LIFE',
          title: 'The power of prayer and fasting',
          shortDescription: 'Develop a deep communion with God.',
          level: 'Beginner',
          duration: '4 WEEKS'
        },
        {
          cover: '/img/formations/04.jpg',
          category: 'CHRISTIAN LEADERSHIP',
          title: 'Becoming a leader after God\'s own heart',
          shortDescription: 'Learn to lead with humility and wisdom.',
          level: 'Advanced',
          duration: '10 WEEKS'
        },
        {
          cover: '/img/formations/05.jpg',
          category: 'EVANGELISM',
          title: 'Sharing the Gospel and making disciples',
          shortDescription: 'Bear witness to your faith and walk alongside others.',
          level: 'Beginner',
          duration: '6 WEEKS'
        },
      ],
      cta1: { label: 'See all training', url: '/' }
    },
    prayerSection: {
      title: 'Need prayer?',
      desc: 'Going through a difficult time, or simply want to bring something before God? Our team is here to pray with you.',
      title2: 'Send a prayer request',
      desc2: 'Fill out the form below — it only takes a couple of minutes.',
      formulaire: {
        nom: { label: 'Name', placeholder: 'Enter your full name' },
        email: { label: 'Email', placeholder: 'Enter your email' },
        telephone: { label: 'Phone', placeholder: 'Enter your phone number' },
        sujet: { label: 'Subject', placeholder: 'Enter the subject of your request' },
        message: { label: 'Message', placeholder: 'Share the details of your request' },
        option: 'I would like my request to remain confidential.',
        cta: { label: 'Send my request', url: '/' }
      }
    },
    mediaSection: {
      title: 'Relive our moments',
      desc: 'Videos | Photos | Sermons | Worship'
    },
    lastCtaSection: {
      title: 'Together, let\'s grow the Kingdom of God.',
      desc: 'Join a community committed to worship, prayer, evangelism and service.',
      cta1: { label: 'Join us', url: '' },
      cta2: { label: 'Contact us', url: '' }
    }
  },

  about: {
    seo: {
      title: 'About | Ministe Youn Nan Kris',
      description: 'Founded in 2021, Ministè Youn Nan Kris unites choirs, musicians and servants of God around one vision: growing together in faith and celebrating God through worship.',
    },
    heroSection: {
      subtitle: 'DISCOVER OUR MINISTRY',
      title: 'United by faith, guided by one mission.',
      desc: 'Since 2021, Ministè Youn Nan Kris has brought together choirs, musicians and servants of God around one vision: to grow together in faith, celebrate God through worship and help expand His Kingdom.',
      cta1: { label: 'Discover our mission', url: '#' }
    },
    missionAndValueSection: {
      subtitle: 'WHAT DRIVES US',
      title: 'A living faith, a mission that unites us.',
      desc: 'Our commitment rests on the conviction that faith grows through prayer, worship, sharing the Word of God and serving others.',
      cards: [
        {
          title: 'Our mission',
          desc: 'To create a welcoming place of prayer, open to all, to foster spiritual growth and to offer training and resources that nourish faith, while promoting love, compassion and unity.'
        },
        {
          title: 'Our vision',
          desc: 'To become a spiritual lighthouse for our community — a physical and virtual place where everyone can find comfort, inspiration and support in their walk with God.'
        }
      ]
    },
    fondateurSection: {
      subtitle: 'WHERE OUR STORY BEGINS',
      title: 'A vision carried by men of faith.',
      desc: 'Founded on May 15, 2021, Ministè Youn Nan Kris was born from a spirit of collaboration and unity between several choirs. Led by two founders, this initiative gave rise to a community committed to worship, evangelism and spiritual growth.',
      cards: [
        {
          title: 'Pastor Fortuné Lener Junior',
          desc: 'Co-founder',
          image: { url: '/img/about/Elegant Black-Tie Portrait_500.webp' }
        },
        {
          title: 'Maestro Valentin Jean Daniel',
          desc: 'Co-founder',
          image: { url: '/img/about/Maest Val _500.webp' }
        }
      ]
    },
    callToActionSection: {
      title: 'There is a place for you here',
      desc: 'Join a community united in faith and committed to worship, prayer and service. Together, let\'s grow spiritually and help spread the love of God.',
      cta1: { label: 'Join the community', url: '' },
      cta2: { label: 'Contact us', url: '' }
    }
  },

  activities: {
    seo: {
      title: 'Our activities | Ministe Youn Nan Kris',
      description: 'Worship, evangelism, prayer, training and community outreach: discover how Ministè Youn Nan Kris serves God and its community.',
    },
    heroSection: {
      title: 'Serving God, serving our community.',
      desc: 'Worship, evangelism, prayer, training and social outreach: every activity of the ministry is a practical way to live out our faith and share it.',
      cta1: { label: 'Discover our pillars', url: '#' }
    },
    piliersSection: {
      subtitle: 'OUR PILLARS',
      title: 'Five pillars, one mission.',
      desc: 'Our activities are built around five pillars that shape our commitment to God and to others.',
      cards: [
        {
          title: 'Praise & Worship',
          desc: 'Worship services, Christian music and talent development. We support choirs and musicians through workshops, rehearsals and spiritual mentoring.',
          image: { url: '/img/home/hero1.webp', alt: '' }
        },
        {
          title: 'Evangelism',
          desc: 'Public concerts, revivals, retreats and outreach initiatives to proclaim the Gospel wherever people are.',
          image: { url: '/img/home/hero2.webp', alt: '' }
        },
        {
          title: 'Prayer',
          desc: 'Prayer meetings, vigils and intercession. We offer guidance and resources to help everyone build a strong prayer life.',
          image: { url: '/img/home/Serene Prayer Beside an Open Bible.webp', alt: '' }
        },
        {
          title: 'Training & Discipleship',
          desc: 'Training programs to grow spiritually, go deeper into the Word and become committed disciples.',
          image: { url: '/img/home/Walking Toward the Light Gate.webp', alt: '' }
        },
        {
          title: 'Community outreach',
          desc: 'Social initiatives, support for people in need, mobile clinics and partnerships with other organizations.',
          image: { url: '/img/home/mynk-members.jpg', alt: '' }
        }
      ]
    },
    rythmeSection: {
      subtitle: 'OUR RHYTHM',
      title: 'Ministry life all year round.',
      desc: 'Throughout the weeks and seasons, several gatherings set the rhythm of the ministry\'s life.',
      cards: [
        { icon: 'fa-solid fa-music', title: 'Choir rehearsals', desc: 'Each choir prepares its songs and grows together in worship.' },
        { icon: 'fa-solid fa-hands-praying', title: 'Prayer meetings', desc: 'Times of intercession for the ministry, for families and for the country.' },
        { icon: 'fa-solid fa-microphone-lines', title: 'Concerts & revivals', desc: 'Large gatherings to celebrate God and proclaim the Gospel.' },
        { icon: 'fa-solid fa-hand-holding-heart', title: 'Social outreach', desc: 'Practical initiatives serving people in need.' }
      ]
    },
    callToActionSection: {
      title: 'Would you like to serve with us?',
      desc: 'Singer, musician, intercessor or volunteer: there is a place for everyone in the ministry.',
      cta1: { label: 'Join the ministry', url: '/contact' },
      cta2: { label: 'See events', url: '/events' }
    }
  },

  formations: {
    seo: {
      title: 'Training | Ministe Youn Nan Kris',
      description: 'Biblical and spiritual training to grow in faith, go deeper into the Word and become committed disciples.',
    },
    heroSection: {
      title: 'Growing in faith, step by step.',
      desc: 'Our teachings and training programs support your spiritual growth, from the foundations of faith to Christian leadership.',
      cta1: { label: 'See all training', url: '#' }
    },
    catalogueSection: {
      subtitle: 'OUR TRAINING',
      title: 'Programs for every stage of your walk.',
      desc: 'Whether you are discovering faith or have been serving for years, choose the program that fits your journey.',
      formationCards: [
        {
          cover: '/img/formations/01.jpg',
          category: 'BIBLICAL FOUNDATIONS',
          title: 'The foundations of the Christian faith',
          shortDescription: 'Discover the basics of faith in Jesus Christ.',
          level: 'Beginner',
          duration: '6 WEEKS'
        },
        {
          cover: '/img/formations/02.jpg',
          category: 'BIBLE STUDIES',
          title: 'Understanding and studying the Word of God',
          shortDescription: 'Deepen your understanding of Scripture.',
          level: 'Intermediate',
          duration: '8 WEEKS'
        },
        {
          cover: '/img/formations/03.jpg',
          category: 'SPIRITUAL LIFE',
          title: 'The power of prayer and fasting',
          shortDescription: 'Develop a deep communion with God.',
          level: 'Beginner',
          duration: '4 WEEKS'
        },
        {
          cover: '/img/formations/04.jpg',
          category: 'CHRISTIAN LEADERSHIP',
          title: 'Becoming a leader after God\'s own heart',
          shortDescription: 'Learn to lead with humility and wisdom.',
          level: 'Advanced',
          duration: '10 WEEKS'
        },
        {
          cover: '/img/formations/05.jpg',
          category: 'EVANGELISM',
          title: 'Sharing the Gospel and making disciples',
          shortDescription: 'Bear witness to your faith and walk alongside others.',
          level: 'Beginner',
          duration: '6 WEEKS'
        }
      ]
    },
    parcoursSection: {
      subtitle: 'HOW IT WORKS',
      title: 'Three steps to get started.',
      desc: 'Signing up for a program is simple, and our team is with you from start to finish.',
      cards: [
        { title: 'Choose', desc: 'Browse our programs and find the one that matches your level and your needs.' },
        { title: 'Sign up', desc: 'Contact us to reserve your place: we will send you the dates and practical details.' },
        { title: 'Grow', desc: 'Follow the teachings, connect with other participants and put the Word into practice.' }
      ]
    },
    callToActionSection: {
      title: 'Ready to take the first step?',
      desc: 'Have a question about a program or about signing up? Our team will be happy to help.',
      cta1: { label: 'Sign me up', url: '/contact' },
      cta2: { label: 'Ask a question', url: '/contact' }
    }
  },

  medias: {
    seo: {
      title: 'Media | Ministe Youn Nan Kris',
      description: 'Videos, photos, sermons and worship: relive the highlights of Ministè Youn Nan Kris.',
    },
    heroSection: {
      title: 'Relive our moments of grace.',
      desc: 'Videos, photos, sermons and worship: find the highlights of the ministry and be inspired, wherever you are.',
      cta1: { label: 'Explore media', url: '#' }
    },
    categoriesSection: {
      subtitle: 'OUR CONTENT',
      title: 'Faith, shared beyond our walls.',
      desc: 'Our content makes the Word and worship accessible beyond geographical borders.',
      cards: [
        { icon: 'fa-solid fa-video', title: 'Videos', desc: 'Concerts, services and highlights filmed at our gatherings.' },
        { icon: 'fa-solid fa-camera', title: 'Photos', desc: 'The faces and moments that tell the story of the ministry.' },
        { icon: 'fa-solid fa-book-bible', title: 'Sermons', desc: 'Messages to nourish your faith and light your path.' },
        { icon: 'fa-solid fa-music', title: 'Worship', desc: 'Songs from our choirs to worship God every day.' }
      ]
    },
    gallerySection: {
      subtitle: 'GALLERY',
      title: 'A few shared moments.',
      desc: 'A glimpse of our gatherings, concerts and times of fellowship.',
      cards: [
        { title: 'Worship concert', desc: '', image: { url: '/img/events/event-1.webp', alt: 'Worship concert' } },
        { title: 'Ministry members', desc: '', image: { url: '/img/home/mynk-members.jpg', alt: 'Ministry members' } },
        { title: 'Prayer vigil', desc: '', image: { url: '/img/events/event-2.webp', alt: 'Prayer vigil' } },
        { title: 'Revival', desc: '', image: { url: '/img/events/event-3.webp', alt: 'Revival' } },
        { title: 'Spiritual retreat', desc: '', image: { url: '/img/events/event-4.webp', alt: 'Spiritual retreat' } },
        { title: 'Worship', desc: '', image: { url: '/img/home/hero1.webp', alt: 'Worship' } }
      ]
    },
    callToActionSection: {
      title: 'Stay connected',
      desc: 'Follow us on social media so you never miss a video, a message or an event.',
      cta1: { label: 'See events', url: '/events' },
      cta2: { label: 'Contact us', url: '/contact' }
    }
  },

  events: {
    seo: {
      title: 'Events | Ministe Youn Nan Kris',
      description: 'Concerts, vigils, revivals and retreats: discover the upcoming events of Ministè Youn Nan Kris.',
    },
    heroSection: {
      title: 'Our upcoming events.',
      desc: 'Worship concerts, prayer vigils, revivals and spiritual retreats: come and share these moments with us.',
      cta1: { label: 'See the calendar', url: '#' }
    },
    agendaSection: {
      subtitle: 'CALENDAR',
      title: 'Save these dates.',
      desc: 'Every event is an opportunity to praise God, pray together and grow in faith.',
      cards: [
        {
          tag: 'Worship',
          title: 'Worship concert',
          desc: 'An evening of praise and worship with the ministry\'s choirs.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-1.webp', alt: '' }
        },
        {
          tag: 'Prayer',
          title: 'Prayer vigil',
          desc: 'A night of intercession for our families, our community and our country.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-2.webp', alt: '' }
        },
        {
          tag: 'Evangelism',
          title: 'Revival',
          desc: 'Several days of preaching and worship to rekindle the flame of faith.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-3.webp', alt: '' }
        },
        {
          tag: 'Retreat',
          title: 'Spiritual retreat',
          desc: 'Time set apart to recharge in the presence of God.',
          date: '12/04/2021',
          location: 'Pétion-Ville, Rue Faubert',
          image: { url: '/img/events/event-4.webp', alt: '' }
        }
      ]
    },
    callToActionSection: {
      title: 'Organizing an event?',
      desc: 'Invite our choirs and musicians to serve at your service, concert or celebration.',
      cta1: { label: 'Invite us', url: '/contact' },
      cta2: { label: 'Our activities', url: '/activities' }
    }
  },

  donate: {
    seo: {
      title: 'Donate | Ministe Youn Nan Kris',
      description: 'Support the mission of Ministè Youn Nan Kris: worship, evangelism, prayer, training and community outreach. One-time or monthly gifts, from any country.',
    },
    heroSection: {
      title: 'Support the mission.',
      desc: 'Every gift, small or large, helps us praise God, proclaim the Gospel and serve our community. Wherever you are in the world, you can be part of the work.',
      cta1: { label: 'Donate', url: '#' }
    },
    stepsSection: {
      subtitle: 'HOW TO GIVE',
      title: 'Give in three simple steps.',
      desc: 'It takes less than two minutes, from any country and in the currency of your choice.',
      cards: [
        { icon: 'fa-solid fa-hand-holding-dollar', title: 'Choose your amount', desc: 'One-time or monthly, in your currency, and directed to the cause closest to your heart.' },
        { icon: 'fa-solid fa-user', title: 'Enter your details', desc: 'Your name and email allow us to send you your confirmation and receipt.' },
        { icon: 'fa-solid fa-lock', title: 'Choose how to pay', desc: 'Credit card, PayPal, MonCash or bank transfer: pick the method that works for you.' }
      ]
    },
    form: {
      subtitle: 'DONATE',
      title: 'Your gift',
      desc: 'Thank you for supporting Ministè Youn Nan Kris.',
      steps: ['Amount', 'Details', 'Payment'],
      frequency: { label: 'Frequency', once: 'One-time', monthly: 'Monthly', perMonth: '/ month' },
      currency: { label: 'Currency' },
      presets: {
        USD: [25, 50, 100, 250],
        EUR: [25, 50, 100, 250],
        CAD: [25, 50, 100, 250],
        HTG: [1000, 2500, 5000, 10000]
      },
      amount: { label: 'Amount', custom: 'Other amount', placeholder: 'Enter an amount' },
      designation: {
        label: 'Direct my gift to',
        options: [
          'Where the need is greatest',
          'Praise & Worship',
          'Evangelism',
          'Prayer',
          'Training & Discipleship',
          'Community outreach'
        ]
      },
      donor: {
        title: 'Your details',
        firstName: { label: 'First name', placeholder: 'Your first name' },
        lastName: { label: 'Last name', placeholder: 'Your last name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        phone: { label: 'Phone', placeholder: '+1 …' },
        country: { label: 'Country', placeholder: 'Select your country' },
        message: { label: 'Message', placeholder: 'A note, a prayer intention…' },
        anonymous: 'I would like my gift to remain anonymous.',
        optional: 'optional'
      },
      payment: {
        title: 'Payment method',
        methods: [
          { id: 'card', label: 'Credit card', desc: 'Visa, Mastercard, American Express', icon: 'fa-solid fa-credit-card' },
          { id: 'paypal', label: 'PayPal', desc: 'Pay with your PayPal account', icon: 'fa-brands fa-paypal' },
          { id: 'moncash', label: 'MonCash', desc: 'For donors in Haiti', icon: 'fa-solid fa-mobile-screen-button' },
          { id: 'transfer', label: 'Bank transfer', desc: 'Bank details will be sent to you by email', icon: 'fa-solid fa-building-columns' }
        ]
      },
      summary: { title: 'Summary', amount: 'Amount', frequency: 'Frequency', designation: 'Directed to', method: 'Payment' },
      secure: 'Your information is kept confidential and is never shared.',
      back: 'Back',
      next: 'Continue',
      submit: 'Confirm my gift',
      errors: {
        amount: 'Please choose or enter an amount.',
        method: 'Please choose a payment method.'
      },
      success: {
        title: 'Thank you for your generosity!',
        desc: 'Your email app will open with a summary of your gift: send it and our team will reply with payment instructions and your receipt.',
        again: 'Make another gift'
      }
    },
    impactSection: {
      subtitle: 'YOUR IMPACT',
      title: 'What your gift makes possible.',
      desc: 'Your gifts directly fund the ministry\'s activities, at home and beyond our borders.',
      cards: [
        { icon: 'fa-solid fa-music', title: 'Worship', desc: 'Instruments, sound equipment and support for choirs.' },
        { icon: 'fa-solid fa-bullhorn', title: 'Evangelism', desc: 'Public concerts, revivals and spiritual retreats.' },
        { icon: 'fa-solid fa-book-bible', title: 'Training', desc: 'Programs and resources to grow in faith.' },
        { icon: 'fa-solid fa-hand-holding-heart', title: 'Outreach', desc: 'Support for families and mobile clinics.' }
      ]
    },
    faqSection: {
      subtitle: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Have a question?',
      desc: 'Here are the answers to the questions we are asked most often.',
      cards: [
        { title: 'Can I give from abroad?', desc: 'Yes. You can give from any country, in US dollars, euros, Canadian dollars or gourdes, by card, PayPal or bank transfer.' },
        { title: 'Will I receive a receipt?', desc: 'Yes. A receipt is emailed to you after every gift, at the address you provide.' },
        { title: 'How do I stop a monthly gift?', desc: 'Just write to us: we will stop or change your monthly gift right away, no questions asked.' },
        { title: 'Is my information protected?', desc: 'Your data is used only to process your gift and is never sold or shared.' }
      ]
    }
  },

  contact: {
    seo: {
      title: 'Contact | Ministe Youn Nan Kris',
      description: 'A question, an invitation or a wish to join the ministry? Get in touch with Ministè Youn Nan Kris.',
    },
    heroSection: {
      title: 'Let\'s talk.',
      desc: 'A question, an invitation, a prayer need or a wish to join the ministry? Our team will be glad to hear from you.',
      cta1: { label: 'Write to us', url: '#' }
    },
    infoSection: {
      subtitle: 'REACH US',
      title: 'Several ways to get in touch.',
      desc: 'Email us, call us or follow us on social media.',
      cards: [
        { title: 'Email', desc: '' },
        { title: 'Phone', desc: '' },
        { title: 'Social media', desc: '' }
      ]
    },
    formSection: {
      subtitle: 'FORM',
      title: 'Send us a message.',
      desc: 'Fill out the form below and we will get back to you as soon as possible.',
      formulaire: {
        nom: { label: 'Name', placeholder: 'Enter your full name' },
        email: { label: 'Email', placeholder: 'Enter your email' },
        telephone: { label: 'Phone', placeholder: 'Enter your phone number' },
        sujet: { label: 'Subject', placeholder: 'Enter the subject of your message' },
        message: { label: 'Message', placeholder: 'Write your message' },
        cta: { label: 'Send message', url: '' }
      }
    }
  },

  notFound: {
    seo: {
      title: 'Page not found — Ministe Youn Nan Kris',
      description: 'This page does not exist or has been moved.',
    },
    code: '404',
    title: 'Page not found',
    lead: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
};
