import type { PortfolioTranslation, Locale } from './types'

export const localeOptions: Array<{ code: Locale; label: string }> = [
  { code: 'pt-BR', label: '🇧🇷 PT' },
  { code: 'en-US', label: '🇺🇸 EN' },
  { code: 'es-ES', label: '🇪🇸 ES' },
]

export const portfolioContent: Record<Locale, PortfolioTranslation> = {
  'pt-BR': {
    seo: {
      title: 'Software Engineer Sênior | Produtos escaláveis e alta conversão',
      description:
        'Landing page de autoridade para Software Engineer sênior com foco em performance, arquitetura escalável e captação de clientes.',
      keywords:
        'software engineer sênior, react, next.js, typescript, landing page de conversão, desenvolvimento web',
    },
    labels: {
      skip: 'Pular para o conteúdo principal',
      language: 'Idioma',
      theme: 'Tema',
      dark: 'Dark',
      light: 'Light',
      openProject: 'Abrir projeto',
      readArticle: 'Ler artigo',
      timeline: 'Linha do tempo profissional',
      socialLinks: 'Redes sociais',
    },
    profile: {
      name: 'Ryan Alencar',
      role: 'Software Engineer',
      bio: 'Especialista em produtos digitais escaláveis, performance e experiência premium.',
      location: 'Fortaleza - CE, Brasil · Remoto global',
      availability: 'Disponível para projetos estratégicos',
      avatarAlt: 'Foto profissional de Ryan Alencar',
      socials: [
        {
          label: 'GitHub',
          url: 'https://github.com/ryanalencar',
          ariaLabel: 'Abrir GitHub de Ryan Alencar',
          icon: 'github',
        },
        {
          label: 'LinkedIn',
          url: 'https://linkedin.com/in/ryanalencar',
          ariaLabel: 'Abrir LinkedIn de Ryan Alencar',
          icon: 'linkedin',
        },
        {
          label: 'Instagram',
          url: 'https://instagram.com/ryanalencar.dev',
          ariaLabel: 'Abrir Instagram de Ryan Alencar',
          icon: 'instagram',
        },
        {
          label: 'Email',
          url: 'mailto:ryanalencar.dev@gmail.com',
          ariaLabel: 'Enviar email para Ryan Alencar',
          icon: 'email',
        },
      ],
    },
    nav: {
      hero: 'Início',
      projects: 'Projetos',
      experience: 'Experiência',
      tools: 'Ferramentas',
      thoughts: 'Insights',
      contact: 'Contato',
    },
    hero: {
      title: 'SOFTWARE ENGINEER',
      subtitle: 'Building scalable, high-performance digital products',
      ctaPrimary: 'Let’s Work Together',
      ctaSecondary: 'Ver projetos recentes',
      metrics: [
        { value: '+12', label: 'years experience' },
        { value: '+46', label: 'projects completed' },
        { value: '+20', label: 'clients worldwide' },
      ],
      creativeCard: {
        title: 'Creative Skills',
        items: ['Motion', 'UI Strategy', 'Design Direction'],
      },
      stackCard: {
        title: 'Tech Stack',
        items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma'],
      },
    },
    projects: {
      title: 'RECENT PROJECTS',
      intro: 'Projetos orientados a impacto, escalabilidade e resultados de negócio.',
      list: [
        {
          name: 'RevenueOS',
          type: 'SaaS Platform',
          href: 'https://example.com/revenue-os',
          thumbnail: '/images/project-revenueos.svg',
          thumbnailAlt: 'Thumbnail do projeto RevenueOS',
        },
        {
          name: 'Pulse Commerce',
          type: 'E-commerce App',
          href: 'https://example.com/pulse-commerce',
          thumbnail: '/images/project-pulse-commerce.svg',
          thumbnailAlt: 'Thumbnail do projeto Pulse Commerce',
        },
        {
          name: 'ScaleBoard',
          type: 'Analytics Dashboard',
          href: 'https://example.com/scaleboard',
          thumbnail: '/images/project-scaleboard.svg',
          thumbnailAlt: 'Thumbnail do projeto ScaleBoard',
        },
      ],
    },
    experience: {
      title: '12 YEARS OF EXPERIENCE',
      timeline: [
        {
          company: 'Nubank',
          role: 'Senior Software Engineer',
          period: '2023 — Atual',
          summary: 'Arquitetura e otimização de produtos financeiros críticos com foco em escala.',
        },
        {
          company: 'Stone',
          role: 'Software Engineer',
          period: '2020 — 2023',
          summary: 'Criação de APIs resilientes e fluxos de pagamento de alta disponibilidade.',
        },
        {
          company: 'Global Freelance',
          role: 'Lead Full Stack Engineer',
          period: '2014 — 2020',
          summary: 'Entrega de produtos digitais para empresas nos EUA, Europa e América Latina.',
        },
      ],
    },
    tools: {
      title: 'PREMIUM TOOLS',
      intro: 'Ferramentas que aceleram discovery, design e entrega em produção.',
      list: ['Framer', 'Figma', 'Notion', 'ChatGPT', 'Next.js'],
    },
    thoughts: {
      title: 'DESIGN THOUGHTS',
      intro: 'Publicações sobre engenharia, produto e experiência digital.',
      posts: [
        {
          title: 'Como escalar front-end sem perder velocidade',
          description: 'Decisões de arquitetura para crescer com previsibilidade.',
          date: '22 mar 2026',
          readTime: '6 min',
          href: 'https://example.com/post-1',
        },
        {
          title: 'Performance como estratégia de conversão',
          description: 'O impacto direto de latência na aquisição e retenção.',
          date: '11 fev 2026',
          readTime: '5 min',
          href: 'https://example.com/post-2',
        },
        {
          title: 'Design systems para times de alta entrega',
          description: 'Padronização que melhora consistência e produtividade.',
          date: '08 jan 2026',
          readTime: '7 min',
          href: 'https://example.com/post-3',
        },
      ],
    },
    contact: {
      title: 'LET’S WORK TOGETHER',
      intro: 'Conte um pouco sobre o desafio e eu retorno com próximos passos objetivos.',
      cardDescription: 'Atuação consultiva e execução hands-on para acelerar resultados.',
      form: {
        name: 'Nome',
        email: 'Email',
        service: 'Serviço',
        message: 'Mensagem',
        submit: 'Submit',
        serviceOptions: [
          'Desenvolvimento Web',
          'Arquitetura & Performance',
          'Mentoria Técnica',
          'Discovery de Produto',
        ],
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },
  'en-US': {
    seo: {
      title: 'Senior Software Engineer | Scalable and high-converting products',
      description:
        'Authority-focused landing page for a senior software engineer with emphasis on performance, scalability, and client acquisition.',
      keywords:
        'senior software engineer, react, next.js, typescript, conversion landing page, web development',
    },
    labels: {
      skip: 'Skip to main content',
      language: 'Language',
      theme: 'Theme',
      dark: 'Dark',
      light: 'Light',
      openProject: 'Open project',
      readArticle: 'Read article',
      timeline: 'Professional timeline',
      socialLinks: 'Social links',
    },
    profile: {
      name: 'Ryan Alencar',
      role: 'Software Engineer',
      bio: 'Specialized in scalable digital products, high performance, and premium user experience.',
      location: 'Fortaleza - CE, Brazil · Remote worldwide',
      availability: 'Available for strategic projects',
      avatarAlt: 'Professional portrait of Ryan Alencar',
      socials: [
        {
          label: 'GitHub',
          url: 'https://github.com/ryanalencar',
          ariaLabel: 'Open Ryan Alencar GitHub profile',
          icon: 'github',
        },
        {
          label: 'LinkedIn',
          url: 'https://linkedin.com/in/ryanalencar',
          ariaLabel: 'Open Ryan Alencar LinkedIn profile',
          icon: 'linkedin',
        },
        {
          label: 'Instagram',
          url: 'https://instagram.com/ryanalencar.dev',
          ariaLabel: 'Open Ryan Alencar Instagram profile',
          icon: 'instagram',
        },
        {
          label: 'Email',
          url: 'mailto:ryanalencar.dev@gmail.com',
          ariaLabel: 'Send email to Ryan Alencar',
          icon: 'email',
        },
      ],
    },
    nav: {
      hero: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      tools: 'Tools',
      thoughts: 'Thoughts',
      contact: 'Contact',
    },
    hero: {
      title: 'SOFTWARE ENGINEER',
      subtitle: 'Building scalable, high-performance digital products',
      ctaPrimary: 'Let’s Work Together',
      ctaSecondary: 'View recent projects',
      metrics: [
        { value: '+12', label: 'years experience' },
        { value: '+46', label: 'projects completed' },
        { value: '+20', label: 'clients worldwide' },
      ],
      creativeCard: {
        title: 'Creative Skills',
        items: ['Motion', 'UI Strategy', 'Design Direction'],
      },
      stackCard: {
        title: 'Tech Stack',
        items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma'],
      },
    },
    projects: {
      title: 'RECENT PROJECTS',
      intro: 'Projects focused on impact, scalability, and measurable business outcomes.',
      list: [
        {
          name: 'RevenueOS',
          type: 'SaaS Platform',
          href: 'https://example.com/revenue-os',
          thumbnail: '/images/project-revenueos.svg',
          thumbnailAlt: 'RevenueOS project thumbnail',
        },
        {
          name: 'Pulse Commerce',
          type: 'E-commerce App',
          href: 'https://example.com/pulse-commerce',
          thumbnail: '/images/project-pulse-commerce.svg',
          thumbnailAlt: 'Pulse Commerce project thumbnail',
        },
        {
          name: 'ScaleBoard',
          type: 'Analytics Dashboard',
          href: 'https://example.com/scaleboard',
          thumbnail: '/images/project-scaleboard.svg',
          thumbnailAlt: 'ScaleBoard project thumbnail',
        },
      ],
    },
    experience: {
      title: '12 YEARS OF EXPERIENCE',
      timeline: [
        {
          company: 'Nubank',
          role: 'Senior Software Engineer',
          period: '2023 — Present',
          summary: 'Architecture and optimization of critical financial products at scale.',
        },
        {
          company: 'Stone',
          role: 'Software Engineer',
          period: '2020 — 2023',
          summary: 'Built resilient APIs and high-availability payment experiences.',
        },
        {
          company: 'Global Freelance',
          role: 'Lead Full Stack Engineer',
          period: '2014 — 2020',
          summary: 'Delivered digital products for clients across the US, Europe, and LATAM.',
        },
      ],
    },
    tools: {
      title: 'PREMIUM TOOLS',
      intro: 'Tools that accelerate discovery, design, and production delivery.',
      list: ['Framer', 'Figma', 'Notion', 'ChatGPT', 'Next.js'],
    },
    thoughts: {
      title: 'DESIGN THOUGHTS',
      intro: 'Articles about engineering, product strategy, and digital experience.',
      posts: [
        {
          title: 'Scaling front-end architecture without losing speed',
          description: 'Practical patterns to maintain momentum as teams grow.',
          date: 'Mar 22, 2026',
          readTime: '6 min',
          href: 'https://example.com/post-1',
        },
        {
          title: 'Performance as a conversion strategy',
          description: 'How latency influences acquisition and retention metrics.',
          date: 'Feb 11, 2026',
          readTime: '5 min',
          href: 'https://example.com/post-2',
        },
        {
          title: 'Design systems for high-output teams',
          description: 'Consistency and speed through shared UI foundations.',
          date: 'Jan 08, 2026',
          readTime: '7 min',
          href: 'https://example.com/post-3',
        },
      ],
    },
    contact: {
      title: 'LET’S WORK TOGETHER',
      intro: 'Share your challenge and I will reply with clear next steps.',
      cardDescription: 'Consulting plus hands-on execution to accelerate outcomes.',
      form: {
        name: 'Name',
        email: 'Email',
        service: 'Service',
        message: 'Message',
        submit: 'Submit',
        serviceOptions: ['Web Development', 'Architecture & Performance', 'Technical Mentoring', 'Product Discovery'],
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  'es-ES': {
    seo: {
      title: 'Software Engineer Senior | Productos escalables y alta conversión',
      description:
        'Landing page de autoridad para Software Engineer senior enfocada en rendimiento, escalabilidad y captación de clientes.',
      keywords:
        'software engineer senior, react, next.js, typescript, landing de conversión, desarrollo web',
    },
    labels: {
      skip: 'Saltar al contenido principal',
      language: 'Idioma',
      theme: 'Tema',
      dark: 'Dark',
      light: 'Light',
      openProject: 'Abrir proyecto',
      readArticle: 'Leer artículo',
      timeline: 'Línea de tiempo profesional',
      socialLinks: 'Redes sociales',
    },
    profile: {
      name: 'Ryan Alencar',
      role: 'Software Engineer',
      bio: 'Especialista en productos digitales escalables, alto rendimiento y experiencia premium.',
      location: 'Fortaleza - CE, Brasil · Remoto global',
      availability: 'Disponible para proyectos estratégicos',
      avatarAlt: 'Foto profesional de Ryan Alencar',
      socials: [
        {
          label: 'GitHub',
          url: 'https://github.com/ryanalencar',
          ariaLabel: 'Abrir perfil de GitHub de Ryan Alencar',
          icon: 'github',
        },
        {
          label: 'LinkedIn',
          url: 'https://linkedin.com/in/ryanalencar',
          ariaLabel: 'Abrir perfil de LinkedIn de Ryan Alencar',
          icon: 'linkedin',
        },
        {
          label: 'Instagram',
          url: 'https://instagram.com/ryanalencar.dev',
          ariaLabel: 'Abrir perfil de Instagram de Ryan Alencar',
          icon: 'instagram',
        },
        {
          label: 'Email',
          url: 'mailto:ryanalencar.dev@gmail.com',
          ariaLabel: 'Enviar email a Ryan Alencar',
          icon: 'email',
        },
      ],
    },
    nav: {
      hero: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      tools: 'Herramientas',
      thoughts: 'Ideas',
      contact: 'Contacto',
    },
    hero: {
      title: 'SOFTWARE ENGINEER',
      subtitle: 'Building scalable, high-performance digital products',
      ctaPrimary: 'Let’s Work Together',
      ctaSecondary: 'Ver proyectos recientes',
      metrics: [
        { value: '+12', label: 'years experience' },
        { value: '+46', label: 'projects completed' },
        { value: '+20', label: 'clients worldwide' },
      ],
      creativeCard: {
        title: 'Creative Skills',
        items: ['Motion', 'UI Strategy', 'Design Direction'],
      },
      stackCard: {
        title: 'Tech Stack',
        items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma'],
      },
    },
    projects: {
      title: 'RECENT PROJECTS',
      intro: 'Proyectos enfocados en impacto, escalabilidad y resultados de negocio medibles.',
      list: [
        {
          name: 'RevenueOS',
          type: 'SaaS Platform',
          href: 'https://example.com/revenue-os',
          thumbnail: '/images/project-revenueos.svg',
          thumbnailAlt: 'Miniatura del proyecto RevenueOS',
        },
        {
          name: 'Pulse Commerce',
          type: 'E-commerce App',
          href: 'https://example.com/pulse-commerce',
          thumbnail: '/images/project-pulse-commerce.svg',
          thumbnailAlt: 'Miniatura del proyecto Pulse Commerce',
        },
        {
          name: 'ScaleBoard',
          type: 'Analytics Dashboard',
          href: 'https://example.com/scaleboard',
          thumbnail: '/images/project-scaleboard.svg',
          thumbnailAlt: 'Miniatura del proyecto ScaleBoard',
        },
      ],
    },
    experience: {
      title: '12 YEARS OF EXPERIENCE',
      timeline: [
        {
          company: 'Nubank',
          role: 'Senior Software Engineer',
          period: '2023 — Actualidad',
          summary: 'Arquitectura y optimización de productos financieros críticos con foco en escala.',
        },
        {
          company: 'Stone',
          role: 'Software Engineer',
          period: '2020 — 2023',
          summary: 'Desarrollo de APIs resilientes y experiencias de pago de alta disponibilidad.',
        },
        {
          company: 'Global Freelance',
          role: 'Lead Full Stack Engineer',
          period: '2014 — 2020',
          summary: 'Entrega de productos digitales para clientes en EE. UU., Europa y LATAM.',
        },
      ],
    },
    tools: {
      title: 'PREMIUM TOOLS',
      intro: 'Herramientas que aceleran discovery, diseño y entrega en producción.',
      list: ['Framer', 'Figma', 'Notion', 'ChatGPT', 'Next.js'],
    },
    thoughts: {
      title: 'DESIGN THOUGHTS',
      intro: 'Publicaciones sobre ingeniería, producto y experiencia digital.',
      posts: [
        {
          title: 'Escalar arquitectura front-end sin perder velocidad',
          description: 'Patrones prácticos para mantener ritmo al crecer equipos.',
          date: '22 mar 2026',
          readTime: '6 min',
          href: 'https://example.com/post-1',
        },
        {
          title: 'Rendimiento como estrategia de conversión',
          description: 'Cómo la latencia impacta adquisición y retención.',
          date: '11 feb 2026',
          readTime: '5 min',
          href: 'https://example.com/post-2',
        },
        {
          title: 'Design systems para equipos de alta entrega',
          description: 'Consistencia y velocidad a partir de bases UI compartidas.',
          date: '08 ene 2026',
          readTime: '7 min',
          href: 'https://example.com/post-3',
        },
      ],
    },
    contact: {
      title: 'LET’S WORK TOGETHER',
      intro: 'Comparte tu desafío y responderé con próximos pasos claros.',
      cardDescription: 'Consultoría y ejecución hands-on para acelerar resultados.',
      form: {
        name: 'Nombre',
        email: 'Email',
        service: 'Servicio',
        message: 'Mensaje',
        submit: 'Submit',
        serviceOptions: ['Desarrollo Web', 'Arquitectura y Performance', 'Mentoría Técnica', 'Discovery de Producto'],
      },
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
}
