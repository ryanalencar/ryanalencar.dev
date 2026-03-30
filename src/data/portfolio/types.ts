export type Locale = 'pt-BR' | 'en-US' | 'es-ES'

export type SocialLink = {
  label: string
  url: string
  ariaLabel: string
  icon: 'github' | 'linkedin' | 'instagram' | 'email'
}

export type PortfolioTranslation = {
  seo: {
    title: string
    description: string
    keywords: string
  }
  labels: {
    language: string
    theme: string
    dark: string
    light: string
    openProject: string
    readArticle: string
    timeline: string
    socialLinks: string
  }
  profile: {
    name: string
    role: string
    bio: string
    location: string
    availability: string
    avatarAlt: string
    socials: SocialLink[]
  }
  nav: {
    hero: string
    projects: string
    experience: string
    education: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    metrics: Array<{ value: string; label: string }>
    stackCard: {
      title: string
      categories: Array<{
        name: string
        items: string[]
      }>
    }
  }
  projects: {
    title: string
    subtitle: string
    intro: string
    list: Array<{
      name: string
      type: string
      href: string
      thumbnail: string
      thumbnailAlt: string
    }>
  }
  experience: {
    title: string
    subtitle: string
    intro: string
    timeline: Array<{
      company: string
      role: string
      period: string
      summary: string
      highlights: string[]
      impactMetrics: Array<{
        metric: string
        value: string
      }>
      technologies: string[]
    }>
  }
  education: {
    title: string
    subtitle: string
    intro: string
    timeline: Array<{
      institution: string
      degree: string
      fieldOfStudy: string
      period: string
    }>
  }
  contact: {
    title: string
    subtitle: string
    intro: string
    cardDescription: string
    form: {
      name: string
      email: string
      service: string
      message: string
      submit: string
      serviceOptions: string[]
    }
  }
  footer: {
    rights: string
  }
}
