export type ImageType = {
  url: string
  width: number
  height: number
  alternativeText: string
}

export type AvatarType = {
  url: string
  width: number
  height: number
  alternativeText: string
}

export type ContactType = {
  text: string
  link: string
  icon: ImageType
  type: string
}

export type AchievementsTasks = {
  task: string
}

export type ExperienceType = {
  company: string
  position: string
  period: string
  location: string
  achievementsTasks: AchievementsTasks[]
  contact?: string | null
  description?: string | null
}

export type CvDataType = {
  name: string
  position: string
  bio: string
  avatar: AvatarType
  contacts: ContactType[]
  experience: ExperienceType[]
  experienceTitle: string
}
