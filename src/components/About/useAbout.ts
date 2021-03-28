import { getUseSelectorData } from 'src/utils'

export const useAbout = () => {
  const name = getUseSelectorData('name')
  const position = getUseSelectorData('position')
  const bio = getUseSelectorData('bio')
  const avatar = getUseSelectorData('avatar')

  return {
    name,
    position,
    bio,
    avatar,
  }
}
