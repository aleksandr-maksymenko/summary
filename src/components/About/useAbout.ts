import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

export const useAbout = () => {
  const { name, position, bio, avatar } = useSelector((store: RootState) => ({
    name: store.name,
    email: store.email,
    bio: store.bio,
    avatar: store.avatar,
    position: store.position,
  }))

  return {
    name,
    position,
    bio,
    avatar,
  }
}
