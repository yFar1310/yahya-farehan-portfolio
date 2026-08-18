import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Yahya Farehan",
    location: "France",
    // No email or phone number is exposed here to avoid scraping.
    // LinkedIn and GitHub are the contact channels for this portfolio.
    github: "https://github.com/yFar1310",
    linkedin: "https://www.linkedin.com/in/yahya-farehan-534427282",
  },
  navItems: [
    { id: "hero", label: { fr: "Accueil", en: "Home" } },
    { id: "about", label: { fr: "Profil", en: "About" } },
    { id: "experience", label: { fr: "Expérience", en: "Experience" } },
    { id: "projects", label: { fr: "Projets", en: "Projects" } },
    { id: "skills", label: { fr: "Compétences", en: "Skills" } },
    { id: "education", label: { fr: "Formation", en: "Education" } },
    { id: "contact", label: { fr: "Contact", en: "Contact" } },
  ],
  hero: {
    title: {
      fr: "Apprenti Project Manager | Pilotage de projets digitaux",
      en: "Project Manager Apprentice | Digital Project Delivery",
    },
    intro: {
      fr: "Je pilote des projets digitaux pour des clients grands comptes, en assurant la coordination entre équipes techniques, produit et métier, du cadrage à la livraison.",
      en: "I lead digital projects for major accounts, coordinating technical, product, and business teams from scoping through delivery.",
    },
    badge: {
      fr: "ENSIIE x WebTales",
      en: "ENSIIE x WebTales",
    },
    primaryCta: {
      fr: "Voir les projets",
      en: "View Projects",
    },
    secondaryCta: {
      fr: "Me contacter",
      en: "Contact Me",
    },
    githubCta: {
      fr: "GitHub",
      en: "GitHub",
    },
    linkedInCta: {
      fr: "LinkedIn",
      en: "LinkedIn",
    },
    visualTitle: {
      fr: "Axes de pilotage",
      en: "Delivery Focus",
    },
    visualSubtitle: {
      fr: "Coordination multi-projets, relation client et delivery fiable.",
      en: "Multi-project coordination, client relationship, and reliable delivery.",
    },
    visualBullets: {
      fr: [
        "Pilotage multi-projets",
        "Coordination clients & équipes techniques",
        "Delivery & gestion des risques",
      ],
      en: [
        "Multi-project delivery",
        "Client & technical team coordination",
        "Risk management & reliability",
      ],
    },
  },
  about: {
    heading: {
      fr: "Profil",
      en: "Profile",
    },
    lead: {
      fr: "Étudiant ingénieur à l'ENSIIE et apprenti Project Manager chez WebTales, je pilote plusieurs projets digitaux pour le compte du client UCPA, en assurant la coordination entre les équipes techniques et les parties prenantes métier.",
      en: "As an ENSIIE engineering student and apprentice Project Manager at WebTales, I lead multiple digital projects for client UCPA, coordinating technical teams and business stakeholders.",
    },
    paragraphOne: {
      fr: "Mon rôle couvre le pilotage de projets, la coordination des équipes techniques et produit, le suivi des livrables et la relation avec les parties prenantes. Mon parcours d'ingénieur me permet de dialoguer efficacement avec les équipes de développement et de comprendre les enjeux techniques des projets que je pilote.",
      en: "My role covers project management, coordination across technical and product teams, delivery tracking, and stakeholder relationships. My engineering background lets me communicate effectively with development teams and understand the technical stakes of the projects I lead.",
    },
    paragraphTwo: {
      fr: "J'ai également effectué une mobilité internationale de deux mois chez WebTales Portugal, à Leiria, en tant que Technical Project Manager (TPM). Cette expérience m'a permis de collaborer et de manager des développeurs en présentiel, ce qui a renforcé mes soft skills : communication interculturelle, leadership de proximité et adaptabilité.",
      en: "I also completed a two-month international mobility at WebTales Portugal, in Leiria, as a Technical Project Manager (TPM). This experience let me collaborate with and manage developers in person, strengthening soft skills such as cross-cultural communication, hands-on leadership, and adaptability.",
    },
    humanLanguages: {
      fr: [
        "Arabe (natif)",
        "Français (professionnel)",
        "Anglais (professionnel)",
        "Portugais (niveau débutant)",
      ],
      en: [
        "Arabic (native)",
        "French (professional)",
        "English (professional)",
        "Portuguese (basic)",
      ],
    },
  },
  experience: {
    heading: {
      fr: "Expérience professionnelle",
      en: "Professional Experience",
    },
    items: [
      {
        company: "WebTales",
        role: {
          fr: "Apprenti Project Manager",
          en: "Project Manager Apprentice",
        },
        period: {
          fr: "Sep 2024 - Aujourd'hui",
          en: "Sep 2024 - Present",
        },
        location: {
          fr: "France",
          en: "France",
        },
        summary: {
          fr: "Pilotage de plusieurs projets digitaux pour le compte du client UCPA, en coordination avec les équipes techniques, produit et métier, du cadrage à la livraison.",
          en: "Leading multiple digital projects for client UCPA, coordinating technical, product, and business teams from scoping through delivery.",
        },
        bullets: {
          fr: [
            "Pilotage du projet SpeedBoat (SB), dédié aux séjours vacances, de la planification au suivi de la livraison.",
            "Coordination des projets Alpha (Loisirs) et Pégase (équitation), avec suivi des priorités et des jalons.",
            "Pilotage du projet Talent, l'outil interne de gestion des candidatures, essentiel pour le recrutement des postes saisonniers (moniteurs de ski, surf, etc.).",
          ],
          en: [
            "Leading the SpeedBoat (SB) project, dedicated to vacation stays, from planning through delivery tracking.",
            "Coordinating the Alpha (Leisure) and Pégase (Equestrian) projects, tracking priorities and milestones.",
            "Leading the Talent project, the internal recruitment tool, key to hiring seasonal staff (ski instructors, surf instructors, etc.).",
          ],
        },
        tech: [
          "Project Management",
          "Multi-Project Delivery",
          "Client Coordination (UCPA)",
          "Stakeholder Management",
          "Recruitment Tooling",
        ],
      },
      {
        company: "WebTales Portugal",
        role: {
          fr: "Technical Project Manager (TPM) - Mobilité internationale",
          en: "Technical Project Manager (TPM) - International Mobility",
        },
        period: {
          fr: "2 mois",
          en: "2 months",
        },
        location: {
          fr: "Leiria, Portugal",
          en: "Leiria, Portugal",
        },
        tag: {
          fr: "Mobilité internationale",
          en: "International Mobility",
        },
        summary: {
          fr: "Mission de 2 mois à Leiria en tant que Technical Project Manager, avec management d'équipe de développeurs en présentiel dans un contexte international.",
          en: "2-month assignment in Leiria as Technical Project Manager, managing a team of developers in person in an international context.",
        },
        bullets: {
          fr: [
            "Collaboration et management d'une équipe de développeurs en présentiel, avec suivi quotidien de l'avancement.",
            "Renforcement des soft skills : communication interculturelle, leadership de proximité et adaptabilité.",
            "Coordination technique et fonctionnelle entre les équipes locales et les parties prenantes à distance.",
          ],
          en: [
            "Collaborated with and managed a team of developers in person, with daily progress tracking.",
            "Strengthened soft skills: cross-cultural communication, hands-on leadership, and adaptability.",
            "Coordinated technical and functional work between local teams and remote stakeholders.",
          ],
        },
        tech: [
          "Technical Project Management",
          "Team Leadership",
          "Cross-Cultural Communication",
          "On-Site Coordination",
        ],
      },
    ],
  },
  projects: {
    heading: {
      fr: "Projets sélectionnés",
      en: "Featured Projects",
    },
    items: [
      {
        title: "Derichebourg Website Migration",
        status: {
          fr: "Projet professionnel - WebTales",
          en: "Professional Project - WebTales",
        },
        summary: {
          fr: "Migration d'un site corporate public de Rubedo/Angular vers Astro avec conservation des comportements critiques en production.",
          en: "Migration of a large public-facing corporate website from Rubedo/Angular to Astro while preserving critical production behavior.",
        },
        bullets: {
          fr: [
            "Reconstruction de blocs dynamiques, du routage et de la navigation multilingue sur un volume élevé de pages.",
            "Mise en place d'expériences de recherche, de pages riches en médias et de composants réutilisables transverses.",
            "Travail sur la génération statique pilotée par sitemap et le rendu détaillé des contenus.",
          ],
          en: [
            "Rebuilt dynamic blocks, routing behavior, and multilingual navigation across a large page surface.",
            "Implemented search experiences, media-heavy pages, and reusable components used across multiple templates.",
            "Worked on sitemap-driven static generation and detailed content rendering.",
          ],
        },
        details: {
          context: {
            fr: "Projet de migration à forte visibilité sur un site corporate public avec exigences SEO, contenus multilingues et parité de comportement avec l'existant.",
            en: "High-visibility migration project on a public corporate website with SEO constraints, multilingual content, and strict behavior parity requirements.",
          },
          contributions: {
            fr: [
              "Refonte des composants dynamiques pour remplacer la logique Rubedo/Angular par une base Astro maintenable.",
              "Consolidation des patterns de navigation multilingue et du rendu de pages détail pour différents types de contenu.",
              "Stabilisation des comportements UI critiques pour garantir une transition progressive vers la nouvelle stack.",
            ],
            en: [
              "Rebuilt dynamic components to replace Rubedo/Angular logic with a maintainable Astro foundation.",
              "Consolidated multilingual navigation patterns and detail-page rendering across content types.",
              "Stabilized critical UI behaviors to support a progressive and low-risk stack transition.",
            ],
          },
          architecture: {
            fr: [
              "Génération statique pilotée par sitemap pour maintenir la couverture SEO et la performance de chargement.",
              "Composants réutilisables partagés entre pages institutionnelles, médias et expériences de recherche.",
              "Approche hybride SSG/SSR selon les contraintes de contenu, de routage et de personnalisation.",
            ],
            en: [
              "Sitemap-driven static generation to preserve SEO coverage and loading performance.",
              "Reusable components shared across institutional pages, media pages, and search experiences.",
              "Hybrid SSG/SSR strategy based on content, routing, and personalization constraints.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Maintenabilité front-end à long terme.",
              "Parité fonctionnelle avec la production.",
              "Cohésion UX sur un périmètre multi-pages.",
            ],
            en: [
              "Long-term front-end maintainability.",
              "Production behavior parity.",
              "UX consistency across a large multi-page surface.",
            ],
          },
        },
        tech: [
          "Astro",
          "TypeScript",
          "SSG/SSR",
          "CMS Migration",
          "Multilingual",
          "Search UX",
        ],
      },
      {
        title: "TestPilot",
        status: {
          fr: "Projet d'automatisation",
          en: "Automation Project",
        },
        summary: {
          fr: "Suite de régression web avec Playwright pour automatiser des contrôles end-to-end récurrents et fiabiliser les livraisons.",
          en: "Website regression testing suite with Playwright to automate recurring end-to-end checks and improve release confidence.",
        },
        bullets: {
          fr: [
            "Automatisation de scénarios critiques pour détecter les régressions front-end dès les premières itérations.",
            "Approche orientée fiabilité de delivery avec exécutions récurrentes et logique de planification.",
            "Base solide pour étendre la couverture QA sur différents environnements.",
          ],
          en: [
            "Automates critical user flows to catch front-end breakages early in the delivery cycle.",
            "Designed for recurring execution with scheduling ideas that improve release confidence.",
            "Provides a scalable foundation for wider QA automation coverage across environments.",
          ],
        },
        details: {
          context: {
            fr: "Projet d'automatisation QA pour réduire le risque de régression sur des interfaces web évolutives et accélérer la validation avant livraison.",
            en: "QA automation project designed to reduce regression risk on evolving web interfaces and speed up pre-release validation.",
          },
          contributions: {
            fr: [
              "Définition d'un socle de scénarios E2E couvrant les parcours les plus sensibles côté utilisateur.",
              "Structuration des tests pour faciliter la maintenance et l'extension à de nouveaux modules.",
              "Préparation d'une exécution récurrente pour intégrer les contrôles à la routine de delivery.",
            ],
            en: [
              "Defined an E2E baseline covering the most critical user-facing flows.",
              "Structured tests for maintainability and smooth extension to additional modules.",
              "Prepared recurring execution patterns to integrate checks into regular delivery workflows.",
            ],
          },
          architecture: {
            fr: [
              "Playwright comme moteur d'orchestration des tests navigateurs et des assertions UI.",
              "Organisation orientée suites fonctionnelles pour isoler rapidement les défaillances.",
              "Base compatible avec une intégration CI pour exécution planifiée et alerting.",
            ],
            en: [
              "Playwright used as the browser orchestration and UI assertion engine.",
              "Functional suite organization to isolate failures quickly.",
              "Foundation compatible with CI integration for scheduled execution and alerting.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Détection précoce des régressions front-end.",
              "Confiance de release en environnement évolutif.",
              "Scalabilité de la couverture QA.",
            ],
            en: [
              "Early front-end regression detection.",
              "Release confidence in fast-changing environments.",
              "Scalable QA coverage growth.",
            ],
          },
        },
        tech: ["Playwright", "TypeScript", "QA Automation", "E2E"],
      },
      {
        title: "DAM Platform",
        status: {
          fr: "Projet professionnel - Produit",
          en: "Professional Product Project",
        },
        summary: {
          fr: "Plateforme de Digital Asset Management orientée micro-frontend et microservices pour la gestion sécurisée d'actifs.",
          en: "Digital Asset Management platform designed with a micro-frontend and microservice-oriented architecture for secure asset workflows.",
        },
        bullets: {
          fr: [
            "Développement de flux d'upload sécurisés, de récupération authentifiée et de gestion de métadonnées.",
            "Conception de services front-end et back-end pour le contrôle d'accès, le traitement d'actifs et le stockage cloud.",
            "Architecture cloud pragmatique avec séparation claire des responsabilités techniques.",
          ],
          en: [
            "Implemented secure uploads, authenticated retrieval, and metadata handling flows.",
            "Built front-end and backend services for access control, asset processing, and cloud storage orchestration.",
            "Applied a pragmatic cloud architecture with clear service responsibility boundaries.",
          ],
        },
        details: {
          context: {
            fr: "Projet de plateforme DAM pour centraliser des actifs numériques avec des exigences fortes de sécurité, de traçabilité et de gestion des accès.",
            en: "DAM platform project to centralize digital assets with strong security, traceability, and access-control requirements.",
          },
          contributions: {
            fr: [
              "Implémentation des parcours d'upload sécurisé et de consultation authentifiée des actifs.",
              "Conception de services applicatifs dédiés au contrôle d'accès, au traitement et à la distribution des médias.",
              "Contribution front-end et back-end pour garantir cohérence produit et robustesse technique.",
            ],
            en: [
              "Implemented secure upload flows and authenticated asset retrieval.",
              "Designed application services for access control, media processing, and distribution.",
              "Contributed on both front-end and backend sides to ensure product consistency and technical robustness.",
            ],
          },
          architecture: {
            fr: [
              "Architecture micro-frontend et microservices pour séparer clairement les responsabilités.",
              "Workflows cloud autour de Cloudflare Workers et R2 pour la gestion des fichiers.",
              "Gestion des identités et sessions avec Clerk pour sécuriser les interactions utilisateur.",
            ],
            en: [
              "Micro-frontend and microservice-oriented architecture with clear responsibility boundaries.",
              "Cloud workflows built around Cloudflare Workers and R2 for file handling.",
              "Identity and session management with Clerk for secure user interactions.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Sécurisation des flux d'actifs.",
              "Modularité des services.",
              "Lisibilité opérationnelle des workflows médias.",
            ],
            en: [
              "Asset-flow security.",
              "Service modularity.",
              "Operational clarity across media workflows.",
            ],
          },
        },
        tech: [
          "Vue.js",
          "Cloudflare Workers",
          "Clerk",
          "R2",
          "SQLite",
          "Microservices",
        ],
      },
      {
        title: "PlanWatch",
        status: {
          fr: "Projet école / personnel",
          en: "School / Personal Project",
        },
        summary: {
          fr: "Plateforme full-stack de planification et de suivi de tâches avec visualisation de dépendances et architecture monorepo.",
          en: "Full-stack planning and task tracking platform with dependency visualization and a monorepo architecture.",
        },
        bullets: {
          fr: [
            "Authentification JWT, dashboards, journal d'activité et export PDF pour le pilotage projet.",
            "Visualisation des dépendances via un graphe PERT pour mieux anticiper les blocages.",
            "Backend Hono + PostgreSQL, journalisation des événements avec MongoDB et setup local Docker.",
          ],
          en: [
            "Built JWT authentication, dashboards, activity logging, and PDF exports for project execution visibility.",
            "Implemented a PERT graph to visualize dependencies and highlight delivery risks.",
            "Used a Hono backend with PostgreSQL, MongoDB event logging, and a Docker-based local setup.",
          ],
        },
        details: {
          context: {
            fr: "Projet full-stack de planification pour structurer la coordination des tâches, le suivi des dépendances et la visibilité d'exécution.",
            en: "Full-stack planning platform project focused on task coordination, dependency tracking, and execution visibility.",
          },
          contributions: {
            fr: [
              "Développement du socle applicatif avec authentification JWT, dashboards et suivi d'activités.",
              "Conception de modules de visualisation (graphe PERT) et d'export PDF pour la communication projet.",
              "Mise en place d'une architecture monorepo avec environnement local dockerisé.",
            ],
            en: [
              "Built the application core with JWT authentication, dashboards, and activity tracking.",
              "Designed visualization modules (PERT graph) and PDF export capabilities for project communication.",
              "Set up a monorepo architecture with a Dockerized local development environment.",
            ],
          },
          architecture: {
            fr: [
              "Front-end Vue 3 + Vite + Tailwind pour une interface réactive et maintenable.",
              "API Hono pour la couche métier et PostgreSQL pour les données applicatives.",
              "MongoDB dédié à la journalisation d'événements pour séparer suivi et données cœur.",
            ],
            en: [
              "Vue 3 + Vite + Tailwind front-end stack for a reactive and maintainable interface.",
              "Hono API for business logic and PostgreSQL for core application data.",
              "MongoDB dedicated to event logging to separate observability from core domain data.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Structuration d'un produit full-stack complet.",
              "Visualisation de dépendances pour la décision projet.",
              "Qualité d'expérience développeur via monorepo et Docker.",
            ],
            en: [
              "End-to-end full-stack product structuring.",
              "Dependency visualization for project decision-making.",
              "Strong developer experience through monorepo and Docker.",
            ],
          },
        },
        tech: [
          "Vue 3",
          "Vite",
          "Tailwind",
          "Hono",
          "PostgreSQL",
          "MongoDB",
          "Docker",
        ],
        github: "https://github.com/yFar1310/PlanWatch",
      },
      {
        title: "Insurance Claims E2E",
        status: {
          fr: "Projet école",
          en: "School Project",
        },
        summary: {
          fr: "Workflow end-to-end de gestion de sinistres avec orchestration BPMN et intégration multi-protocoles.",
          en: "End-to-end insurance claim workflow with BPMN orchestration and multi-protocol integration.",
        },
        bullets: {
          fr: [
            "Orchestration Flowable BPMN couvrant soumission de dossier, vérification d'identité et validation de police.",
            "Intégration de contrôles anti-fraude, autorisation de paiement et scénarios de démo reproductibles.",
            "Exposition de services REST, SOAP, GraphQL et gRPC avec documentation OpenAPI.",
          ],
          en: [
            "Designed a Flowable BPMN process for claim submission, identity verification, and policy validation.",
            "Integrated fraud checks, payment authorization, and reproducible demo scenarios.",
            "Connected REST, SOAP, GraphQL, and gRPC services with OpenAPI documentation.",
          ],
        },
        details: {
          context: {
            fr: "Projet d'orchestration de workflow de sinistres visant à démontrer une chaîne complète, de la soumission à l'autorisation de paiement.",
            en: "Insurance workflow orchestration project demonstrating an end-to-end chain from claim submission to payment authorization.",
          },
          contributions: {
            fr: [
              "Modélisation du processus BPMN avec Flowable pour aligner les étapes métier et les intégrations techniques.",
              "Conception de scénarios de démo reproductibles pour illustrer les cas nominal, contrôles et exceptions.",
              "Connexion de services hétérogènes pour couvrir plusieurs paradigmes d'intégration API.",
            ],
            en: [
              "Modeled the BPMN process with Flowable to align business steps with technical integrations.",
              "Built reproducible demo scenarios to showcase nominal flows, controls, and exception paths.",
              "Connected heterogeneous services across multiple API integration paradigms.",
            ],
          },
          architecture: {
            fr: [
              "Coordination de services REST, SOAP, GraphQL et gRPC dans un même flux métier.",
              "Documentation OpenAPI pour faciliter la lisibilité des points d'entrée et des contrats.",
              "Séparation claire entre orchestration, vérification de données et services de décision.",
            ],
            en: [
              "Orchestrated REST, SOAP, GraphQL, and gRPC services within a single business flow.",
              "Used OpenAPI documentation to improve endpoint and contract clarity.",
              "Maintained clear separation between orchestration, data checks, and decision services.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Interopérabilité entre protocoles API.",
              "Fiabilité d'un workflow de bout en bout.",
              "Capacité de démonstration technique reproductible.",
            ],
            en: [
              "API protocol interoperability.",
              "End-to-end workflow reliability.",
              "Reproducible technical demonstration quality.",
            ],
          },
        },
        tech: [
          "Flowable BPMN",
          "REST",
          "SOAP",
          "GraphQL",
          "gRPC",
          "OpenAPI",
        ],
        github: "https://github.com/yFar1310/insurance-claims-e2e",
      },
    ],
  },
  skills: {
    heading: {
      fr: "Stack technique",
      en: "Technical Skills",
    },
    groups: [
      {
        category: { fr: "Gestion de projet", en: "Project Management" },
        items: [
          "Project Management",
          "Multi-Project Delivery",
          "Client Coordination",
          "Stakeholder Management",
          "Prioritization",
          "Team Leadership",
        ],
      },
      {
        category: { fr: "Soft Skills", en: "Soft Skills" },
        items: [
          "Cross-Cultural Communication",
          "Hands-On Leadership",
          "Adaptability",
          "Teamwork",
        ],
      },
      {
        category: { fr: "Langages", en: "Languages" },
        items: [
          "JavaScript",
          "TypeScript",
          "Python",
          "SQL",
          "Java",
          "PHP",
          "OCaml",
          "HTML",
          "CSS",
        ],
      },
      {
        category: { fr: "Frontend", en: "Frontend" },
        items: ["Astro", "Vue.js", "React", "Tailwind", "SSG/SSR"],
      },
      {
        category: { fr: "Backend", en: "Backend" },
        items: [
          "Node.js",
          "Hono",
          "Spring Boot",
          "Symfony",
          "Authentication Flows",
        ],
      },
      {
        category: { fr: "Cloud / Infra / Data", en: "Cloud / Infra / Data" },
        items: [
          "Cloudflare Workers",
          "Cloudflare Pages",
          "Durable Objects",
          "R2",
          "SQLite",
          "PostgreSQL",
          "MongoDB",
          "Docker",
        ],
      },
      {
        category: { fr: "Testing / QA", en: "Testing / QA" },
        items: ["Playwright", "QA Automation", "Insurance Workflow Testing"],
      },
      {
        category: { fr: "APIs / Architecture", en: "APIs / Architecture" },
        items: [
          "REST",
          "SOAP",
          "GraphQL",
          "Apollo Gateway",
          "gRPC",
          "CMS Migration",
          "Multilingual Applications",
        ],
      },
      {
        category: { fr: "Tools", en: "Tools" },
        items: ["Git", "GitHub", "Monorepo", "Product Delivery"],
      },
    ],
  },
  education: {
    heading: {
      fr: "Formation",
      en: "Education",
    },
    arrivalNote: {
      fr: "Arrivé en France en septembre 2021 pour poursuivre mes études supérieures.",
      en: "Arrived in France in September 2021 to pursue higher education.",
    },
    items: [
      {
        institution: "Universite Paris-Saclay",
        degree: {
          fr: "Double diplôme attendu : Diplôme d'ingénieur ENSIIE + Master IMSD (Data / IA)",
          en: "Expected Double Degree: ENSIIE Engineering Degree + IMSD Master's (Data / AI)",
        },
        period: { fr: "Sep 2024 - Expected 2027", en: "Sep 2024 - Expected 2027" },
      },
      {
        institution: "ENSIIE",
        degree: {
          fr: "Diplôme d'ingénieur en informatique (parcours apprentissage)",
          en: "Engineering Degree in Computer Science (Apprenticeship Track)",
        },
        period: { fr: "Sep 2024 - Expected 2027", en: "Sep 2024 - Expected 2027" },
      },
      {
        institution: "University of Burgundy",
        degree: {
          fr: "Licence 3 in Computer Science",
          en: "Licence 3 in Computer Science",
        },
        period: { fr: "Sep 2023 - Jun 2024", en: "Sep 2023 - Jun 2024" },
      },
      {
        institution: "University of Burgundy",
        degree: {
          fr: "Licence 1-2 in Mathematics and Computer Science",
          en: "Licence 1-2 in Mathematics and Computer Science",
        },
        period: { fr: "Sep 2021 - Jun 2023", en: "Sep 2021 - Jun 2023" },
      },
      {
        institution: "Moroccan Baccalaureate",
        degree: {
          fr: "Science Math A",
          en: "Science Math A",
        },
        period: { fr: "2021", en: "2021" },
      },
    ],
  },
  contact: {
    heading: {
      fr: "Parlons collaboration",
      en: "Let's Collaborate",
    },
    lead: {
      fr: "Si vous souhaitez échanger sur le pilotage de projets digitaux, la coordination d'équipes ou une collaboration client, contactez-moi et construisons quelque chose de solide.",
      en: "If you'd like to discuss digital project leadership, team coordination, or a client collaboration, let me know and let's build something solid together.",
    },
    availability: {
      fr: "Ouvert aux collaborations avec des équipes produit, des engineering leads, des founders et des partenaires techniques.",
      en: "Open to collaborations with product teams, engineering leads, founders, and technical partners.",
    },
    githubCta: {
      fr: "Voir GitHub",
      en: "View GitHub",
    },
    linkedInCta: {
      fr: "Voir LinkedIn",
      en: "View LinkedIn",
    },
  },
  footer: {
    rights: {
      fr: "Tous droits réservés.",
      en: "All rights reserved.",
    },
    interests: {
      fr: ["Musculation", "Basketball", "Dessin"],
      en: ["Strength Training", "Basketball", "Drawing"],
    },
  },
  labels: {
    heroEyebrow: { fr: "Portfolio professionnel", en: "Professional Portfolio" },
    aboutEyebrow: { fr: "À propos", en: "About" },
    experienceEyebrow: { fr: "Parcours", en: "Experience" },
    projectsEyebrow: { fr: "Réalisations", en: "Projects" },
    skillsEyebrow: { fr: "Compétences", en: "Skills" },
    educationEyebrow: { fr: "Études", en: "Education" },
    contactEyebrow: { fr: "Collaboration", en: "Collaboration" },
    sectionDescriptionProjects: {
      fr: "Des projets techniques réalisés en tant qu'ingénieur, avant ma transition vers le pilotage de projets.",
      en: "Technical projects delivered as an engineer, prior to my transition into project management.",
    },
    sectionDescriptionSkills: {
      fr: "Des compétences en gestion de projet complétées par un socle technique acquis en tant qu'ingénieur.",
      en: "Project management skills complemented by a technical foundation built as an engineer.",
    },
    sectionDescriptionEducation: {
      fr: "Formation d'ingénierie, progression académique et ancrage international.",
      en: "Engineering education, academic progression, and international trajectory.",
    },
    experienceTechLabel: { fr: "Outils & méthodes", en: "Tools & Methods" },
    projectsHighlightsLabel: { fr: "Points forts", en: "Highlights" },
    projectsGithubLabel: { fr: "Code source", en: "Source Code" },
    projectsOpenDetailsLabel: { fr: "Voir plus", en: "View Details" },
    projectsOpenHintLabel: {
      fr: "Cliquer sur la carte pour ouvrir la fiche complète.",
      en: "Click the card to open the full project brief.",
    },
    projectsDetailsTitleLabel: {
      fr: "Dossier projet",
      en: "Project Brief",
    },
    projectsContextLabel: { fr: "Contexte", en: "Context" },
    projectsContributionsLabel: { fr: "Contributions", en: "Contributions" },
    projectsArchitectureLabel: { fr: "Architecture", en: "Architecture" },
    projectsEngineeringLabel: { fr: "Focus engineering", en: "Engineering Focus" },
    projectsStackLabel: { fr: "Stack technique", en: "Tech Stack" },
    projectsAvailableLabel: { fr: "Lien disponible", en: "Link available" },
    projectsPrivateLabel: { fr: "Code privé / non public", en: "Private / non-public code" },
    skillsCoreLabel: { fr: "Technologies", en: "Technologies" },
    aboutLanguagesLabel: { fr: "Langues de travail", en: "Working Languages" },
    contactQuickLabel: { fr: "Contact rapide", en: "Quick Contact" },
    footerHumanLabel: { fr: "En dehors du code", en: "Outside of Code" },
    footerBuiltWith: {
      fr: "Construit avec Next.js, TypeScript, Tailwind et Framer Motion.",
      en: "Built with Next.js, TypeScript, Tailwind, and Framer Motion.",
    },
    languageSwitchLabel: { fr: "Changer la langue", en: "Switch language" },
    themeSwitchLabel: { fr: "Changer le thème", en: "Toggle theme" },
    menuLabel: { fr: "Ouvrir le menu", en: "Open menu" },
    closeLabel: { fr: "Fermer", en: "Close" },
  },
};
