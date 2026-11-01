export type Language = 'id' | 'en'

export interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  description: string
  type: 'dashboard' | 'mobile' | 'web'
  liveUrl?: string
  githubUrl?: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ExperienceItem {
  period: string
  role: string
  place: string
  description: string
}

export interface SkillPill {
  name: string
  color: 'orange' | 'blue' | 'black' | 'yellow' | 'pink' | 'green'
}

export interface PortfolioContent {
  nav: {
    about: string
    workflow: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    roleAccent: string
    awardText: string
    availableText: string
    tagline: string
    honorsBadge: string
    honorsSub: string
    btnCv: string
    btnContact: string
  }
  featured: {
    badge: string
    explore: string
    card1Badge: string
    card1Title: string
    card1Desc: string
    card1Score: string
    card2Badge: string
    card2Title: string
    card2Desc: string
    stat1Label: string
    stat2Label: string
    stat3Label: string
  }
  about: {
    tag: string
    headline: string
    description: string
    eduLabel: string
    eduVal: string
    focusLabel: string
    focusVal: string
    locLabel: string
    locVal: string
    emailLabel: string
  }
  skills: SkillPill[]
  process: {
    tag: string
    title: string
    steps: ProcessStep[]
    expTag: string
    expTitle: string
    expSub: string
    experiences: ExperienceItem[]
  }
  works: {
    tag: string
    title: string
    subtitle: string
    projects: Project[]
  }
  contact: {
    tag: string
    title: string
    desc: string
    namePlaceholder: string
    emailPlaceholder: string
    msgPlaceholder: string
    submitBtn: string
    successTitle: string
    successSub: string
    copyEmail: string
  }
  footer: {
    rights: string
    backToTop: string
  }
}

export interface SocialLinks {
  email: string
  phone: string
  whatsappUrl: string
  location: string
  instagram: string
  github: string
  linkedin: string
  profileImage: string
  fallbackImage: string
  cvUrl: string
}
