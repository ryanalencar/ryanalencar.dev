import type { PortfolioTranslation, Locale } from "./types";

export const localeOptions: Array<{ code: Locale; label: string }> = [
  { code: "pt-BR", label: "🇧🇷 PT" },
  { code: "en-US", label: "🇺🇸 EN" },
  { code: "es-ES", label: "🇪🇸 ES" },
];

export const portfolioContent: Record<Locale, PortfolioTranslation> = {
  "pt-BR": {
    seo: {
      title: "Ryan Alencar - Senior Software Engineer",
      description:
        "Portfólio de Ryan Alencar, Senior Software Engineer especialista em React, Next.js e Node.js para criar produtos web escaláveis, rápidos e orientados a resultados.",
      keywords:
        "Tech Leader, Senior Software Engineer, Full Stack Developer, ReactJS, NodeJs, NextJS, TypeScript, NestJs",
    },
    labels: {
      language: "Idioma",
      theme: "Tema",
      dark: "Dark",
      light: "Light",
      openProject: "Abrir projeto",
      readArticle: "Ler artigo",
      timeline: "Linha do tempo profissional",
      socialLinks: "Redes sociais",
    },
    profile: {
      name: "Ryan Alencar",
      role: "Software Engineer",
      bio: "Especialista em produtos digitais escaláveis, performance e experiência premium.",
      location: "Fortaleza - CE, Brasil · Remoto global",
      availability: "Disponível para projetos estratégicos",
      avatarAlt: "Foto profissional de Ryan Alencar",
      socials: [
        {
          label: "GitHub",
          url: "https://github.com/ryanalencar",
          ariaLabel: "Abrir GitHub de Ryan Alencar",
          icon: "github",
        },
        {
          label: "LinkedIn",
          url: "https://linkedin.com/in/ryanalencar",
          ariaLabel: "Abrir LinkedIn de Ryan Alencar",
          icon: "linkedin",
        },
        {
          label: "Instagram",
          url: "https://instagram.com/ryanalencar.dev",
          ariaLabel: "Abrir Instagram de Ryan Alencar",
          icon: "instagram",
        },
        {
          label: "Email",
          url: "mailto:ryanalencar.dev@gmail.com",
          ariaLabel: "Enviar email para Ryan Alencar",
          icon: "email",
        },
      ],
    },
    nav: {
      hero: "Início",
      projects: "Projetos",
      experience: "Experiência",
      education: "Educação",
      contact: "Contato",
    },
    hero: {
      title: "SOFTWARE",
      subtitle: "ENGINEER",
      description:
        "Apaixonado por criar experiências de usuário intuitivas e envolventes. Especializado em transformar ideias em produtos belamente confeccionados.",
      ctaPrimary: "Vamos trabalhar juntos",
      ctaSecondary: "Ver projetos recentes",
      metrics: [
        { value: "+6", label: "anos de experiência" },
        { value: "+40", label: "projetos concluídos" },
        { value: "+10", label: "clientes no mundo" },
      ],
      stackCard: {
        title: "Tech Stack",
        categories: [
          {
            name: "Foundational",
            items: ["HTML", "CSS", "JavaScript", "TypeScript"],
          },
          {
            name: "Frontend",
            items: [
              "React",
              "Next.js",
              "Vite",
              "Tailwind CSS",
              "Redux Toolkit",
              "Storybook",
            ],
          },
          {
            name: "Mobile",
            items: ["React Native", "Expo"],
          },
          {
            name: "Backend",
            items: ["Node.js", "NestJS", "AdonisJS"],
          },
          {
            name: "DevOps & Tools",
            items: ["Git", "GitHub", "GitLab", "Docker", "Jenkins"],
          },
          {
            name: "Testing",
            items: ["Jest", "React Testing Library"],
          },
          {
            name: "Cloud & API",
            items: ["AWS", "Google Cloud Platform", "GraphQL"],
          },
          {
            name: "Architecture",
            items: ["Design Systems"],
          },
        ],
      },
    },
    projects: {
      title: "projetos",
      subtitle: "recentes",
      intro:
        "Projetos orientados a impacto, escalabilidade e resultados de negócio.",
      list: [
        {
          name: "micro-saas-template",
          type: "SaaS Template",
          href: "https://github.com/ryanalencar/micro-saas-template",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail do projeto micro-saas-template",
        },
        {
          name: "spacetraveling",
          type: "Plataforma de conteúdo por assinatura",
          href: "https://github.com/ryanalencar/spacetraveling",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail do projeto spacetraveling",
        },
        {
          name: "domain-events",
          type: "DDD e eventos de domínio em Node.js",
          href: "https://github.com/ryanalencar/domain-events",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail do projeto domain-events",
        },
      ],
    },
    experience: {
      title: "6+ anos de",
      subtitle: "experiência",
      intro:
        "Trajetória em engenharia de software full stack com foco em produtos escaláveis e impacto mensurável.",
      timeline: [
        {
          company: "Stefanini LATAM",
          role: "Senior Software Engineer",
          period: "jul 2023 — atual",
          summary:
            "Liderança na evolução do Design System do Banco do Nordeste, com biblioteca React reutilizável, integração de design tokens via API NestJS e ganhos de 40% em eficiência e 25% no tempo de front-end.",
          highlights: [
            "Arquitetura e implementação de um Design System escalável para aplicações do BNB",
            "Criação de biblioteca React reutilizável para padronização de UI",
            "Integração de design tokens para iOS, Android, React e React Native via API NestJS",
            "Desenvolvimento de plataforma de documentação com Docusaurus",
          ],
          impactMetrics: [
            { metric: "eficiência de desenvolvimento", value: "+40%" },
            { metric: "tempo de front-end", value: "-25%" },
            { metric: "feedback positivo de usuários", value: "+15%" },
            { metric: "produtividade de desenvolvedores", value: "+30%" },
            { metric: "tempo de onboarding", value: "-20%" },
          ],
          technologies: [
            "React",
            "NestJS",
            "Docusaurus",
            "Design Systems",
            "Design Tokens",
            "React Native",
            "iOS",
            "Android",
          ],
        },
        {
          company: "Tecla T",
          role: "Senior Software Engineer",
          period: "abr 2021 — jul 2023",
          summary:
            "Entrega full stack para múltiplos clientes, incluindo arquitetura Nx, chat em tempo real com Socket.IO e soluções em Vite/React para produtos financeiros e comerciais.",
          highlights: [
            "Entrega full stack para múltiplos clientes em diferentes domínios",
            "Projeto Agora eu Pago com arquitetura Nx, NestJS e Socket.IO para comunicação em tempo real",
            "Projeto Febracis com modernização de fluxo comercial usando React, Redux e TypeScript",
            "Projeto Dominio Financeira com Adonis, Docker, PostgreSQL e front-end em Vite/Redux",
          ],
          impactMetrics: [
            { metric: "projetos de destaque", value: "3" },
            { metric: "tempo na empresa", value: "2a 4m" },
          ],
          technologies: [
            "Nx",
            "NestJS",
            "Socket.IO",
            "Vite",
            "Chakra UI",
            "Redux",
            "React Query",
            "React",
            "TypeScript",
            "Adonis",
            "Docker",
            "PostgreSQL",
            "Nginx",
          ],
        },
        {
          company: "Pasquali Solution",
          role: "Software Engineer | Front End",
          period: "nov 2020 — abr 2021",
          summary:
            "Construção de arquitetura de micro frontends em React e integração com Safe2Pay, aumentando a eficiência do fluxo de compra de créditos em 30% e as transações concluídas em 25%.",
          highlights: [
            "Construção de arquitetura de micro frontends com React",
            "Integração com Safe2Pay para processamento seguro de pagamentos",
            "Redesenho do fluxo de compra de créditos com melhor conversão",
          ],
          impactMetrics: [
            { metric: "eficiência do processo de compra", value: "+30%" },
            { metric: "transações concluídas", value: "+25%" },
          ],
          technologies: ["React", "Micro Frontends", "Safe2Pay"],
        },
        {
          company: "Dell Lead",
          role: "Software Engineer | Front End",
          period: "jun 2020 — nov 2020",
          summary:
            "Desenvolvimento de app educacional em React Native com experiências gamificadas e foco em acessibilidade/UX, elevando engajamento e retenção em 40%.",
          highlights: [
            "Desenvolvimento de aplicativo educacional em React Native",
            "Aplicação de boas práticas de acessibilidade, UX e UI",
            "Colaboração de equipe com metodologia Scrum",
          ],
          impactMetrics: [
            { metric: "engajamento e retenção de conhecimento", value: "+40%" },
            { metric: "colaboração e eficiência do time", value: "+25%" },
          ],
          technologies: ["React Native", "Accessibility", "UX", "UI", "Scrum"],
        },
        {
          company: "NEPEN",
          role: "Software Developer | Front End",
          period: "jan 2020 — jun 2020",
          summary:
            "Criação de interfaces dinâmicas para projetos IoT com Angular e React.js, acelerando entregas em 25% e elevando a satisfação de usuários em 40%.",
          highlights: [
            "Criação de interfaces dinâmicas e responsivas para projetos IoT",
            "Uso de Angular e React.js em ambiente ágil",
            "Prototipação de alta fidelidade em Figma com foco no usuário",
          ],
          impactMetrics: [
            { metric: "interatividade e responsividade", value: "+30%" },
            { metric: "velocidade de entrega", value: "+25%" },
            { metric: "satisfação de usuários", value: "+40%" },
          ],
          technologies: ["Angular", "React.js", "Figma", "Scrum", "Agile"],
        },
        {
          company: "AVATAR Soluções Digitais",
          role: "Junior Software Developer | Full Stack",
          period: "jan 2019 — jan 2020",
          summary:
            "Entrega de e-commerce full stack com Next.js e Express.js, gerando ganhos de eficiência operacional (40%), performance (35%) e redução de tempo de deploy (20%).",
          highlights: [
            "Desenvolvimento de plataforma e-commerce full stack",
            "Implementação de gestão de usuários para mais de 1.000 pessoas",
            "Uso de SSR e SSG com Next.js para ganhos de performance",
            "Aprimoramento de deploy com adoção de Docker",
          ],
          impactMetrics: [
            { metric: "eficiência operacional", value: "+40%" },
            { metric: "usuários impactados", value: "1000+" },
            { metric: "performance e tempo de carregamento", value: "+35%" },
            { metric: "tempo de deploy", value: "-20%" },
            { metric: "satisfação do cliente", value: "95%" },
          ],
          technologies: ["Next.js", "Express.js", "Docker", "SSR", "SSG"],
        },
      ],
    },
    education: {
      title: "formação",
      subtitle: "acadêmica",
      intro:
        "Base sólida em engenharia, segurança e desenvolvimento full stack para sustentar decisões técnicas de produto.",
      timeline: [
        {
          institution: "Instituto Federal do Ceará (IFCE)",
          degree: "Bacharelado",
          fieldOfStudy: "Engenharia da Computação",
          period: "mar 2021 — mar 2026",
        },
        {
          institution: "Faculdade Descomplica",
          degree: "MBA",
          fieldOfStudy: "Segurança da Informação",
          period: "abr 2025 — abr 2026",
        },
        {
          institution: "Faculdade Descomplica",
          degree: "Tecnólogo",
          fieldOfStudy: "Sistemas para Internet",
          period: "jan 2022 — jun 2024",
        },
        {
          institution: "Rocketseat",
          degree: "Certificação Profissional",
          fieldOfStudy: "Desenvolvimento Full Stack",
          period: "jan 2022 — jan 2023",
        },
        {
          institution: "EF English Live",
          degree: "Certificação",
          fieldOfStudy: "Ensino de Inglês para Falantes de Outros Idiomas",
          period: "jan 2021 — jan 2022",
        },
      ],
    },
    contact: {
      title: "vamos trabalhar",
      subtitle: "juntos",
      intro:
        "Conte um pouco sobre o desafio e eu retorno com próximos passos objetivos.",
      cardDescription:
        "Atuação consultiva e execução hands-on para acelerar resultados.",
      form: {
        name: "Nome",
        email: "Email",
        service: "Serviço",
        message: "Mensagem",
        submit: "Enviar",
        serviceOptions: [
          "Desenvolvimento Web",
          "Arquitetura & Performance",
          "Mentoria Técnica",
          "Discovery de Produto",
        ],
      },
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  "en-US": {
    seo: {
      title: "Senior Software Engineer | Scalable and high-converting products",
      description:
        "Ryan Alencar’s portfolio: Senior Software Engineer building scalable, high-performance web products with React, Next.js, Node.js, and TypeScript.",
      keywords:
        "Tech Leader, Senior Software Engineer, Full Stack Developer, ReactJS, NodeJs, NextJS, TypeScript, NestJs",
    },
    labels: {
      language: "Language",
      theme: "Theme",
      dark: "Dark",
      light: "Light",
      openProject: "Open project",
      readArticle: "Read article",
      timeline: "Professional timeline",
      socialLinks: "Social links",
    },
    profile: {
      name: "Ryan Alencar",
      role: "Software Engineer",
      bio: "Specialized in scalable digital products, high performance, and premium user experience.",
      location: "Fortaleza - CE, Brazil · Remote worldwide",
      availability: "Available for strategic projects",
      avatarAlt: "Professional portrait of Ryan Alencar",
      socials: [
        {
          label: "GitHub",
          url: "https://github.com/ryanalencar",
          ariaLabel: "Open Ryan Alencar GitHub profile",
          icon: "github",
        },
        {
          label: "LinkedIn",
          url: "https://linkedin.com/in/ryanalencar",
          ariaLabel: "Open Ryan Alencar LinkedIn profile",
          icon: "linkedin",
        },
        {
          label: "Instagram",
          url: "https://instagram.com/ryanalencar.dev",
          ariaLabel: "Open Ryan Alencar Instagram profile",
          icon: "instagram",
        },
        {
          label: "Email",
          url: "mailto:ryanalencar.dev@gmail.com",
          ariaLabel: "Send email to Ryan Alencar",
          icon: "email",
        },
      ],
    },
    nav: {
      hero: "Home",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      title: "SOFTWARE",
      subtitle: "ENGINEER",
      description:
        "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
      ctaPrimary: "Let’s Work Together",
      ctaSecondary: "View recent projects",
      metrics: [
        { value: "+6", label: "years experience" },
        { value: "+40", label: "projects completed" },
        { value: "+10", label: "clients worldwide" },
      ],
      stackCard: {
        title: "Tech Stack",
        categories: [
          {
            name: "Foundational",
            items: ["HTML", "CSS", "JavaScript", "TypeScript"],
          },
          {
            name: "Frontend",
            items: [
              "React",
              "Next.js",
              "Vite",
              "Tailwind CSS",
              "Redux Toolkit",
              "Storybook",
            ],
          },
          {
            name: "Mobile",
            items: ["React Native", "Expo"],
          },
          {
            name: "Backend",
            items: ["Node.js", "NestJS", "AdonisJS"],
          },
          {
            name: "DevOps & Tools",
            items: ["Git", "GitHub", "GitLab", "Docker", "Jenkins"],
          },
          {
            name: "Testing",
            items: ["Jest", "React Testing Library"],
          },
          {
            name: "Cloud & API",
            items: ["AWS", "Google Cloud Platform", "GraphQL"],
          },
          {
            name: "Architecture",
            items: ["Design Systems"],
          },
        ],
      },
    },
    projects: {
      title: "RECENT",
      subtitle: "PROJECTS",
      intro:
        "Projects focused on impact, scalability, and measurable business outcomes.",
      list: [
        {
          name: "micro-saas-template",
          type: "SaaS Template",
          href: "https://github.com/ryanalencar/micro-saas-template",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail of micro-saas-template project",
        },
        {
          name: "spacetraveling",
          type: "Subscription content platform",
          href: "https://github.com/ryanalencar/spacetraveling",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail of spacetraveling project",
        },
        {
          name: "domain-events",
          type: "DDD and domain events in Node.js",
          href: "https://github.com/ryanalencar/domain-events",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail of domain-events project",
        },
      ],
    },
    experience: {
      title: "6+ YEARS OF",
      subtitle: "EXPERIENCE",
      intro:
        "Full-stack software engineering journey focused on scalable products and measurable business impact.",
      timeline: [
        {
          company: "Stefanini LATAM",
          role: "Senior Software Engineer",
          period: "Jul 2023 — Present",
          summary:
            "Led the evolution of Banco do Nordeste’s Design System with a reusable React library, NestJS token APIs, and measurable gains of 40% in efficiency and 25% less front-end delivery time.",
          highlights: [
            "Architected and implemented a scalable Design System for BNB applications",
            "Built and maintained a reusable React component library",
            "Integrated design tokens across iOS, Android, React, and React Native via NestJS API",
            "Created a developer documentation platform using Docusaurus",
          ],
          impactMetrics: [
            { metric: "development efficiency", value: "+40%" },
            { metric: "front-end delivery time", value: "-25%" },
            { metric: "positive user feedback", value: "+15%" },
            { metric: "developer productivity", value: "+30%" },
            { metric: "onboarding time", value: "-20%" },
          ],
          technologies: [
            "React",
            "NestJS",
            "Docusaurus",
            "Design Systems",
            "Design Tokens",
            "React Native",
            "iOS",
            "Android",
          ],
        },
        {
          company: "Tecla T",
          role: "Senior Software Engineer",
          period: "Apr 2021 — Jul 2023",
          summary:
            "Delivered full-stack solutions for multiple clients, including Nx architecture, real-time chat with Socket.IO, and Vite/React implementations for financial and commerce products.",
          highlights: [
            "Delivered full-stack solutions for multiple client products",
            "Built Agora eu Pago using Nx, NestJS, and Socket.IO for real-time communication",
            "Modernized Febracis sales flow with React, Redux, and TypeScript",
            "Built Dominio Financeira with Adonis, Docker, PostgreSQL, and Vite/Redux",
          ],
          impactMetrics: [
            { metric: "featured projects", value: "3" },
            { metric: "time in role", value: "2y 4m" },
          ],
          technologies: [
            "Nx",
            "NestJS",
            "Socket.IO",
            "Vite",
            "Chakra UI",
            "Redux",
            "React Query",
            "React",
            "TypeScript",
            "Adonis",
            "Docker",
            "PostgreSQL",
            "Nginx",
          ],
        },
        {
          company: "Pasquali Solution",
          role: "Software Engineer | Front End",
          period: "Nov 2020 — Apr 2021",
          summary:
            "Built a React micro-frontend architecture and integrated Safe2Pay, improving credit purchase flow efficiency by 30% and completed transactions by 25%.",
          highlights: [
            "Built micro-frontend architecture with React",
            "Integrated Safe2Pay for secure payment processing",
            "Redesigned the credit purchase flow for better conversion",
          ],
          impactMetrics: [
            { metric: "purchase flow efficiency", value: "+30%" },
            { metric: "successful transactions", value: "+25%" },
          ],
          technologies: ["React", "Micro Frontends", "Safe2Pay"],
        },
        {
          company: "Dell Lead",
          role: "Software Engineer | Front End",
          period: "Jun 2020 — Nov 2020",
          summary:
            "Developed a gamified React Native education app with accessibility and UX best practices, increasing engagement and knowledge retention by 40%.",
          highlights: [
            "Developed a React Native educational app with gamification",
            "Applied accessibility, UX, and UI best practices",
            "Collaborated using Scrum methodology",
          ],
          impactMetrics: [
            { metric: "engagement and retention", value: "+40%" },
            { metric: "team collaboration efficiency", value: "+25%" },
          ],
          technologies: ["React Native", "Accessibility", "UX", "UI", "Scrum"],
        },
        {
          company: "NEPEN",
          role: "Software Developer | Front End",
          period: "Jan 2020 — Jun 2020",
          summary:
            "Built dynamic IoT interfaces with Angular and React.js, improving delivery speed by 25% and user satisfaction by 40%.",
          highlights: [
            "Built dynamic and responsive interfaces for IoT projects",
            "Worked with Angular and React.js in an agile team",
            "Created high-fidelity prototypes in Figma with a user-centered approach",
          ],
          impactMetrics: [
            { metric: "interactivity and responsiveness", value: "+30%" },
            { metric: "delivery speed", value: "+25%" },
            { metric: "user satisfaction", value: "+40%" },
          ],
          technologies: ["Angular", "React.js", "Figma", "Scrum", "Agile"],
        },
        {
          company: "AVATAR Soluções Digitais",
          role: "Junior Software Developer | Full Stack",
          period: "Jan 2019 — Jan 2020",
          summary:
            "Delivered a full-stack e-commerce platform with Next.js and Express.js, improving operational efficiency (40%), performance (35%), and deployment speed (20%).",
          highlights: [
            "Built a full-stack e-commerce platform",
            "Implemented user management for 1,000+ users",
            "Used SSR and SSG with Next.js for performance gains",
            "Improved deployment process with Docker",
          ],
          impactMetrics: [
            { metric: "operational efficiency", value: "+40%" },
            { metric: "users impacted", value: "1000+" },
            { metric: "performance and load time", value: "+35%" },
            { metric: "deployment time", value: "-20%" },
            { metric: "client satisfaction", value: "95%" },
          ],
          technologies: ["Next.js", "Express.js", "Docker", "SSR", "SSG"],
        },
      ],
    },
    education: {
      title: "academic",
      subtitle: "background",
      intro:
        "Strong foundations in engineering, security, and full-stack development to support high-impact product decisions.",
      timeline: [
        {
          institution: "Federal Institute of Ceará (IFCE)",
          degree: "Bachelor's Degree",
          fieldOfStudy: "Computer Engineering",
          period: "Mar 2021 — Mar 2026",
        },
        {
          institution: "Descomplica College",
          degree: "MBA",
          fieldOfStudy: "Information Security",
          period: "Apr 2025 — Apr 2026",
        },
        {
          institution: "Descomplica College",
          degree: "Technologist Degree",
          fieldOfStudy: "Internet Systems",
          period: "Jan 2022 — Jun 2024",
        },
        {
          institution: "Rocketseat",
          degree: "Professional Certification",
          fieldOfStudy: "Full Stack Development",
          period: "Jan 2022 — Jan 2023",
        },
        {
          institution: "EF English Live",
          degree: "Certification",
          fieldOfStudy: "Teaching English to Speakers of Other Languages",
          period: "Jan 2021 — Jan 2022",
        },
      ],
    },
    contact: {
      title: "LET’S WORK",
      subtitle: "TOGETHER",
      intro: "Share your challenge and I will reply with clear next steps.",
      cardDescription:
        "Consulting plus hands-on execution to accelerate outcomes.",
      form: {
        name: "Name",
        email: "Email",
        service: "Service",
        message: "Message",
        submit: "Submit",
        serviceOptions: [
          "Web Development",
          "Architecture & Performance",
          "Technical Mentoring",
          "Product Discovery",
        ],
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  "es-ES": {
    seo: {
      title:
        "Software Engineer Senior | Productos escalables y alta conversión",
      description:
        "Portafolio de Ryan Alencar, Software Engineer Senior especializado en React, Next.js y Node.js para crear productos web escalables, rápidos y orientados a resultados.",
      keywords:
        "Tech Leader, Senior Software Engineer, Full Stack Developer, ReactJS, NodeJs, NextJS, TypeScript, NestJs",
    },
    labels: {
      language: "Idioma",
      theme: "Tema",
      dark: "Dark",
      light: "Light",
      openProject: "Abrir proyecto",
      readArticle: "Leer artículo",
      timeline: "Línea de tiempo profesional",
      socialLinks: "Redes sociales",
    },
    profile: {
      name: "Ryan Alencar",
      role: "Software Engineer",
      bio: "Especialista en productos digitales escalables, alto rendimiento y experiencia premium.",
      location: "Fortaleza - CE, Brasil · Remoto global",
      availability: "Disponible para proyectos estratégicos",
      avatarAlt: "Foto profesional de Ryan Alencar",
      socials: [
        {
          label: "GitHub",
          url: "https://github.com/ryanalencar",
          ariaLabel: "Abrir perfil de GitHub de Ryan Alencar",
          icon: "github",
        },
        {
          label: "LinkedIn",
          url: "https://linkedin.com/in/ryanalencar",
          ariaLabel: "Abrir perfil de LinkedIn de Ryan Alencar",
          icon: "linkedin",
        },
        {
          label: "Instagram",
          url: "https://instagram.com/ryanalencar.dev",
          ariaLabel: "Abrir perfil de Instagram de Ryan Alencar",
          icon: "instagram",
        },
        {
          label: "Email",
          url: "mailto:ryanalencar.dev@gmail.com",
          ariaLabel: "Enviar email a Ryan Alencar",
          icon: "email",
        },
      ],
    },
    nav: {
      hero: "Inicio",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
    },
    hero: {
      title: "SOFTWARE",
      subtitle: "ENGINEER",
      description:
        "Apasionado por crear experiencias de usuario intuitivas y atractivas. Especializado en transformar ideas en productos hermosamente elaborados.",
      ctaPrimary: "Trabajemos juntos",
      ctaSecondary: "Ver proyectos recientes",
      metrics: [
        { value: "+6", label: "anos de experiencia" },
        { value: "+40", label: "proyectos concluídos" },
        { value: "+10", label: "clientes en todo el mundo" },
      ],
      stackCard: {
        title: "Tech Stack",
        categories: [
          {
            name: "Foundational",
            items: ["HTML", "CSS", "JavaScript", "TypeScript"],
          },
          {
            name: "Frontend",
            items: [
              "React",
              "Next.js",
              "Vite",
              "Tailwind CSS",
              "Redux Toolkit",
              "Storybook",
            ],
          },
          {
            name: "Mobile",
            items: ["React Native", "Expo"],
          },
          {
            name: "Backend",
            items: ["Node.js", "NestJS", "AdonisJS"],
          },
          {
            name: "DevOps & Tools",
            items: ["Git", "GitHub", "GitLab", "Docker", "Jenkins"],
          },
          {
            name: "Testing",
            items: ["Jest", "React Testing Library"],
          },
          {
            name: "Cloud & API",
            items: ["AWS", "Google Cloud Platform", "GraphQL"],
          },
          {
            name: "Architecture",
            items: ["Design Systems"],
          },
        ],
      },
    },
    projects: {
      title: "PROYECTOS",
      subtitle: "RECIENTES",
      intro:
        "Proyectos enfocados en impacto, escalabilidad y resultados de negocio medibles.",
      list: [
        {
          name: "micro-saas-template",
          type: "SaaS Template",
          href: "https://github.com/ryanalencar/micro-saas-template",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail del proyecto micro-saas-template",
        },
        {
          name: "spacetraveling",
          type: "Plataforma de contenido por suscripción",
          href: "https://github.com/ryanalencar/spacetraveling",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail del proyecto spacetraveling",
        },
        {
          name: "domain-events",
          type: "DDD y domain events in Node.js",
          href: "https://github.com/ryanalencar/domain-events",
          thumbnail: "/images/project-revenueos.svg",
          thumbnailAlt: "Thumbnail del proyecto domain-events",
        },
      ],
    },
    experience: {
      title: "6+ AÑOS DE",
      subtitle: "EXPERIENCIA",
      intro:
        "Trayectoria en ingeniería de software full stack con foco en productos escalables e impacto medible en negocio.",
      timeline: [
        {
          company: "Stefanini LATAM",
          role: "Senior Software Engineer",
          period: "jul 2023 — actualidad",
          summary:
            "Lideró la evolución del Design System de Banco do Nordeste con librería React reutilizable, APIs de tokens en NestJS y mejoras medibles de 40% en eficiencia y 25% menos tiempo de front-end.",
          highlights: [
            "Arquitectura e implementación de un Design System escalable para aplicaciones del BNB",
            "Construcción de librería React reutilizable para componentes UI",
            "Integración de design tokens para iOS, Android, React y React Native vía API NestJS",
            "Desarrollo de plataforma de documentación para desarrolladores con Docusaurus",
          ],
          impactMetrics: [
            { metric: "eficiencia de desarrollo", value: "+40%" },
            { metric: "tiempo de front-end", value: "-25%" },
            { metric: "feedback positivo de usuarios", value: "+15%" },
            { metric: "productividad de desarrolladores", value: "+30%" },
            { metric: "tiempo de onboarding", value: "-20%" },
          ],
          technologies: [
            "React",
            "NestJS",
            "Docusaurus",
            "Design Systems",
            "Design Tokens",
            "React Native",
            "iOS",
            "Android",
          ],
        },
        {
          company: "Tecla T",
          role: "Senior Software Engineer",
          period: "abr 2021 — jul 2023",
          summary:
            "Entregó soluciones full stack para múltiples clientes, incluyendo arquitectura Nx, chat en tiempo real con Socket.IO e implementaciones en Vite/React para productos financieros y comerciales.",
          highlights: [
            "Entrega de soluciones full stack para múltiples productos de clientes",
            "Proyecto Agora eu Pago con Nx, NestJS y Socket.IO para comunicación en tiempo real",
            "Modernización de flujo comercial de Febracis con React, Redux y TypeScript",
            "Proyecto Dominio Financeira con Adonis, Docker, PostgreSQL y front-end Vite/Redux",
          ],
          impactMetrics: [
            { metric: "proyectos destacados", value: "3" },
            { metric: "tiempo en el rol", value: "2a 4m" },
          ],
          technologies: [
            "Nx",
            "NestJS",
            "Socket.IO",
            "Vite",
            "Chakra UI",
            "Redux",
            "React Query",
            "React",
            "TypeScript",
            "Adonis",
            "Docker",
            "PostgreSQL",
            "Nginx",
          ],
        },
        {
          company: "Pasquali Solution",
          role: "Software Engineer | Front End",
          period: "nov 2020 — abr 2021",
          summary:
            "Construyó una arquitectura de micro frontends en React e integró Safe2Pay, aumentando 30% la eficiencia del flujo de compra de créditos y 25% las transacciones completadas.",
          highlights: [
            "Construcción de arquitectura de micro frontends con React",
            "Integración de Safe2Pay para pagos seguros",
            "Rediseño del flujo de compra de créditos para mayor conversión",
          ],
          impactMetrics: [
            { metric: "eficiencia del flujo de compra", value: "+30%" },
            { metric: "transacciones completadas", value: "+25%" },
          ],
          technologies: ["React", "Micro Frontends", "Safe2Pay"],
        },
        {
          company: "Dell Lead",
          role: "Software Engineer | Front End",
          period: "jun 2020 — nov 2020",
          summary:
            "Desarrolló una app educativa gamificada en React Native con foco en accesibilidad y UX, incrementando el engagement y la retención en 40%.",
          highlights: [
            "Desarrollo de app educativa en React Native con gamificación",
            "Aplicación de buenas prácticas de accesibilidad, UX y UI",
            "Trabajo colaborativo bajo metodología Scrum",
          ],
          impactMetrics: [
            { metric: "engagement y retención de conocimiento", value: "+40%" },
            { metric: "eficiencia de colaboración del equipo", value: "+25%" },
          ],
          technologies: ["React Native", "Accessibility", "UX", "UI", "Scrum"],
        },
        {
          company: "NEPEN",
          role: "Software Developer | Front End",
          period: "ene 2020 — jun 2020",
          summary:
            "Creó interfaces dinámicas para proyectos IoT con Angular y React.js, mejorando la velocidad de entrega en 25% y la satisfacción de usuarios en 40%.",
          highlights: [
            "Creación de interfaces dinámicas y responsivas para proyectos IoT",
            "Trabajo con Angular y React.js en equipo ágil",
            "Prototipos de alta fidelidad en Figma con enfoque en usuario",
          ],
          impactMetrics: [
            { metric: "interactividad y responsividad", value: "+30%" },
            { metric: "velocidad de entrega", value: "+25%" },
            { metric: "satisfacción de usuarios", value: "+40%" },
          ],
          technologies: ["Angular", "React.js", "Figma", "Scrum", "Agile"],
        },
        {
          company: "AVATAR Soluções Digitais",
          role: "Junior Software Developer | Full Stack",
          period: "ene 2019 — ene 2020",
          summary:
            "Entregó una plataforma e-commerce full stack con Next.js y Express.js, mejorando eficiencia operativa (40%), performance (35%) y tiempo de despliegue (20%).",
          highlights: [
            "Desarrollo de plataforma e-commerce full stack",
            "Implementación de gestión de usuarios para más de 1.000 personas",
            "Uso de SSR y SSG con Next.js para mejorar performance",
            "Optimización del proceso de despliegue con Docker",
          ],
          impactMetrics: [
            { metric: "eficiencia operativa", value: "+40%" },
            { metric: "usuarios impactados", value: "1000+" },
            { metric: "performance y tiempo de carga", value: "+35%" },
            { metric: "tiempo de despliegue", value: "-20%" },
            { metric: "satisfacción del cliente", value: "95%" },
          ],
          technologies: ["Next.js", "Express.js", "Docker", "SSR", "SSG"],
        },
      ],
    },
    education: {
      title: "formación",
      subtitle: "académica",
      intro:
        "Base sólida en ingeniería, seguridad y desarrollo full stack para respaldar decisiones técnicas de producto.",
      timeline: [
        {
          institution: "Instituto Federal de Ceará (IFCE)",
          degree: "Licenciatura",
          fieldOfStudy: "Ingeniería de Computación",
          period: "mar 2021 — mar 2026",
        },
        {
          institution: "Facultad Descomplica",
          degree: "MBA",
          fieldOfStudy: "Seguridad de la Información",
          period: "abr 2025 — abr 2026",
        },
        {
          institution: "Facultad Descomplica",
          degree: "Tecnólogo",
          fieldOfStudy: "Sistemas para Internet",
          period: "ene 2022 — jun 2024",
        },
        {
          institution: "Rocketseat",
          degree: "Certificación Profesional",
          fieldOfStudy: "Desarrollo Full Stack",
          period: "ene 2022 — ene 2023",
        },
        {
          institution: "EF English Live",
          degree: "Certificación",
          fieldOfStudy: "Enseñanza de Inglés para Hablantes de Otros Idiomas",
          period: "ene 2021 — ene 2022",
        },
      ],
    },
    contact: {
      title: "TRABAJEMOS",
      subtitle: "JUNTOS",
      intro: "Comparte tu desafío y responderé con próximos pasos claros.",
      cardDescription:
        "Consultoría y ejecución hands-on para acelerar resultados.",
      form: {
        name: "Nombre",
        email: "Email",
        service: "Servicio",
        message: "Mensaje",
        submit: "Enviar",
        serviceOptions: [
          "Desarrollo Web",
          "Arquitectura y Performance",
          "Mentoría Técnica",
          "Discovery de Producto",
        ],
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};
