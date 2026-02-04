"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fr"

const translations = {
  en: {
    // Navbar
    nav: {
      services: "Services",
      subscription: "Subscription",
      work: "Work",
      about: "About",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    // Hero
    hero: {
      badge: "Software + Creative Agency",
      headline: "Grow your business.",
      headlineAccent: "Increase sales.",
      subheadline: "We help businesses grow, increase sales, and stand out online with development, automation, and communication that drives measurable results.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "View Services",
      chip1: "Fast delivery",
      chip2: "Clean code & design",
      chip3: "Built for conversions",
    },
    // Services
    services: {
      badge: "What We Do",
      title: "Services built for growth",
      subtitle: "From code to creative, we deliver end-to-end solutions that help your business thrive in the digital landscape.",
      tabSoftware: "Software Development",
      tabCreative: "Communication & Creative",
      learnMore: "Learn more",
      requestService: "Request this service",
      deliverables: "What's Included",
      outcomes: "Expected Results",
      software: {
        websites: {
          title: "High-Converting Website Development",
          short: "Turn visitors into leads with a fast, modern website designed for conversions and optimized for search engines.",
          details: [
            "Responsive design that looks great on all devices",
            "SEO-optimized architecture for better visibility",
            "Lightning-fast loading speeds",
            "Secure and scalable infrastructure",
          ],
          outcomes: [
            "More organic traffic from search engines",
            "Higher conversion rates",
            "Professional online presence that builds trust",
          ],
        },
        mobile: {
          title: "Mobile App Development for Growth",
          short: "Reach your customers wherever they are with intuitive mobile apps that drive engagement and unlock new revenue.",
          details: [
            "Native iOS and Android development",
            "Intuitive, user-friendly interfaces",
            "Push notifications & analytics built-in",
            "App store optimization for discoverability",
          ],
          outcomes: [
            "Expanded market reach",
            "Improved customer engagement and loyalty",
            "New revenue channels",
          ],
        },
        ecommerce: {
          title: "E-commerce Stores That Sell",
          short: "Launch a scalable online store with seamless checkout experiences that reduce cart abandonment and boost sales.",
          details: [
            "Custom shopping cart systems",
            "Secure payment gateway integration",
            "Inventory and order management",
            "Automated order tracking & fulfillment",
          ],
          outcomes: [
            "Increased online sales",
            "Reduced cart abandonment rates",
            "Streamlined operations that save time",
          ],
        },
        automation: {
          title: "Business Automation & Integrations",
          short: "Automate repetitive tasks to save hours every week, reduce errors, and let your team focus on what matters.",
          details: [
            "Custom workflow automation design",
            "Connect all your favorite tools",
            "Automatic data synchronization",
            "Smart triggers and actions",
          ],
          outcomes: [
            "Hours saved on repetitive tasks every week",
            "Fewer manual errors",
            "Improved data accuracy across systems",
          ],
        },
        maintenance: {
          title: "Performance, Security & Ongoing Support",
          short: "Keep your digital products running smoothly with proactive monitoring, regular updates, and dedicated support.",
          details: [
            "Regular security updates and patches",
            "Performance monitoring and optimization",
            "Bug fixes and continuous improvements",
            "Dedicated technical support",
          ],
          outcomes: [
            "Minimized downtime and disruptions",
            "Peak performance at all times",
            "Peace of mind knowing experts have your back",
          ],
        },
      },
      creative: {
        social: {
          title: "Social Media Management",
          short: "Build a loyal community and drive engagement with strategic content that keeps your brand top of mind.",
          details: [
            "Strategic content calendar planning",
            "Post creation and scheduling",
            "Community engagement and moderation",
            "Performance analytics and insights",
          ],
          outcomes: [
            "Increased brand awareness",
            "Higher engagement rates",
            "Steadily growing follower base",
          ],
        },
        branding: {
          title: "Brand Identity & Visual Direction",
          short: "Stand out from competitors with a cohesive brand identity that builds recognition and trust.",
          details: [
            "Logo design with multiple variations",
            "Color palette and typography system",
            "Comprehensive brand guidelines",
            "Full visual identity assets kit",
          ],
          outcomes: [
            "Strong brand recognition",
            "Consistent visual identity everywhere",
            "Professional credibility that wins clients",
          ],
        },
        design: {
          title: "Design for Marketing & Ads",
          short: "Capture attention and communicate your message with eye-catching visuals that drive action.",
          details: [
            "Marketing collateral and materials",
            "Social media graphics and templates",
            "Presentation and pitch deck design",
            "Print and digital advertising assets",
          ],
          outcomes: [
            "Compelling visual content that converts",
            "Consistent brand imagery across channels",
            "Higher engagement on marketing campaigns",
          ],
        },
        video: {
          title: "Video Editing for Engagement",
          short: "Captivate your audience with professional video content that tells your brand story and drives views.",
          details: [
            "Video editing and post-production",
            "Motion graphics and animations",
            "Subtitles and captions for accessibility",
            "Format optimization for all platforms",
          ],
          outcomes: [
            "Increased video engagement and watch time",
            "Professional content quality",
            "Multi-platform reach and visibility",
          ],
        },
        content: {
          title: "Content Strategy & Campaign Planning",
          short: "Attract and convert your ideal customers with data-driven content strategies that deliver measurable ROI.",
          details: [
            "Comprehensive content strategy development",
            "Campaign planning and execution",
            "Performance tracking and optimization",
            "Audience research and analysis",
          ],
          outcomes: [
            "Clear strategic content direction",
            "Measurable campaign results",
            "Improved return on marketing investment",
          ],
        },
      },
    },
    // Subscription
    subscription: {
      badge: "Subscription",
      title: "Social Media Management",
      subtitle: "Monthly subscription-based social media management, customized to your needs. Choose a tier that fits your goals.",
      mostPopular: "Most Popular",
      requestOffer: "Request the offer",
      pricingNote: "Pricing depends on needs — contact us for a tailored plan.",
      tiers: {
        starter: {
          name: "Starter",
          description: "For small businesses starting out",
          features: [
            "Content planning",
            "Basic design templates",
            "Posting schedule",
            "Monthly performance report",
          ],
        },
        growth: {
          name: "Growth",
          description: "For brands aiming to scale",
          features: [
            "Everything in Starter",
            "Enhanced creative assets",
            "Community engagement",
            "Bi-weekly insights and strategy calls",
          ],
        },
        elite: {
          name: "Elite",
          description: "For high-output, premium presence",
          features: [
            "Everything in Growth",
            "Advanced content production direction",
            "Campaign management",
            "Priority turnaround times",
          ],
        },
      },
    },
    // Work
    work: {
      badge: "Portfolio",
      title: "Selected Work",
      subtitle: "A showcase of projects that demonstrate our expertise across software development and creative services.",
      caseStudy: "Case study",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      startSimilar: "Start a similar project",
      projectPreview: "Project Preview",
    },
    // Process
    process: {
      badge: "How We Work",
      title: "Our Process",
      subtitle: "A proven approach that delivers results, from initial concept to ongoing success.",
      steps: {
        discover: {
          title: "Discover",
          description: "We dive deep into your business, goals, and audience to understand what success looks like for you.",
        },
        design: {
          title: "Design",
          description: "Crafting visual concepts and user experiences that align with your brand and business objectives.",
        },
        build: {
          title: "Build",
          description: "Bringing designs to life with clean, scalable code and attention to every detail.",
        },
        launch: {
          title: "Launch & Improve",
          description: "Deploying your project and continuously optimizing based on real-world performance data.",
        },
      },
    },
    // About
    about: {
      badge: "About Us",
      title: "Guiding your digital journey",
      description1: "Pelorus — named after the dolphin species known for guiding sailors through treacherous waters — represents our commitment to navigating businesses through the complex digital landscape.",
      description2: "We blend engineering precision with creative vision to deliver digital experiences that not only look stunning but perform exceptionally. Our team combines deep technical expertise with an eye for design, ensuring every project strikes the perfect balance between form and function.",
      whatYouGet: "What you get",
      benefits: [
        "Clarity in every deliverable",
        "Consistency across all touchpoints",
        "Reliable delivery, every time",
        "Transparent communication",
      ],
      values: {
        navigation: {
          title: "Strategic Navigation",
          description: "We chart the course for your digital success with data-driven decisions.",
        },
        creative: {
          title: "Creative Excellence",
          description: "Beautiful design that captures attention and communicates your message.",
        },
        technical: {
          title: "Technical Precision",
          description: "Clean, maintainable code that scales with your business needs.",
        },
      },
    },
    // Contact
    contact: {
      badge: "Get in Touch",
      title: "Let's build something great",
      subtitle: "Ready to start your project? Reach out and we'll get back to you within 24-48 hours.",
      emailUs: "Email Us",
      followDm: "Follow & DM",
      replyTime: "We reply within 24–48h.",
      requesting: "You're requesting:",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        company: "Company",
        companyPlaceholder: "Your company",
        email: "Email",
        emailPlaceholder: "you@company.com",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        send: "Send Message",
        sending: "Sending...",
        sent: "Message Sent",
      },
      toast: {
        title: "Thanks for reaching out!",
        description: "We received your message and will reply within 24–48 hours.",
        errorTitle: "Message not sent",
        errorDescription: "Something went wrong. Please try again in a moment.",
      },
    },
    // Footer
    footer: {
      tagline: "Navigating growth with software + creative excellence.",
      quickLinks: "Quick Links",
      connect: "Connect",
      copyright: "All rights reserved.",
    },
  },
  fr: {
    // Navbar
    nav: {
      services: "Services",
      subscription: "Abonnement",
      work: "Portfolio",
      about: "À propos",
      contact: "Contact",
      letsTalk: "Discutons",
    },
    // Hero
    hero: {
      badge: "Agence Logiciel + Créative",
      headline: "Développez votre entreprise.",
      headlineAccent: "Augmentez vos ventes.",
      subheadline: "Nous aidons les entreprises à croître, augmenter leurs ventes et se démarquer en ligne grâce au développement, à l'automatisation et à la communication qui génèrent des résultats mesurables.",
      ctaPrimary: "Démarrer un projet",
      ctaSecondary: "Voir les services",
      chip1: "Livraison rapide",
      chip2: "Code & design soigné",
      chip3: "Conçu pour convertir",
    },
    // Services
    services: {
      badge: "Ce que nous faisons",
      title: "Des services conçus pour la croissance",
      subtitle: "Du code au créatif, nous offrons des solutions complètes qui aident votre entreprise à prospérer dans le paysage numérique.",
      tabSoftware: "Développement Logiciel",
      tabCreative: "Communication & Créatif",
      learnMore: "En savoir plus",
      requestService: "Demander ce service",
      deliverables: "Ce qui est inclus",
      outcomes: "Résultats attendus",
      software: {
        websites: {
          title: "Sites web à forte conversion",
          short: "Transformez vos visiteurs en prospects avec un site rapide et moderne, conçu pour convertir et optimisé pour les moteurs de recherche.",
          details: [
            "Design responsive parfait sur tous les appareils",
            "Architecture optimisée pour le référencement",
            "Temps de chargement ultra-rapides",
            "Infrastructure sécurisée et évolutive",
          ],
          outcomes: [
            "Plus de trafic organique depuis les moteurs de recherche",
            "Taux de conversion plus élevés",
            "Présence en ligne professionnelle qui inspire confiance",
          ],
        },
        mobile: {
          title: "Applications mobiles pour la croissance",
          short: "Atteignez vos clients où qu'ils soient avec des applications intuitives qui stimulent l'engagement et ouvrent de nouveaux revenus.",
          details: [
            "Développement natif iOS et Android",
            "Interfaces intuitives et conviviales",
            "Notifications push et analytics intégrés",
            "Optimisation pour les app stores",
          ],
          outcomes: [
            "Portée de marché élargie",
            "Engagement et fidélité client améliorés",
            "Nouveaux canaux de revenus",
          ],
        },
        ecommerce: {
          title: "Boutiques e-commerce qui vendent",
          short: "Lancez une boutique en ligne évolutive avec des expériences de paiement fluides qui réduisent les abandons et boostent les ventes.",
          details: [
            "Systèmes de panier personnalisés",
            "Intégration sécurisée des paiements",
            "Gestion des stocks et commandes",
            "Suivi et traitement automatisé des commandes",
          ],
          outcomes: [
            "Augmentation des ventes en ligne",
            "Réduction des abandons de panier",
            "Opérations simplifiées qui font gagner du temps",
          ],
        },
        automation: {
          title: "Automatisation & Intégrations métier",
          short: "Automatisez les tâches répétitives pour gagner des heures chaque semaine, réduire les erreurs et libérer votre équipe.",
          details: [
            "Conception de workflows automatisés sur mesure",
            "Connexion de tous vos outils favoris",
            "Synchronisation automatique des données",
            "Déclencheurs et actions intelligents",
          ],
          outcomes: [
            "Des heures gagnées chaque semaine sur les tâches répétitives",
            "Moins d'erreurs manuelles",
            "Meilleure précision des données entre systèmes",
          ],
        },
        maintenance: {
          title: "Performance, sécurité & support continu",
          short: "Gardez vos produits numériques performants avec une surveillance proactive, des mises à jour régulières et un support dédié.",
          details: [
            "Mises à jour de sécurité régulières",
            "Surveillance et optimisation des performances",
            "Corrections de bugs et améliorations continues",
            "Support technique dédié",
          ],
          outcomes: [
            "Temps d'arrêt et perturbations minimisés",
            "Performances optimales en permanence",
            "Tranquillité d'esprit avec des experts à vos côtés",
          ],
        },
      },
      creative: {
        social: {
          title: "Gestion des réseaux sociaux",
          short: "Construisez une communauté fidèle et stimulez l'engagement avec du contenu stratégique qui garde votre marque visible.",
          details: [
            "Planification stratégique du calendrier de contenu",
            "Création et programmation des publications",
            "Animation et modération de communauté",
            "Analyses de performance et insights",
          ],
          outcomes: [
            "Notoriété de marque accrue",
            "Taux d'engagement plus élevés",
            "Base d'abonnés en croissance constante",
          ],
        },
        branding: {
          title: "Identité de marque & Direction visuelle",
          short: "Démarquez-vous de la concurrence avec une identité de marque cohérente qui construit reconnaissance et confiance.",
          details: [
            "Création de logo avec multiples déclinaisons",
            "Palette de couleurs et système typographique",
            "Charte graphique complète",
            "Kit complet d'éléments d'identité visuelle",
          ],
          outcomes: [
            "Forte reconnaissance de marque",
            "Identité visuelle cohérente partout",
            "Crédibilité professionnelle qui convainc",
          ],
        },
        design: {
          title: "Design pour le marketing & la pub",
          short: "Captez l'attention et communiquez votre message avec des visuels accrocheurs qui incitent à l'action.",
          details: [
            "Supports et matériels marketing",
            "Visuels et templates pour réseaux sociaux",
            "Design de présentations et pitchs",
            "Assets publicitaires print et digitaux",
          ],
          outcomes: [
            "Contenu visuel convaincant qui convertit",
            "Imagerie de marque cohérente sur tous les canaux",
            "Meilleur engagement sur les campagnes marketing",
          ],
        },
        video: {
          title: "Montage vidéo pour l'engagement",
          short: "Captivez votre audience avec du contenu vidéo professionnel qui raconte votre histoire et génère des vues.",
          details: [
            "Montage vidéo et post-production",
            "Motion graphics et animations",
            "Sous-titres pour l'accessibilité",
            "Optimisation des formats pour toutes les plateformes",
          ],
          outcomes: [
            "Engagement et temps de visionnage accrus",
            "Qualité de contenu professionnelle",
            "Portée et visibilité multi-plateforme",
          ],
        },
        content: {
          title: "Stratégie de contenu & Planification de campagnes",
          short: "Attirez et convertissez vos clients idéaux avec des stratégies de contenu basées sur les données qui délivrent un ROI mesurable.",
          details: [
            "Développement de stratégie de contenu complète",
            "Planification et exécution de campagnes",
            "Suivi des performances et optimisation",
            "Recherche et analyse d'audience",
          ],
          outcomes: [
            "Direction de contenu stratégique claire",
            "Résultats de campagne mesurables",
            "Meilleur retour sur investissement marketing",
          ],
        },
      },
    },
    // Subscription
    subscription: {
      badge: "Abonnement",
      title: "Gestion des réseaux sociaux",
      subtitle: "Gestion des réseaux sociaux par abonnement mensuel, personnalisée selon vos besoins. Choisissez le niveau qui correspond à vos objectifs.",
      mostPopular: "Le plus populaire",
      requestOffer: "Demander l'offre",
      pricingNote: "Les tarifs dépendent des besoins — contactez-nous pour un plan sur mesure.",
      tiers: {
        starter: {
          name: "Démarrage",
          description: "Pour les petites entreprises qui débutent",
          features: [
            "Planification de contenu",
            "Templates de design basiques",
            "Calendrier de publication",
            "Rapport de performance mensuel",
          ],
        },
        growth: {
          name: "Croissance",
          description: "Pour les marques qui visent l'expansion",
          features: [
            "Tout dans Démarrage",
            "Assets créatifs améliorés",
            "Engagement communautaire",
            "Insights et appels stratégiques bi-hebdomadaires",
          ],
        },
        elite: {
          name: "Élite",
          description: "Pour une présence premium à haut rendement",
          features: [
            "Tout dans Croissance",
            "Direction de production de contenu avancée",
            "Gestion de campagnes",
            "Délais de livraison prioritaires",
          ],
        },
      },
    },
    // Work
    work: {
      badge: "Portfolio",
      title: "Travaux sélectionnés",
      subtitle: "Une vitrine de projets qui démontrent notre expertise en développement logiciel et services créatifs.",
      caseStudy: "Étude de cas",
      challenge: "Défi",
      solution: "Solution",
      results: "Résultats",
      startSimilar: "Démarrer un projet similaire",
      projectPreview: "Aperçu du projet",
    },
    // Process
    process: {
      badge: "Notre méthode",
      title: "Notre processus",
      subtitle: "Une approche éprouvée qui donne des résultats, du concept initial au succès continu.",
      steps: {
        discover: {
          title: "Découvrir",
          description: "Nous plongeons en profondeur dans votre entreprise, vos objectifs et votre audience pour comprendre ce que le succès signifie pour vous.",
        },
        design: {
          title: "Concevoir",
          description: "Création de concepts visuels et d'expériences utilisateur alignés avec votre marque et vos objectifs business.",
        },
        build: {
          title: "Construire",
          description: "Donner vie aux designs avec un code propre et évolutif, en prêtant attention à chaque détail.",
        },
        launch: {
          title: "Lancer & Améliorer",
          description: "Déploiement de votre projet et optimisation continue basée sur les données de performance réelles.",
        },
      },
    },
    // About
    about: {
      badge: "À propos",
      title: "Guider votre parcours numérique",
      description1: "Pelorus — nommé d'après l'espèce de dauphin connue pour guider les marins à travers des eaux dangereuses — représente notre engagement à naviguer les entreprises à travers le paysage numérique complexe.",
      description2: "Nous combinons précision technique et vision créative pour offrir des expériences numériques qui non seulement sont superbes mais performent exceptionnellement. Notre équipe allie une expertise technique approfondie à un sens du design, assurant que chaque projet trouve l'équilibre parfait entre forme et fonction.",
      whatYouGet: "Ce que vous obtenez",
      benefits: [
        "Clarté dans chaque livrable",
        "Cohérence sur tous les points de contact",
        "Livraison fiable, à chaque fois",
        "Communication transparente",
      ],
      values: {
        navigation: {
          title: "Navigation stratégique",
          description: "Nous traçons la route de votre succès numérique avec des décisions basées sur les données.",
        },
        creative: {
          title: "Excellence créative",
          description: "Un design magnifique qui capte l'attention et communique votre message.",
        },
        technical: {
          title: "Précision technique",
          description: "Code propre et maintenable qui évolue avec les besoins de votre entreprise.",
        },
      },
    },
    // Contact
    contact: {
      badge: "Nous contacter",
      title: "Construisons quelque chose de grand",
      subtitle: "Prêt à démarrer votre projet ? Contactez-nous et nous vous répondrons sous 24-48 heures.",
      emailUs: "Écrivez-nous",
      followDm: "Suivez & DM",
      replyTime: "Nous répondons sous 24–48h.",
      requesting: "Vous demandez :",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        company: "Entreprise",
        companyPlaceholder: "Votre entreprise",
        email: "Email",
        emailPlaceholder: "vous@entreprise.com",
        message: "Message",
        messagePlaceholder: "Parlez-nous de votre projet...",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        sent: "Message envoyé",
      },
      toast: {
        title: "Merci de nous avoir contacté !",
        description: "Nous avons bien reçu votre message et reviendrons vers vous sous 24 à 48 heures.",
        errorTitle: "Message non envoyé",
        errorDescription: "Une erreur est survenue. Veuillez réessayer dans un instant.",
      },
    },
    // Footer
    footer: {
      tagline: "Naviguer la croissance avec excellence logicielle + créative.",
      quickLinks: "Liens rapides",
      connect: "Connexion",
      copyright: "Tous droits réservés.",
    },
  },
} as const

type Translations = typeof translations.en

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem("pelorus-lang") as Language | null
    if (stored && (stored === "en" || stored === "fr")) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("pelorus-lang", lang)
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
