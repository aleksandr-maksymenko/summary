import { CvDataType } from 'src/types'

const initialState: CvDataType = {
  bio: 'bio',
  position: 'position',
  name: 'name',
  experienceTitle: 'experienceTitle',
  contacts: [
    {
      type: 'type',
      icon: {
        url: 'url',
        width: 1,
        height: 1,
        alternativeText: 'alternativeText',
      },
      link: 'link',
      text: 'text',
    },
  ],
  experience: [
    {
      company: 'company',
      position: 'position',
      period: 'period',
      location: 'location',
      contact: null,
      description: null,
      achievementsTasks: [
        {
          task: 'task',
        },
      ],
    },
  ],
  avatar: {
    alternativeText: '',
    width: 3088,
    height: 2316,
    url: '/uploads/IMG_1342_183de1a67b.jpg',
  },
}

export default initialState
