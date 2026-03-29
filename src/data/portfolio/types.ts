export type Locale = 'pt-BR' | 'en-US' | 'es-ES'

export type SocialLink = {
  label: string
  url: string
  ariaLabel: string
  icon: 'github' | 'linkedin' | 'twitter' | 'email'
}

export type PortfolioTranslation = {
  seo: {
    title: string
    description: string
    keywords: string
  }
  labels: {
    skip: string
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
    tools: string
    thoughts: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    metrics: Array<{ value: string; label: string }>
    creativeCard: {
      title: string
      items: string[]
    }
    stackCard: {
      title: string
      items: string[]
    }
  }
  projects: {
    title: string
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
    timeline: Array<{
      company: string
      role: string
      period: string
      summary: string
    }>
  }
  tools: {
    title: string
    intro: string
    list: string[]
  }
  thoughts: {
    title: string
    intro: string
    posts: Array<{
      title: string
      description: string
      date: string
      readTime: string
      href: string
    }>
  }
  contact: {
    title: string
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
