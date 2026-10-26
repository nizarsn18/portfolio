/**
 * CENTRAL DATA FILE — PORTFOLIO NIZAR SNABI
 * Toutes les données du site sont centralisées ici pour une modification rapide et facile.
 * Ne modifiez que ce fichier pour mettre à jour vos coordonnées, expériences, projets ou liens.
 */

export const personalData = {
  name: "Nizar SNABI",
  firstName: "Nizar",
  lastName: "SNABI",
  monogram: "NS",
  email: "snabinizar2@gmail.com",
  phone: "+212 651 934 863",
  location: "Temara, Maroc",
  availability: {
    fr: "Disponible pour un stage PFE – Février 2027",
    en: "Available for Final-Year Internship (PFE) – Feb 2027"
  },
  statusBadge: {
    fr: "Recherche de Stage PFE",
    en: "Seeking Final-Year Internship"
  },
  photo: `${import.meta.env.BASE_URL}assets/photo.jpg`,
  cvPdf: `${import.meta.env.BASE_URL}assets/CV-Nizar-Snabi.pdf`,
  socials: {
    linkedin: "https://www.linkedin.com/in/nizar-snabi-8159a124b/",
    github: "https://github.com/nizarsn18",
    email: "mailto:snabinizar2@gmail.com",
    phone: "tel:+212651934863"
  }
};

export const content = {
  fr: {
    nav: {
      about: "À propos",
      journey: "Parcours",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
      languages: "Langues",
      contact: "Contact",
      downloadCv: "Télécharger mon CV"
    },
    hero: {
      badge: "Disponible pour un stage PFE – Février 2027",
      greeting: "Bonjour, je suis",
      roles: [
        "Ingénieur Full Stack",
        "Développeur Web & Logiciel",
        "Étudiant Ingénieur Informatique & Réseaux"
      ],
      tagline: "Élève-ingénieur en 5ème année à l'EMSI Rabat, alliant rigueur architecturale, passion du code propre et maîtrise des systèmes web modernes pour concevoir des solutions fiables et performantes.",
      ctaProjects: "Découvrir mes projets",
      ctaContact: "Me contacter",
      scrollDown: "Faites défiler pour explorer"
    },
    about: {
      subtitle: "EXCELLENCE & DÉVOUEMENT",
      title: "À propos de moi",
      bio1: "Étudiant en 5ᵉ année du cycle ingénieur en Informatique & Réseaux à l'EMSI Rabat et titulaire d'un diplôme de Technicien Spécialisé en Développement Digital option Web Full Stack (ISTA NTIC Rabat), j'associe une solide assise théorique à une pratique concrète et éprouvée du développement web.",
      bio2: "Fort de 4 expériences de stage en entreprise et au sein d'institutions publiques, je maîtrise le développement d'interfaces modernes, la conception d'architectures back-end robustes ainsi que la gestion de bases de données relationnelles et NoSQL.",
      bio3: "Passionné par l'innovation logicielle, autonome et rapide dans l'apprentissage de nouveaux environnements, je suis à la recherche d'un stage de fin d'études (PFE) d'excellence à compter du 1er Février 2027 afin de mettre mon énergie et mes compétences au service de projets ambitieux.",
      stats: [
        { value: 4, label: "Stages réalisés", suffix: "" },
        { value: 11, label: "Certifications internationales", suffix: "" },
        { value: 4, label: "Langues maîtrisées", suffix: "" },
        { value: 5, label: "Années d'études supérieures", suffix: "e" }
      ],
      highlights: [
        { label: "Formation d'élite", desc: "EMSI Rabat & ISTA NTIC (Cycle Ingénieur + Web Full Stack)" },
        { label: "Méthodologie", desc: "Pratique rigoureuse des méthodes Agiles & clean code" },
        { label: "Polyvalence", desc: "Front-end moderne, Back-end structuré & Systèmes Linux" }
      ]
    },
    timeline: {
      subtitle: "TRAJECTOIRE ACADÉMIQUE & PROFESSIONNELLE",
      title: "Mon Parcours",
      filterAll: "Tout afficher",
      filterExp: "Expériences (Stages)",
      filterEdu: "Formation",
      items: [
        {
          id: "exp-1",
          type: "experience",
          title: "Stagiaire – Gestion du Parc Informatique",
          organization: "Direction de l'Irrigation et de l'Aménagement de l'Espace Agricole (DIAEA)",
          location: "Rabat, Maroc",
          period: "1er Août 2026 – 1er Sept. 2026",
          badge: "Stage",
          description: "Conception et mise en œuvre d'une plateforme centralisée de gestion et de suivi en temps réel du parc informatique pour les besoins de la DIAEA.",
          highlights: [
            "Inventaire et traçabilité des équipements matériels et licences logicielles",
            "Mise en place de tableaux de bord de suivi opérationnel",
            "Amélioration de la visibilité sur les maintenances et affectations"
          ],
          tags: ["Web", "Gestion de Parc", "Base de données", "Full Stack"]
        },
        {
          id: "edu-1",
          type: "education",
          title: "Cycle Ingénieur Informatique & Réseaux",
          organization: "EMSI — École Marocaine des Sciences de l'Ingénieur",
          location: "Rabat, Maroc",
          period: "2025 – Présent (5ème année)",
          badge: "En cours",
          description: "Formation d'excellence préparant au titre d'ingénieur d'État en génie informatique et réseaux : architectures logicielles avancées, sécurité, réseaux et gestion de projets complexes.",
          highlights: [
            "Génie logiciel et conception objet avancée",
            "Infrastructures réseaux, systèmes distribués et sécurité",
            "Management de projet et méthodologies agiles"
          ],
          tags: ["Ingénierie", "Architecture Logicielle", "Réseaux", "Agile"]
        },
        {
          id: "exp-2",
          type: "experience",
          title: "Stagiaire – Gestion des Attestations RH",
          organization: "Ministère de l'Équipement, du Transport, de la Logistique et de l'Eau",
          location: "Rabat, Maroc",
          period: "14 Juil. 2025 – 14 Août 2025",
          badge: "Stage",
          description: "Développement d'un système numérisé de gestion des demandes d'attestation de travail et d'attestation de salaire pour fluidifier le traitement administratif RH.",
          highlights: [
            "Automatisation du circuit de soumission et de validation des demandes",
            "Génération numérique conforme des attestations administratives",
            "Réduction significative des délais de traitement pour les agents"
          ],
          tags: ["Full Stack", "Système RH", "Automatisation", "SQL"]
        },
        {
          id: "edu-2",
          type: "education",
          title: "Technicien Spécialisé en Développement Digital (Option Web Full Stack)",
          organization: "ISTA NTIC Rabat",
          location: "Rabat, Maroc",
          period: "2024",
          badge: "Diplômé",
          description: "Formation technique approfondie axée sur la maîtrise pratique des technologies web modernes : interfaces réactives, architectures serveurs et modélisation de bases de données.",
          highlights: [
            "Spécialisation Web Full Stack : Front-end moderne & Back-end",
            "Bases de données relationnelles SQL et modélisation",
            "Projets appliqués en conditions professionnelles"
          ],
          tags: ["Web Full Stack", "React", "PHP/Laravel", "SQL"]
        },
        {
          id: "exp-3",
          type: "experience",
          title: "Stagiaire Développeur Web & Bases de Données",
          organization: "Noble Service",
          location: "Rabat / Région",
          period: "Avril 2024 – Juin 2024",
          badge: "Stage",
          description: "Participation active à divers projets de création de sites web pour le secteur de la construction (BTP) : développement des interfaces utilisateur et structuration des bases de données associées.",
          highlights: [
            "Développement des composants d'interface web dynamiques (front-end)",
            "Conception et implémentation des schémas de bases de données",
            "Intégration d'outils de présentation de projets de construction"
          ],
          tags: ["Front-end", "Back-end", "BTP", "Bases de données"]
        },
        {
          id: "exp-4",
          type: "experience",
          title: "Stagiaire Développeur Web & Bases de Données",
          organization: "Direction Régionale de l'Équipement, du Transport et de la Logistique (DRETL)",
          location: "Région Rabat-Salé-Kénitra",
          period: "Avril 2023 – Juin 2023",
          badge: "Stage",
          description: "Développement d'un système complet de gestion des congés pour les employés : interface conviviale et base de données robuste pour tracer et valider les demandes.",
          highlights: [
            "Interface ergonomique pour la soumission des congés par le personnel",
            "Base de données optimisée pour le calcul automatique des soldes",
            "Système d'approbation hiérarchique avec suivi d'état en temps réel"
          ],
          tags: ["Gestion de Congés", "Web", "SQL", "Portail Employés"]
        },
        {
          id: "edu-3",
          type: "education",
          title: "Baccalauréat Sciences Physiques-Chimie",
          organization: "Lycée Bir Kacem Assabil",
          location: "Rabat / Région",
          period: "2021",
          badge: "Obtenu",
          description: "Formation scientifique développant rigueur analytique, démarche de résolution de problèmes et logique mathématique.",
          highlights: [
            "Discipline mathématique et raisonnement scientifique",
            "Socle d'analyse préparatoire aux études supérieures d'ingénierie"
          ],
          tags: ["Sciences", "Physique-Chimie", "Mathématiques"]
        }
      ]
    },
    skills: {
      subtitle: "MAÎTRISE TECHNIQUE & INGÉNIERIE",
      title: "Compétences",
      description: "Un ensemble de compétences équilibré entre développement web réactif, architectures logicielles, persistance de données et gestion de projets agiles.",
      marqueeTitle: "Écosystème technologique",
      categories: [
        {
          title: "Développement Front-end",
          icon: "Layout",
          skills: [
            { name: "React", level: 90, note: "Composants, hooks, state management, SPA" },
            { name: "JavaScript", level: 92, note: "ES6+, logique asynchrone, DOM" },
            { name: "HTML & CSS", level: 95, note: "Sémantique, responsive design, Flexbox/Grid" }
          ]
        },
        {
          title: "Développement Back-end",
          icon: "Server",
          skills: [
            { name: "PHP (Laravel)", level: 88, note: "Architecture MVC, Eloquent ORM, API REST, routing" }
          ]
        },
        {
          title: "Programmation",
          icon: "Code",
          skills: [
            { name: "C++", level: 85, note: "POO, gestion mémoire, structures de données" }
          ]
        },
        {
          title: "Bases de Données",
          icon: "Database",
          skills: [
            { name: "SQL", level: 90, note: "Modélisation relationnelle, requêtes complexes, indexation" },
            { name: "MongoDB", level: 82, note: "Documents NoSQL, collections, agrégations" }
          ]
        },
        {
          title: "Gestion de Projet",
          icon: "Layers",
          skills: [
            { name: "Méthodologie Agile", level: 90, note: "Scrum, sprints, user stories, suivi de livrables" }
          ]
        },
        {
          title: "Systèmes & Environnements",
          icon: "Terminal",
          skills: [
            { name: "Linux", level: 86, note: "Ligne de commande bash, permissions, serveurs, scripts" }
          ]
        }
      ],
      technologies: [
        { name: "React", category: "Front-end" },
        { name: "JavaScript", category: "Langage" },
        { name: "PHP", category: "Back-end" },
        { name: "Laravel", category: "Framework" },
        { name: "C++", category: "Langage" },
        { name: "SQL", category: "Database" },
        { name: "MongoDB", category: "NoSQL" },
        { name: "HTML5", category: "Front-end" },
        { name: "CSS3", category: "Styling" },
        { name: "Linux", category: "OS" },
        { name: "Agile / Scrum", category: "Méthodologie" },
        { name: "Git", category: "Version Control" }
      ]
    },
    projects: {
      subtitle: "PROJETS PERSONNELS & RÉALISATIONS",
      title: "Projets Sélectionnés",
      filterAll: "Tous les projets",
      categories: ["Tous", "Gestion Interne", "Full Stack", "Web BTP"],
      viewDetails: "Consulter la fiche",
      closeModal: "Fermer",
      demoBtn: "Démonstration [À venir]",
      githubBtn: "Code source",
      noticePlaceholder: "Consultez le dépôt GitHub pour découvrir le code source du projet.",
      items: [
        {
          id: "proj-diaea",
          title: "Plateforme de Suivi & Gestion du Parc Informatique",
          context: "Direction de l'Irrigation et de l'Aménagement de l'Espace Agricole (DIAEA)",
          category: "Gestion Interne",
          period: "Août – Septembre 2026",
          summary: "Plateforme centralisée permettant le recensement, la traçabilité et le suivi opérationnel en continu de l'ensemble du parc matériel et logiciel de l'institution.",
          description: "Développée lors de mon stage à la DIAEA, cette solution a été conçue pour surmonter les difficultés liées à la dispersion des données relatives aux équipements informatiques. Elle offre un tableau de bord complet avec des indicateurs sur l'état du matériel, les affectations par agent ou service, et le planning de maintenance.",
          features: [
            "Recensement détaillé des équipements (postes de travail, serveurs, périphériques)",
            "Gestion des affectations par département et agent bénéficiaire",
            "Tableau de bord dynamique avec statistiques d'utilisation et alertes de renouvellement",
            "Historique complet des interventions de maintenance et garanties"
          ],
          technologies: ["PHP / Laravel", "SQL", "JavaScript", "HTML / CSS", "Agile"],
          role: "Stagiaire Développeur — Conception & Implémentation",
          demoUrl: "https://demo.example.com/diaea-parc", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/diaea-parc-informatique" // [PLACEHOLDER]
        },
        {
          id: "proj-ministere",
          title: "Système de Gestion des Attestations RH",
          context: "Ministère de l'Équipement, du Transport, de la Logistique et de l'Eau",
          category: "Gestion Interne",
          period: "Juillet – Août 2025",
          summary: "Application web dédiée à la numérisation complète du circuit de demande, de validation et d'émission des attestations de travail et de salaire.",
          description: "Mise en œuvre au sein du Ministère pour moderniser les processus administratifs RH. L'application permet aux collaborateurs de formuler leurs demandes en quelques clics et aux gestionnaires RH de traiter, valider et éditer les documents officiels avec une traçabilité rigoureuse.",
          features: [
            "Espace collaborateur pour soumettre et suivre les demandes en temps réel",
            "Module de validation hiérarchique avec notifications de statut",
            "Édition automatisée des attestations de travail et de salaire au format standardisé",
            "Sécurisation des accès et journalisation des délivrances"
          ],
          technologies: ["Web Full Stack", "SQL", "PHP", "JavaScript", "Linux"],
          role: "Stagiaire Développeur — Analyse, Base de Données & Développement",
          demoUrl: "https://demo.example.com/ministere-attestations", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/ministere-attestations-rh" // [PLACEHOLDER]
        },
        {
          id: "proj-dretl",
          title: "Système de Gestion des Congés du Personnel",
          context: "Direction Régionale de l'Équipement, du Transport et de la Logistique (DRETL)",
          category: "Gestion Interne",
          period: "Avril – Juin 2023",
          summary: "Portail ergonomique et base de données robuste pour la planification, le décompte automatique et l'approbation des congés des employés.",
          description: "Développement d'un outil sur-mesure pour remplacer les formulaires papier traditionnels. Le système automatise le calcul des jours restants selon les catégories de congés (annuels, exceptionnels, maladie) et offre une visibilité instantanée sur les plannings d'équipe.",
          features: [
            "Calcul et mise à jour en temps réel des soldes de congés restants",
            "Calendrier visuel interactif des absences par division",
            "Workflow de validation à double niveau (responsable direct & direction)",
            "Historique consultable et export des rapports d'absences"
          ],
          technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
          role: "Stagiaire Développeur Web & Gestion de Bases de Données",
          demoUrl: "https://demo.example.com/dretl-conges", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/dretl-gestion-conges" // [PLACEHOLDER]
        },
        {
          id: "proj-noble",
          title: "Plateformes Web & Solutions BTP / Construction",
          context: "Noble Service",
          category: "Web BTP",
          period: "Avril – Juin 2024",
          summary: "Développement front-end et back-end de sites web dynamiques mettant en valeur des projets de construction avec gestion de contenu et bases de données adaptées.",
          description: "Réalisé au sein de l'entreprise Noble Service, ce projet a consisté à concevoir des vitrines numériques performantes pour le secteur du bâtiment, combinant des interfaces soignées, des galeries de réalisations et des back-offices intuitifs.",
          features: [
            "Conception d'interfaces web responsives aux normes graphiques du secteur BTP",
            "Structuration et liaison des bases de données de projets et services",
            "Mise en place de modules de contact et de demande de devis",
            "Optimisation du chargement des médias pour une navigation fluide"
          ],
          technologies: ["React", "JavaScript", "PHP", "Bases de Données Relationnelles", "CSS moderne"],
          role: "Stagiaire Développeur Web & Bases de Données",
          demoUrl: "https://demo.example.com/noble-construction", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/noble-construction-web" // [PLACEHOLDER]
        },
        {
          id: "personal-cafe-socco",
          title: "Café Socco — Site vitrine et réservation",
          context: "Projet personnel",
          category: "Projet Personnel",
          summary: "Site web pour un café culturel oriental, avec présentation du lieu, menu, réservation et contact.",
          description: "Une vitrine web soignée pour présenter l'univers du Café Socco et faciliter la découverte du menu ainsi que les demandes de réservation. Le dépôt contient les ressources du site et une vidéo de présentation.",
          features: [
            "Présentation du café et de son univers culturel",
            "Menu avec navigation par catégories",
            "Formulaires de réservation et de contact",
            "Interface responsive avec animations et éléments 3D"
          ],
          technologies: ["HTML5", "CSS3", "JavaScript", "Three.js"],
          role: "Conception et développement web",
          githubUrl: "https://github.com/nizarsn18/cafe-socco"
        },
        {
          id: "personal-my-projet",
          title: "Boutique en ligne et gestion de produits",
          context: "Projet personnel",
          category: "Projet Personnel",
          summary: "Application e-commerce avec catalogue, catégories, fiches produits et espace d’administration.",
          description: "Application web organisée autour d’un catalogue de produits, avec pages de détail, formulaire de contact et interface d’administration. Le projet associe une interface React à une API construite avec Express et une base de données MySQL.",
          features: [
            "Catalogue de produits avec filtrage par catégorie",
            "Pages de détail pour les produits",
            "Espace d’administration et authentification",
            "API Express reliée à une base de données MySQL"
          ],
          technologies: ["React", "Node.js", "Express", "MySQL", "Axios"],
          role: "Conception et développement full stack",
          githubUrl: "https://github.com/nizarsn18/my-projet"
        },
        {
          id: "personal-gestion-projet",
          title: "Révision de gestion de projet — Préparation d’examen",
          context: "Projet personnel",
          category: "Projet Personnel",
          summary: "Page de révision regroupant des notions clés de gestion de projet et des exercices de préparation à l’examen.",
          description: "Support de révision en une page consacré au cahier des charges, à la décomposition WBS, au suivi de projet et aux méthodes PERT et GANTT, avec des exercices de type QCM.",
          features: [
            "Rappels sur le cahier des charges et le WBS",
            "Contenus dédiés au suivi et aux indicateurs de projet",
            "Exercices sur les méthodes PERT et GANTT",
            "Questions de révision au format QCM"
          ],
          technologies: ["HTML5", "CSS3"],
          role: "Conception et développement front-end",
          githubUrl: "https://github.com/nizarsn18/gestion-projet"
        }
      ]
    },
    certifications: {
      subtitle: "VALIDATION ACADÉMIQUE DE HAUT RANG",
      title: "Certifications Internationales",
      description: "11 certifications obtenues auprès d'universités prestigieuses et de géants technologiques mondiaux, attestant d'une rigueur d'apprentissage continue.",
      verifyLabel: "Certificat délivré",
      items: [
        {
          id: "cert-1",
          title: "Introduction to Big Data",
          issuer: "University of California San Diego (UC San Diego)",
          date: "Juin 2026",
          domain: "Big Data & Systèmes Distribués"
        },
        {
          id: "cert-2",
          title: "Capstone: Applying Project Management in the Real World",
          issuer: "Google",
          date: "Avril 2026",
          domain: "Gestion de Projet & Pratique"
        },
        {
          id: "cert-3",
          title: "Agile Project Management",
          issuer: "Google",
          date: "Mars 2026",
          domain: "Méthodologie Agile & Scrum"
        },
        {
          id: "cert-4",
          title: "Python for Data Science, AI & Development",
          issuer: "IBM",
          date: "Mars 2026",
          domain: "Data Science, IA & Python"
        },
        {
          id: "cert-5",
          title: "React Native",
          issuer: "Meta",
          date: "Janvier 2026",
          domain: "Développement Mobile Cross-Platform"
        },
        {
          id: "cert-6",
          title: "React Basics",
          issuer: "Meta",
          date: "Janvier 2026",
          domain: "Développement Front-end React"
        },
        {
          id: "cert-7",
          title: "La recherche documentaire",
          issuer: "École Polytechnique (Institut Polytechnique de Paris)",
          date: "Avril 2025",
          domain: "Méthodologie & Recherche Scientifique"
        },
        {
          id: "cert-8",
          title: "Software Engineering: Software Design and Project Management",
          issuer: "The Hong Kong University of Science and Technology (HKUST)",
          date: "Mars 2025",
          domain: "Génie Logiciel & Conception"
        },
        {
          id: "cert-9",
          title: "The Unix Workbench",
          issuer: "Johns Hopkins University",
          date: "Janvier 2025",
          domain: "Systèmes Unix & Ligne de commande"
        },
        {
          id: "cert-10",
          title: "Interactivity with JavaScript",
          issuer: "University of Michigan",
          date: "Décembre 2024",
          domain: "Programmation JavaScript Moderne"
        },
        {
          id: "cert-11",
          title: "Introduction à la programmation orientée objet (en C++)",
          issuer: "EPFL — École Polytechnique Fédérale de Lausanne",
          date: "Décembre 2024",
          domain: "POO & Programmation C++"
        }
      ]
    },
    languages: {
      subtitle: "OUVERTURE INTERNATIONALE",
      title: "Langues",
      description: "Compétences linguistiques permettant une collaboration efficace dans des équipes multiculturelles et des projets internationaux.",
      items: [
        {
          name: "Arabe",
          level: "Langue maternelle / Bilingue",
          scale: 100,
          cefr: "C2",
          badge: "Maternelle",
          details: "Maîtrise parfaite à l'écrit comme à l'oral."
        },
        {
          name: "Français",
          level: "Courant / Bilingue",
          scale: 95,
          cefr: "C1/C2",
          badge: "Langue d'enseignement",
          details: "Excellente expression technique, académique et relationnelle."
        },
        {
          name: "Anglais",
          level: "Professionnel / Technique",
          scale: 85,
          cefr: "B2",
          badge: "Technique",
          details: "Lecture fluide de documentations spécialisées, communication professionnelle."
        },
        {
          name: "Espagnol",
          level: "Intermédiaire / Notions",
          scale: 60,
          cefr: "B1",
          badge: "Intermédiaire",
          details: "Compréhension et échanges courants."
        }
      ]
    },
    contact: {
      subtitle: "ENTRER EN RELATION",
      title: "Contactez-moi",
      description: "Je suis activement à la recherche d'un stage de fin d'études (PFE) d'excellence débutant le 1er Février 2027. Discutons de vos besoins et de la manière dont je peux contribuer à vos projets.",
      infoTitle: "Coordonnées directes",
      emailLabel: "Adresse Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      availabilityLabel: "Disponibilité",
      socialsLabel: "Réseaux professionnels",
      form: {
        nameLabel: "Nom complet",
        namePlaceholder: "ex. Sarah Mansouri",
        emailLabel: "Adresse Email",
        emailPlaceholder: "ex. s.mansouri@entreprise.com",
        subjectLabel: "Sujet",
        subjectPlaceholder: "ex. Proposition Stage PFE 2027",
        messageLabel: "Message",
        messagePlaceholder: "Bonjour Nizar, nous avons examiné votre profil et souhaiterions échanger avec vous concernant...",
        submitBtn: "Envoyer le message",
        sendingBtn: "Transmission en cours...",
        successTitle: "Message transmis avec succès !",
        successDesc: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        errorTitle: "Une erreur s'est produite",
        errorDesc: "Veuillez réessayer ou m'envoyer un email direct à snabinizar2@gmail.com",
        notice: "Le formulaire ouvre également votre client mail avec le message pré-rempli en solution de repli immédiate."
      }
    },
    footer: {
      quote: "L'ingénierie logicielle alliée à la quête constante d'élégance et d'excellence.",
      rights: "Tous droits réservés.",
      designedFor: "Portfolio de Nizar SNABI — Élève Ingénieur Informatique & Réseaux.",
      backToTop: "Retour en haut"
    }
  },
  en: {
    nav: {
      about: "About",
      journey: "Journey",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      languages: "Languages",
      contact: "Contact",
      downloadCv: "Download Resume"
    },
    hero: {
      badge: "Available for Final-Year Internship (PFE) – Feb 2027",
      greeting: "Hello, I am",
      roles: [
        "Full Stack Engineer",
        "Web & Software Developer",
        "Computer Science & Networks Student"
      ],
      tagline: "5th-year engineering student at EMSI Rabat, combining architectural rigor, clean code principles, and modern web mastery to craft high-performance solutions.",
      ctaProjects: "Explore My Projects",
      ctaContact: "Get in Touch",
      scrollDown: "Scroll to explore"
    },
    about: {
      subtitle: "EXCELLENCE & DEDICATION",
      title: "About Me",
      bio1: "Currently in my 5th year of Computer Science & Networks engineering at EMSI Rabat and holder of a specialized degree in Digital Development (Web Full Stack option) from ISTA NTIC Rabat, I bring together strong theoretical foundations and proven hands-on web development experience.",
      bio2: "With 4 completed internships across corporations and public institutions, I have designed reactive user interfaces, built scalable back-end architectures, and structured relational and NoSQL databases.",
      bio3: "Passionate about software innovation, autonomous, and quick to adapt to new environments, I am seeking a high-caliber final-year engineering internship (PFE) starting February 1, 2027, to contribute effectively to ambitious technical endeavors.",
      stats: [
        { value: 4, label: "Internships completed", suffix: "" },
        { value: 11, label: "Global certifications", suffix: "" },
        { value: 4, label: "Spoken languages", suffix: "" },
        { value: 5, label: "Years of higher education", suffix: "th" }
      ],
      highlights: [
        { label: "Elite Training", desc: "EMSI Rabat & ISTA NTIC (Engineering + Full Stack Web)" },
        { label: "Methodology", desc: "Rigorous Agile practices & clean code standards" },
        { label: "Versatility", desc: "Modern Front-end, structured Back-end & Linux Systems" }
      ]
    },
    timeline: {
      subtitle: "ACADEMIC & PROFESSIONAL TRAJECTORY",
      title: "My Journey",
      filterAll: "All",
      filterExp: "Internships",
      filterEdu: "Education",
      items: [
        {
          id: "exp-1",
          type: "experience",
          title: "Intern – IT Asset Management Platform",
          organization: "Direction de l'Irrigation et de l'Aménagement de l'Espace Agricole (DIAEA)",
          location: "Rabat, Morocco",
          period: "Aug 1, 2026 – Sept 1, 2026",
          badge: "Internship",
          description: "Design and deployment of a centralized platform for tracking and managing DIAEA's IT assets and software licenses in real time.",
          highlights: [
            "Hardware inventory and software license traceability",
            "Creation of operational monitoring dashboards",
            "Improved operational visibility on maintenance schedules"
          ],
          tags: ["Web", "Asset Management", "Database", "Full Stack"]
        },
        {
          id: "edu-1",
          type: "education",
          title: "Computer Science & Networks Engineering Degree",
          organization: "EMSI — Moroccan School of Engineering Sciences",
          location: "Rabat, Morocco",
          period: "2025 – Present (5th Year)",
          badge: "In Progress",
          description: "High-level state engineering program: software design patterns, distributed networks, cybersecurity, and agile project management.",
          highlights: [
            "Advanced software engineering & object design",
            "Network infrastructure, distributed systems & security",
            "Project management & Agile execution"
          ],
          tags: ["Engineering", "Software Architecture", "Networks", "Agile"]
        },
        {
          id: "exp-2",
          type: "experience",
          title: "Intern – HR Attestation Management System",
          organization: "Ministry of Equipment, Transport, Logistics and Water",
          location: "Rabat, Morocco",
          period: "July 14, 2025 – Aug 14, 2025",
          badge: "Internship",
          description: "Development of a digital workflow application for requesting, verifying, and generating employment and salary certificates for administrative staff.",
          highlights: [
            "End-to-end automation of request submission and managerial approval",
            "Standardized digital document generation",
            "Substantial decrease in administrative turnaround times"
          ],
          tags: ["Full Stack", "HR System", "Automation", "SQL"]
        },
        {
          id: "edu-2",
          type: "education",
          title: "Specialized Degree in Digital Development (Web Full Stack)",
          organization: "ISTA NTIC Rabat",
          location: "Rabat, Morocco",
          period: "2024",
          badge: "Graduated",
          description: "Comprehensive technical training focused on contemporary web stacks: reactive client-side interfaces, server-side APIs, and database modeling.",
          highlights: [
            "Full Stack Web specialization: modern Front-end & Back-end",
            "Relational database design and SQL query optimization",
            "Real-world application delivery under production constraints"
          ],
          tags: ["Web Full Stack", "React", "PHP/Laravel", "SQL"]
        },
        {
          id: "exp-3",
          type: "experience",
          title: "Web Developer & Database Intern",
          organization: "Noble Service",
          location: "Rabat / Regional Area",
          period: "April 2024 – June 2024",
          badge: "Internship",
          description: "Active contribution to multiple web development projects within the construction and building industry: interactive interfaces and tailored backend databases.",
          highlights: [
            "Dynamic front-end component implementation",
            "Database schema structuring and integration",
            "Interactive project showcases and service catalogs"
          ],
          tags: ["Front-end", "Back-end", "Construction", "Databases"]
        },
        {
          id: "exp-4",
          type: "experience",
          title: "Web Developer & Database Intern",
          organization: "Regional Directorate of Equipment, Transport & Logistics (DRETL)",
          location: "Rabat-Salé-Kénitra Region",
          period: "April 2023 – June 2023",
          badge: "Internship",
          description: "Development of a staff leave management portal: intuitive employee portal and robust SQL database for tracking and managing vacation balances.",
          highlights: [
            "Ergonomic web interface for automated leave requests",
            "Real-time tracking of employee entitlement balances",
            "Multi-tier hierarchical approval workflow"
          ],
          tags: ["Leave Management", "Web", "SQL", "Employee Portal"]
        },
        {
          id: "edu-3",
          type: "education",
          title: "Baccalaureate in Physical & Chemical Sciences",
          organization: "Bir Kacem Assabil High School",
          location: "Rabat Region",
          period: "2021",
          badge: "Completed",
          description: "Rigorous scientific foundation developing analytical thinking, scientific modeling, and mathematical discipline.",
          highlights: [
            "Strong foundation in applied mathematics and physics",
            "Analytical reasoning geared toward higher engineering studies"
          ],
          tags: ["Sciences", "Physics & Chemistry", "Mathematics"]
        }
      ]
    },
    skills: {
      subtitle: "TECHNICAL MASTERY & ARCHITECTURE",
      title: "Core Competencies",
      description: "A balanced skill set across reactive web interfaces, modular back-end architectures, robust persistence, and agile teamwork.",
      marqueeTitle: "Technology Ecosystem",
      categories: [
        {
          title: "Front-end Development",
          icon: "Layout",
          skills: [
            { name: "React", level: 90, note: "Components, hooks, state management, SPA" },
            { name: "JavaScript", level: 92, note: "ES6+, async logic, DOM manipulation" },
            { name: "HTML & CSS", level: 95, note: "Semantics, responsive layouts, Flexbox/Grid" }
          ]
        },
        {
          title: "Back-end Development",
          icon: "Server",
          skills: [
            { name: "PHP (Laravel)", level: 88, note: "MVC pattern, Eloquent ORM, REST API, routing" }
          ]
        },
        {
          title: "Programming",
          icon: "Code",
          skills: [
            { name: "C++", level: 85, note: "OOP, memory allocation, data structures" }
          ]
        },
        {
          title: "Databases",
          icon: "Database",
          skills: [
            { name: "SQL", level: 90, note: "Relational modeling, indexing, complex queries" },
            { name: "MongoDB", level: 82, note: "NoSQL document stores, aggregation pipelines" }
          ]
        },
        {
          title: "Project Management",
          icon: "Layers",
          skills: [
            { name: "Agile Methodology", level: 90, note: "Scrum, sprint cycles, user stories, milestone tracking" }
          ]
        },
        {
          title: "Systems & Environments",
          icon: "Terminal",
          skills: [
            { name: "Linux", level: 86, note: "Bash shell, permissions, system administration, scripting" }
          ]
        }
      ],
      technologies: [
        { name: "React", category: "Front-end" },
        { name: "JavaScript", category: "Language" },
        { name: "PHP", category: "Back-end" },
        { name: "Laravel", category: "Framework" },
        { name: "C++", category: "Language" },
        { name: "SQL", category: "Database" },
        { name: "MongoDB", category: "NoSQL" },
        { name: "HTML5", category: "Front-end" },
        { name: "CSS3", category: "Styling" },
        { name: "Linux", category: "OS" },
        { name: "Agile / Scrum", category: "Methodology" },
        { name: "Git", category: "Version Control" }
      ]
    },
    projects: {
      subtitle: "PERSONAL PROJECTS & SELECTED ACCOMPLISHMENTS",
      title: "Featured Projects",
      filterAll: "All Projects",
      categories: ["Tous", "Gestion Interne", "Full Stack", "Web BTP"],
      viewDetails: "View Details",
      closeModal: "Close",
      demoBtn: "Live Demo [Placeholder]",
      githubBtn: "Source Code",
      noticePlaceholder: "Visit the GitHub repository to explore the project's source code.",
      items: [
        {
          id: "proj-diaea",
          title: "IT Asset Tracking & Management Platform",
          context: "Direction of Irrigation and Agricultural Land Development (DIAEA)",
          category: "Gestion Interne",
          period: "August – September 2026",
          summary: "Centralized web platform for inventory tracking, hardware allocation, and operational life cycle monitoring of institutional equipment.",
          description: "Engineered during my internship at DIAEA to overcome fragmented asset records. The solution delivers full transparency on equipment status, departmental assignments, and scheduled maintenance.",
          features: [
            "Exhaustive hardware and software license inventory tracking",
            "Departmental and employee asset assignment records",
            "Real-time operational dashboard with status notifications",
            "Complete maintenance log and warranty tracking"
          ],
          technologies: ["PHP / Laravel", "SQL", "JavaScript", "HTML / CSS", "Agile"],
          role: "Developer Intern — Architecture & Full Implementation",
          demoUrl: "https://demo.example.com/diaea-parc", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/diaea-parc-informatique" // [PLACEHOLDER]
        },
        {
          id: "proj-ministere",
          title: "HR Attestation Workflow & Management System",
          context: "Ministry of Equipment, Transport, Logistics and Water",
          category: "Gestion Interne",
          period: "July – August 2025",
          summary: "Dedicated enterprise web application for the digital issuance and approval of official employment and salary certificates.",
          description: "Created within the Ministry to streamline internal administrative workflows. It empowers civil servants to request certificates online while HR teams validate and generate official records securely.",
          features: [
            "Staff portal for submitting and tracking certificate requests",
            "Hierarchical validation circuit with real-time status updates",
            "Automated generation of standardized official PDF documents",
            "Role-based access control and tamper-evident audit logs"
          ],
          technologies: ["Web Full Stack", "SQL", "PHP", "JavaScript", "Linux"],
          role: "Developer Intern — Database Design & Full Stack Engineering",
          demoUrl: "https://demo.example.com/ministere-attestations", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/ministere-attestations-rh" // [PLACEHOLDER]
        },
        {
          id: "proj-dretl",
          title: "Staff Leave Management & Planning System",
          context: "Regional Directorate of Equipment, Transport & Logistics (DRETL)",
          category: "Gestion Interne",
          period: "April – June 2023",
          summary: "User-friendly web platform and robust relational database for automated staff vacation accrual, requests, and manager approvals.",
          description: "Developed to phase out manual paper forms. The application calculates remaining allowances automatically across leave types and provides immediate visibility into department team schedules.",
          features: [
            "Real-time calculation and updates of remaining leave quotas",
            "Interactive calendar overview of departmental absence schedules",
            "Two-tier approval hierarchy (line manager and division head)",
            "Auditable archive and exportable attendance reports"
          ],
          technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
          role: "Web & Database Intern — End-to-End Delivery",
          demoUrl: "https://demo.example.com/dretl-conges", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/dretl-gestion-conges" // [PLACEHOLDER]
        },
        {
          id: "proj-noble",
          title: "Construction Showcase Web Platforms",
          context: "Noble Service",
          category: "Web BTP",
          period: "April – June 2024",
          summary: "Front-end and back-end creation of dynamic web portals highlighting building and construction projects with customized database backends.",
          description: "Built at Noble Service to elevate client portfolios. Combines polished, responsive user interfaces with dynamic galleries and an administrative backend for catalog updates.",
          features: [
            "Tailored responsive layouts matching construction industry standards",
            "Robust relational database structuring for building projects",
            "Integrated client inquiry and quote estimation forms",
            "Optimized media delivery for high-resolution project photography"
          ],
          technologies: ["React", "JavaScript", "PHP", "Relational Databases", "Modern CSS"],
          role: "Web & Database Developer Intern",
          demoUrl: "https://demo.example.com/noble-construction", // [PLACEHOLDER]
          githubUrl: "https://github.com/nizarsn18/noble-construction-web" // [PLACEHOLDER]
        },
        {
          id: "personal-cafe-socco",
          title: "Café Socco — Showcase & Reservation Website",
          context: "Personal project",
          category: "Personal Project",
          summary: "Website for a cultural oriental café, featuring venue information, a menu, reservations, and contact.",
          description: "A polished website presenting Café Socco's cultural identity and making it easier for visitors to explore the menu and request reservations. The repository includes the site's assets and a presentation video.",
          features: [
            "Introduction to the café and its cultural identity",
            "Menu with category-based navigation",
            "Reservation and contact forms",
            "Responsive interface with animations and 3D elements"
          ],
          technologies: ["HTML5", "CSS3", "JavaScript", "Three.js"],
          role: "Web design and development",
          githubUrl: "https://github.com/nizarsn18/cafe-socco"
        },
        {
          id: "personal-my-projet",
          title: "Online Store & Product Management",
          context: "Personal project",
          category: "Personal Project",
          summary: "E-commerce application with a product catalog, categories, product details, and an admin area.",
          description: "A web application built around a product catalog, with detail pages, a contact form, and an administration interface. The project combines a React interface with an Express API and a MySQL database.",
          features: [
            "Product catalog with category filtering",
            "Product detail pages",
            "Admin area and authentication",
            "Express API connected to a MySQL database"
          ],
          technologies: ["React", "Node.js", "Express", "MySQL", "Axios"],
          role: "Full-stack design and development",
          githubUrl: "https://github.com/nizarsn18/my-projet"
        },
        {
          id: "personal-gestion-projet",
          title: "Project Management Revision — Exam Preparation",
          context: "Personal project",
          category: "Personal Project",
          summary: "Revision page covering key project management concepts and exam preparation exercises.",
          description: "A single-page study resource covering requirements specifications, WBS decomposition, project monitoring, and PERT and GANTT methods, with multiple-choice exercises.",
          features: [
            "Review of requirements specifications and WBS",
            "Project monitoring concepts and indicators",
            "Exercises on PERT and GANTT methods",
            "Multiple-choice revision questions"
          ],
          technologies: ["HTML5", "CSS3"],
          role: "Front-end design and development",
          githubUrl: "https://github.com/nizarsn18/gestion-projet"
        }
      ]
    },
    certifications: {
      subtitle: "HIGH-RANKING ACADEMIC & INDUSTRY RECOGNITION",
      title: "Global Certifications",
      description: "11 verified certifications earned from leading world universities and tech giants, reflecting a steadfast commitment to lifelong learning.",
      verifyLabel: "Credential verified",
      items: [
        {
          id: "cert-1",
          title: "Introduction to Big Data",
          issuer: "University of California San Diego (UC San Diego)",
          date: "June 2026",
          domain: "Big Data & Distributed Systems"
        },
        {
          id: "cert-2",
          title: "Capstone: Applying Project Management in the Real World",
          issuer: "Google",
          date: "April 2026",
          domain: "Project Management Practice"
        },
        {
          id: "cert-3",
          title: "Agile Project Management",
          issuer: "Google",
          date: "March 2026",
          domain: "Agile Frameworks & Scrum"
        },
        {
          id: "cert-4",
          title: "Python for Data Science, AI & Development",
          issuer: "IBM",
          date: "March 2026",
          domain: "Data Science, AI & Python"
        },
        {
          id: "cert-5",
          title: "React Native",
          issuer: "Meta",
          date: "January 2026",
          domain: "Cross-Platform Mobile Apps"
        },
        {
          id: "cert-6",
          title: "React Basics",
          issuer: "Meta",
          date: "January 2026",
          domain: "React Client-Side Development"
        },
        {
          id: "cert-7",
          title: "Documentary Research Methodology",
          issuer: "École Polytechnique (Institut Polytechnique de Paris)",
          date: "April 2025",
          domain: "Scientific Research & Method"
        },
        {
          id: "cert-8",
          title: "Software Engineering: Software Design and Project Management",
          issuer: "The Hong Kong University of Science and Technology (HKUST)",
          date: "March 2025",
          domain: "Software Architecture & Design"
        },
        {
          id: "cert-9",
          title: "The Unix Workbench",
          issuer: "Johns Hopkins University",
          date: "January 2025",
          domain: "Unix Systems & CLI"
        },
        {
          id: "cert-10",
          title: "Interactivity with JavaScript",
          issuer: "University of Michigan",
          date: "December 2024",
          domain: "Modern JavaScript Interactivity"
        },
        {
          id: "cert-11",
          title: "Introduction to Object-Oriented Programming (in C++)",
          issuer: "EPFL — École Polytechnique Fédérale de Lausanne",
          date: "December 2024",
          domain: "OOP & C++ Fundamentals"
        }
      ]
    },
    languages: {
      subtitle: "GLOBAL COMMUNICATION",
      title: "Languages",
      description: "Strong multilingual communication enabling smooth collaboration within cross-cultural and international teams.",
      items: [
        {
          name: "Arabic",
          level: "Native / Bilingual",
          scale: 100,
          cefr: "C2",
          badge: "Native",
          details: "Mastery in both spoken and written communication."
        },
        {
          name: "French",
          level: "Fluent / Bilingual",
          scale: 95,
          cefr: "C1/C2",
          badge: "Academic & Tech",
          details: "Language of higher education, technical and professional fluency."
        },
        {
          name: "English",
          level: "Professional / Technical",
          scale: 85,
          cefr: "B2",
          badge: "Professional",
          details: "Comfortable with technical documentation, meetings, and collaboration."
        },
        {
          name: "Spanish",
          level: "Intermediate / Working knowledge",
          scale: 60,
          cefr: "B1",
          badge: "Intermediate",
          details: "Everyday conversational comprehension and exchange."
        }
      ]
    },
    contact: {
      subtitle: "GET IN TOUCH",
      title: "Contact Me",
      description: "I am actively seeking a high-value final-year engineering internship (PFE) starting February 1, 2027. Let's discuss how my skills and energy can contribute to your team.",
      infoTitle: "Direct Inquiries",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locationLabel: "Location",
      availabilityLabel: "Availability",
      socialsLabel: "Professional Networks",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "e.g. Sarah Jenkins",
        emailLabel: "Email Address",
        emailPlaceholder: "e.g. s.jenkins@company.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "e.g. 2027 PFE Internship Opportunity",
        messageLabel: "Message",
        messagePlaceholder: "Hello Nizar, we reviewed your portfolio and would love to schedule a discussion...",
        submitBtn: "Send Message",
        sendingBtn: "Transmitting...",
        successTitle: "Message Delivered Successfully!",
        successDesc: "Thank you for reaching out. I will get back to you promptly.",
        errorTitle: "Something went wrong",
        errorDesc: "Please try again or email me directly at snabinizar2@gmail.com",
        notice: "The form also pre-fills your default mail client as an instant fallback."
      }
    },
    footer: {
      quote: "Software engineering paired with a relentless pursuit of elegance and precision.",
      rights: "All rights reserved.",
      designedFor: "Portfolio of Nizar SNABI — Computer Science & Networks Student.",
      backToTop: "Back to top"
    }
  }
};
