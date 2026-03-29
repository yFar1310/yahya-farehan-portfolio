import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Yahya Farehan",
    location: "France",
    email: "yahyafarehanmj@gmail.com",
    phone: "+33765234628",
    github: "https://github.com/yFar1310",
    linkedin: "https://www.linkedin.com/in/yahya-farehan-534427282",
    portfolio: "#",
  },
  navItems: [
    { id: "hero", label: { fr: "Accueil", en: "Home" } },
    { id: "about", label: { fr: "Profil", en: "About" } },
    { id: "experience", label: { fr: "Experience", en: "Experience" } },
    { id: "projects", label: { fr: "Projets", en: "Projects" } },
    { id: "skills", label: { fr: "Competences", en: "Skills" } },
    { id: "education", label: { fr: "Formation", en: "Education" } },
    { id: "contact", label: { fr: "Contact", en: "Contact" } },
  ],
  hero: {
    title: {
      fr: "Apprenti en ingenierie logicielle | Developpeur Full-Stack",
      en: "Software Engineering Apprentice | Full-Stack Developer",
    },
    intro: {
      fr: "Je concois des produits web robustes et des experiences techniques credibles, du front-end moderne aux services backend evolutifs.",
      en: "I build robust web products and credible engineering experiences, from modern front-end systems to scalable backend services.",
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
      fr: "Axes d'ingenierie",
      en: "Engineering Focus",
    },
    visualSubtitle: {
      fr: "Architecture web moderne, qualite logicielle et delivery orientee produit.",
      en: "Modern web architecture, software quality, and product-oriented delivery.",
    },
    visualBullets: {
      fr: [
        "Full-stack engineering",
        "Cloud workflows & APIs securisees",
        "Testing automation & reliability",
      ],
      en: [
        "Full-stack engineering",
        "Cloud workflows & secure APIs",
        "Testing automation & reliability",
      ],
    },
  },
  about: {
    heading: {
      fr: "Profil",
      en: "Profile",
    },
    lead: {
      fr: "Etudiant ingenieur ENSIIE et apprenti developpeur chez WebTales, je construis des plateformes web de niveau production, des workflows media cloud et des bases QA automation avec une logique produit exigeante.",
      en: "As an ENSIIE engineering student and apprentice developer at WebTales, I build production-grade web platforms, cloud media workflows, and QA automation foundations with a strong product mindset.",
    },
    paragraphOne: {
      fr: "Mon travail couvre le full-stack engineering, les systemes cloud, l'automatisation des tests, et l'architecture web moderne. Je suis a l'aise avec Astro, Vue.js, React, TypeScript, Cloudflare, GraphQL, Playwright, PostgreSQL et les patterns API contemporains.",
      en: "My work spans full-stack engineering, cloud systems, testing automation, and modern web architecture. I am comfortable with Astro, Vue.js, React, TypeScript, Cloudflare, GraphQL, Playwright, PostgreSQL, and modern API patterns.",
    },
    paragraphTwo: {
      fr: "Je prepare egalement une mobilite internationale de deux mois chez WebTales Portugal en juillet-aout 2026, avec l'objectif de contribuer a des projets distribues dans un contexte collaboratif international.",
      en: "I am also preparing for a two-month international mobility at WebTales Portugal in July-August 2026, with the goal of contributing to distributed projects in an international collaboration context.",
    },
    humanLanguages: {
      fr: [
        "Arabe (natif)",
        "Francais (professionnel)",
        "Anglais (professionnel)",
        "Portugais (niveau debutant)",
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
      fr: "Experience professionnelle",
      en: "Professional Experience",
    },
    items: [
      {
        company: "WebTales",
        role: {
          fr: "Apprenti en ingenierie logicielle",
          en: "Software Engineering Apprentice",
        },
        period: {
          fr: "Sep 2024 - Present",
          en: "Sep 2024 - Present",
        },
        location: {
          fr: "France",
          en: "France",
        },
        summary: {
          fr: "Contribution a la modernisation de plateformes web d'entreprise en combinant architecture front-end maintenable, integration API et exigences de production.",
          en: "Contributing to enterprise web platform modernization by combining maintainable front-end architecture, API integration, and production-level requirements.",
        },
        bullets: {
          fr: [
            "Migration de comportements CMS legacy vers des composants front-end reutilisables, avec rendu statique et rendu serveur selon les besoins fonctionnels.",
            "Mise en place d'interfaces multilingues, routage avance, APIs securisees, workflows medias et experiences orientees recherche.",
            "Participation a des architectures basees sur Astro, Vue.js, React, TypeScript, Cloudflare Workers, GraphQL, Apollo Gateway et PostgreSQL.",
            "Preparation d'une mobilite de 2 mois chez WebTales Portugal pour renforcer la collaboration internationale (juillet-aout 2026).",
          ],
          en: [
            "Migrated legacy CMS behaviors into reusable front-end components with static and server rendering based on functional needs.",
            "Implemented multilingual interfaces, advanced routing, secure APIs, media workflows, and search-oriented user experiences.",
            "Contributed to architectures using Astro, Vue.js, React, TypeScript, Cloudflare Workers, GraphQL, Apollo Gateway, and PostgreSQL.",
            "Preparing a 2-month mobility at WebTales Portugal to strengthen international collaboration (July-August 2026).",
          ],
        },
        tech: [
          "Astro",
          "Vue.js",
          "React",
          "TypeScript",
          "Cloudflare Workers",
          "GraphQL",
          "Apollo Gateway",
          "PostgreSQL",
        ],
      },
    ],
  },
  projects: {
    heading: {
      fr: "Projets selectionnes",
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
            "Reconstruction de blocs dynamiques, du routage et de la navigation multilingue sur un volume eleve de pages.",
            "Mise en place d'experiences de recherche, de pages riches en medias et de composants reutilisables transverses.",
            "Travail sur la generation statique pilotee par sitemap et le rendu detaille des contenus.",
          ],
          en: [
            "Rebuilt dynamic blocks, routing behavior, and multilingual navigation across a large page surface.",
            "Implemented search experiences, media-heavy pages, and reusable components used across multiple templates.",
            "Worked on sitemap-driven static generation and detailed content rendering.",
          ],
        },
        details: {
          context: {
            fr: "Projet de migration a forte visibilite sur un site corporate public avec exigences SEO, contenus multilingues et parity de comportement avec l'existant.",
            en: "High-visibility migration project on a public corporate website with SEO constraints, multilingual content, and strict behavior parity requirements.",
          },
          contributions: {
            fr: [
              "Refonte des composants dynamiques pour remplacer la logique Rubedo/Angular par une base Astro maintenable.",
              "Consolidation des patterns de navigation multilingue et du rendu de pages detail pour differents types de contenu.",
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
              "Generation statique pilotee par sitemap pour maintenir la couverture SEO et la performance de chargement.",
              "Composants reutilisables partages entre pages institutionnelles, medias et experiences de recherche.",
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
              "Maintenabilite front-end a long terme.",
              "Parite fonctionnelle avec production.",
              "Cohesion UX sur un perimetre multi-pages.",
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
          fr: "Suite de regression web avec Playwright pour automatiser des controles end-to-end recurrents et fiabiliser les livraisons.",
          en: "Website regression testing suite with Playwright to automate recurring end-to-end checks and improve release confidence.",
        },
        bullets: {
          fr: [
            "Automatisation de scenarios critiques pour detecter les regressions front-end des premieres iterations.",
            "Approche orientee fiabilite de delivery avec executions recurrentes et logique de planification.",
            "Base solide pour etendre la couverture QA sur differents environnements.",
          ],
          en: [
            "Automates critical user flows to catch front-end breakages early in the delivery cycle.",
            "Designed for recurring execution with scheduling ideas that improve release confidence.",
            "Provides a scalable foundation for wider QA automation coverage across environments.",
          ],
        },
        details: {
          context: {
            fr: "Projet d'automatisation QA pour reduire le risque de regression sur des interfaces web evolutives et accelerer la validation avant livraison.",
            en: "QA automation project designed to reduce regression risk on evolving web interfaces and speed up pre-release validation.",
          },
          contributions: {
            fr: [
              "Definition d'un socle de scenarios E2E couvrant les parcours les plus sensibles cote utilisateur.",
              "Structuration des tests pour faciliter la maintenance et l'extension a de nouveaux modules.",
              "Preparation d'une execution recurrente pour integrer les controles a la routine de delivery.",
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
              "Organisation orientee suites fonctionnelles pour isoler les defaillances rapidement.",
              "Base compatible avec une integration CI pour execution planifiee et alerting.",
            ],
            en: [
              "Playwright used as the browser orchestration and UI assertion engine.",
              "Functional suite organization to isolate failures quickly.",
              "Foundation compatible with CI integration for scheduled execution and alerting.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Detection precoce des regressions front-end.",
              "Confiance de release en environnement evolutif.",
              "Scalabilite de la couverture QA.",
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
          fr: "Plateforme de Digital Asset Management orientee micro-frontend et microservices pour la gestion securisee d'actifs.",
          en: "Digital Asset Management platform designed with a micro-frontend and microservice-oriented architecture for secure asset workflows.",
        },
        bullets: {
          fr: [
            "Developpement de flux d'upload securises, de recuperation authentifiee et de gestion de metadonnees.",
            "Conception de services front-end + back-end pour controle d'acces, traitement d'actifs et stockage cloud.",
            "Architecture cloud pragmatique avec separation claire des responsabilites techniques.",
          ],
          en: [
            "Implemented secure uploads, authenticated retrieval, and metadata handling flows.",
            "Built front-end and backend services for access control, asset processing, and cloud storage orchestration.",
            "Applied a pragmatic cloud architecture with clear service responsibility boundaries.",
          ],
        },
        details: {
          context: {
            fr: "Projet de plateforme DAM pour centraliser des actifs numeriques avec des exigences fortes de securite, de tracabilite et de gestion des acces.",
            en: "DAM platform project to centralize digital assets with strong security, traceability, and access-control requirements.",
          },
          contributions: {
            fr: [
              "Implementation des parcours d'upload securise et de consultation authentifiee des actifs.",
              "Conception de services applicatifs dedies au controle d'acces, au traitement et a la distribution des medias.",
              "Contribution front-end et back-end pour garantir coherence produit et robustesse technique.",
            ],
            en: [
              "Implemented secure upload flows and authenticated asset retrieval.",
              "Designed application services for access control, media processing, and distribution.",
              "Contributed on both front-end and backend sides to ensure product consistency and technical robustness.",
            ],
          },
          architecture: {
            fr: [
              "Architecture micro-frontend et microservices pour separer clairement les responsabilites.",
              "Workflows cloud autour de Cloudflare Workers et R2 pour la gestion des fichiers.",
              "Gestion des identites et sessions avec Clerk pour securiser les interactions utilisateur.",
            ],
            en: [
              "Micro-frontend and microservice-oriented architecture with clear responsibility boundaries.",
              "Cloud workflows built around Cloudflare Workers and R2 for file handling.",
              "Identity and session management with Clerk for secure user interactions.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Securisation des flux d'actifs.",
              "Modularite des services.",
              "Lisibilite operationnelle des workflows medias.",
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
          fr: "Projet ecole / personnel",
          en: "School / Personal Project",
        },
        summary: {
          fr: "Plateforme full-stack de planification et suivi de taches avec visualisation de dependances et architecture monorepo.",
          en: "Full-stack planning and task tracking platform with dependency visualization and a monorepo architecture.",
        },
        bullets: {
          fr: [
            "JWT authentication, dashboards, journal d'activite et export PDF pour le pilotage projet.",
            "Visualisation des dependances via graphe PERT pour mieux anticiper les blocages.",
            "Backend Hono + PostgreSQL, journalisation evenements MongoDB et setup local Docker.",
          ],
          en: [
            "Built JWT authentication, dashboards, activity logging, and PDF exports for project execution visibility.",
            "Implemented a PERT graph to visualize dependencies and highlight delivery risks.",
            "Used a Hono backend with PostgreSQL, MongoDB event logging, and a Docker-based local setup.",
          ],
        },
        details: {
          context: {
            fr: "Projet full-stack de planification pour structurer la coordination de taches, le suivi de dependances et la visibilite d'execution.",
            en: "Full-stack planning platform project focused on task coordination, dependency tracking, and execution visibility.",
          },
          contributions: {
            fr: [
              "Developpement du socle applicatif avec authentification JWT, dashboards et suivi d'activites.",
              "Conception de modules de visualisation (graphe PERT) et d'export PDF pour la communication projet.",
              "Mise en place d'une architecture monorepo avec environnement local dockerise.",
            ],
            en: [
              "Built the application core with JWT authentication, dashboards, and activity tracking.",
              "Designed visualization modules (PERT graph) and PDF export capabilities for project communication.",
              "Set up a monorepo architecture with a Dockerized local development environment.",
            ],
          },
          architecture: {
            fr: [
              "Frontend Vue 3 + Vite + Tailwind pour une interface reactive et maintenable.",
              "API Hono pour la couche metier et PostgreSQL pour les donnees applicatives.",
              "MongoDB dedie a la journalisation d'evenements pour separer suivi et donnees coeur.",
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
              "Visualisation de dependances pour la decision projet.",
              "Qualite d'experience developpeur via monorepo et Docker.",
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
          fr: "Projet ecole",
          en: "School Project",
        },
        summary: {
          fr: "Workflow end-to-end de gestion de sinistres avec orchestration BPMN et integration multi-protocoles.",
          en: "End-to-end insurance claim workflow with BPMN orchestration and multi-protocol integration.",
        },
        bullets: {
          fr: [
            "Orchestration Flowable BPMN couvrant soumission de dossier, verification d'identite et validation de police.",
            "Integration de controles anti-fraude, autorisation de paiement et scenarios de demo reproductibles.",
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
            fr: "Projet d'orchestration de workflow de sinistres visant a demonstrer une chaine complete, de la soumission a l'autorisation de paiement.",
            en: "Insurance workflow orchestration project demonstrating an end-to-end chain from claim submission to payment authorization.",
          },
          contributions: {
            fr: [
              "Modelisation du processus BPMN avec Flowable pour aligner les etapes metier et les integrations techniques.",
              "Conception de scenarios de demo reproductibles pour illustrer les cas nominal, controles et exceptions.",
              "Connexion de services heterogenes pour couvrir plusieurs paradigmes d'integration API.",
            ],
            en: [
              "Modeled the BPMN process with Flowable to align business steps with technical integrations.",
              "Built reproducible demo scenarios to showcase nominal flows, controls, and exception paths.",
              "Connected heterogeneous services across multiple API integration paradigms.",
            ],
          },
          architecture: {
            fr: [
              "Coordination de services REST, SOAP, GraphQL et gRPC dans un meme flux metier.",
              "Documentation OpenAPI pour faciliter la lisibilite des points d'entree et des contrats.",
              "Separation claire entre orchestration, verification de donnees et services de decision.",
            ],
            en: [
              "Orchestrated REST, SOAP, GraphQL, and gRPC services within a single business flow.",
              "Used OpenAPI documentation to improve endpoint and contract clarity.",
              "Maintained clear separation between orchestration, data checks, and decision services.",
            ],
          },
          engineeringFocus: {
            fr: [
              "Interoperabilite entre protocoles API.",
              "Fiabilite d'un workflow de bout en bout.",
              "Capacite de demonstration technique reproductible.",
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
      fr: "Arrive en France en septembre 2021 pour poursuivre mes etudes superieures.",
      en: "Arrived in France in September 2021 to pursue higher education.",
    },
    items: [
      {
        institution: "ENSIIE",
        degree: {
          fr: "Engineering Degree in Computer Science (Apprenticeship Track)",
          en: "Engineering Degree in Computer Science (Apprenticeship Track)",
        },
        period: { fr: "Sep 2024 - Expected 2027", en: "Sep 2024 - Expected 2027" },
      },
      {
        institution: "Universite d'Evry Paris-Saclay",
        degree: {
          fr: "Expected Double Degree, Master's in IMSD",
          en: "Expected Double Degree, Master's in IMSD",
        },
        period: { fr: "Expected 2027", en: "Expected 2027" },
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
      fr: "Si vous souhaitez collaborer sur un produit web, une architecture cloud ou une initiative QA automation, contactez-moi et construisons quelque chose de solide.",
      en: "If you want to collaborate on a web product, cloud architecture initiative, or QA automation effort, let me know and let's build something solid together.",
    },
    availability: {
      fr: "Ouvert aux collaborations avec equipes produit, engineering leads, founders et partenaires techniques.",
      en: "Open to collaborations with product teams, engineering leads, founders, and technical partners.",
    },
    emailCta: {
      fr: "Envoyer un email",
      en: "Send Email",
    },
    githubCta: {
      fr: "Voir GitHub",
      en: "View GitHub",
    },
    linkedInCta: {
      fr: "Voir LinkedIn",
      en: "View LinkedIn",
    },
    portfolioCta: {
      fr: "Portfolio (bientot)",
      en: "Portfolio (coming soon)",
    },
    portfolioPlaceholder: {
      fr: "Lien de portfolio personnel a definir prochainement.",
      en: "Personal portfolio domain placeholder for future launch.",
    },
  },
  footer: {
    rights: {
      fr: "Tous droits reserves.",
      en: "All rights reserved.",
    },
    interests: {
      fr: ["Musculation", "Basketball", "Dessin"],
      en: ["Strength Training", "Basketball", "Drawing"],
    },
  },
  labels: {
    heroEyebrow: { fr: "Portfolio d'ingenierie", en: "Engineering Portfolio" },
    aboutEyebrow: { fr: "A propos", en: "About" },
    experienceEyebrow: { fr: "Parcours", en: "Experience" },
    projectsEyebrow: { fr: "Realisations", en: "Projects" },
    skillsEyebrow: { fr: "Competences", en: "Skills" },
    educationEyebrow: { fr: "Etudes", en: "Education" },
    contactEyebrow: { fr: "Collaboration", en: "Collaboration" },
    sectionDescriptionProjects: {
      fr: "Des projets concrets, orientes architecture, delivery et qualite logicielle.",
      en: "Hands-on projects focused on architecture, delivery, and software quality.",
    },
    sectionDescriptionSkills: {
      fr: "Un socle technique full-stack construit pour des produits web modernes et fiables.",
      en: "A full-stack toolkit designed for modern and reliable web products.",
    },
    sectionDescriptionEducation: {
      fr: "Formation d'ingenierie, progression academique et ancrage international.",
      en: "Engineering education, academic progression, and international trajectory.",
    },
    experienceTechLabel: { fr: "Stack utilisee", en: "Stack Used" },
    projectsHighlightsLabel: { fr: "Points forts", en: "Highlights" },
    projectsGithubLabel: { fr: "Code source", en: "Source Code" },
    projectsOpenDetailsLabel: { fr: "Voir plus", en: "View Details" },
    projectsOpenHintLabel: {
      fr: "Cliquer sur la carte pour ouvrir la fiche complete.",
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
    projectsPrivateLabel: { fr: "Code prive / non public", en: "Private / non-public code" },
    skillsCoreLabel: { fr: "Technologies", en: "Technologies" },
    aboutLanguagesLabel: { fr: "Langues de travail", en: "Working Languages" },
    contactQuickLabel: { fr: "Contact rapide", en: "Quick Contact" },
    footerHumanLabel: { fr: "En dehors du code", en: "Outside of Code" },
    footerBuiltWith: {
      fr: "Construit avec Next.js, TypeScript, Tailwind et Framer Motion.",
      en: "Built with Next.js, TypeScript, Tailwind, and Framer Motion.",
    },
    languageSwitchLabel: { fr: "Changer la langue", en: "Switch language" },
    themeSwitchLabel: { fr: "Changer le theme", en: "Toggle theme" },
    menuLabel: { fr: "Ouvrir le menu", en: "Open menu" },
    closeLabel: { fr: "Fermer", en: "Close" },
  },
};
