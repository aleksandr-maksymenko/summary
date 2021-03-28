import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const useExperience = () => {
  const { experience, title } = useSelector((state: RootState) => ({
    experience: state.experience,
    title: state.experienceTitle,
  }))

  return {
    experience,
    title,
  }
}

export default useExperience
