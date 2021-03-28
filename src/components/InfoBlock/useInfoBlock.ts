import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { ContactType } from 'src/types'

const useInfoBlock = () => {
  const contacts = useSelector(
    (state: RootState) => state.contacts,
  ) as ContactType[]

  return { contacts }
}

export default useInfoBlock
