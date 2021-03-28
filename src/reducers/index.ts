import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import { GET_CV_DATA, CvData } from '@actions/types'
import initialState from 'src/__mocks__'

export const reducer = (state = initialState, action: CvData) => {
  if (action.type === GET_CV_DATA) {
    return {
      ...state,
      name: action.payload.data.name,
      position: action.payload.data.position,
      bio: action.payload.data.bio,
      experienceTitle: action.payload.data.experienceTitle,
      avatar: {
        url: action.payload.data.avatar.url,
        width: action.payload.data.avatar.width,
        height: action.payload.data.avatar.height,
        alternativeText: action.payload.data.avatar.alternativeText,
      },
      contacts: action.payload.data.contacts.map(contact => ({
        type: contact.type,
        icon: contact.icon,
        link: contact.link,
        text: contact.text,
      })),
      experience: action.payload.data.experience.map(exp => ({
        company: exp.company,
        position: exp.position,
        period: exp.period,
        location: exp.location,
        achievementsTasks: exp.achievementsTasks.map(task => ({
          task: task.task,
        })),
      })),
    }
  }

  return { ...state }
}

export function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  )
}
