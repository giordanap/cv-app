export type Locale = 'es' | 'en'
export type ProfileMode = 'dotnet' | 'node'

export type LocalizedText = Record<Locale, string>

export interface PersonInfo {
  fullName: string
  baseTitle: string
  email: string
  phone: string
}

export interface ContactLinks {
  github: string
  twitter: string
  linkedin: string
  whatsapp?: string
}

export interface EmphasisByLocale {
  es?: string[]
  en?: string[]
}

export interface EmploymentBullet {
  text: LocalizedText
  emphasis?: EmphasisByLocale
}

export interface ExpertiseGroup {
  title: LocalizedText
  items: LocalizedText[]
}

export interface HobbyItem {
  text: LocalizedText
}

export interface LanguageSkill {
  name: LocalizedText
  level: number
}

export interface SummaryContent {
  common: LocalizedText[]
  byProfile: Record<ProfileMode, LocalizedText[]>
}

export interface EmploymentEntry {
  id: string
  company: string
  location: LocalizedText
  dateRange: LocalizedText
  role: {
    common: LocalizedText
    byProfile?: Partial<Record<ProfileMode, LocalizedText>>
  }
  bullets: {
    common: EmploymentBullet[]
    byProfile?: Partial<Record<ProfileMode, EmploymentBullet[]>>
  }
  stack: Record<ProfileMode, string[]>
}

export interface EducationEntry {
  dateRange: LocalizedText
  institution: string
  location: string
  degree: LocalizedText
  field?: LocalizedText
}

export interface CvLabels {
  contact: string
  expertise: string
  hobbies: string
  languages: string
  summary: string
  employment: string
  education: string
  references: string
  referencesText: string
  downloadAria: string
  languageSwitch: string
  profileSwitch: string
  toneSwitch: string
}

export interface CvDataset {
  person: PersonInfo
  links: ContactLinks
  expertise: {
    common: ExpertiseGroup[]
    byProfile: Partial<Record<ProfileMode, ExpertiseGroup[]>>
  }
  hobbies: HobbyItem[]
  languages: LanguageSkill[]
  summary: SummaryContent
  employment: EmploymentEntry[]
  education: EducationEntry[]
  labels: Record<Locale, CvLabels>
}

export interface ResolvedEmploymentBullet {
  text: string
  emphasis: string[]
}

export interface ResolvedEmploymentEntry {
  id: string
  company: string
  location: string
  dateRange: string
  role: string
  bullets: ResolvedEmploymentBullet[]
  stack: string[]
}

export interface ResolvedCv {
  locale: Locale
  profile: ProfileMode
  labels: CvLabels
  person: PersonInfo
  links: ContactLinks
  expertise: { title: string; items: string[] }[]
  hobbies: string[]
  languages: { name: string; level: number }[]
  summary: string[]
  employment: ResolvedEmploymentEntry[]
  education: { dateRange: string; institution: string; location: string; degree: string; field?: string }[]
}
