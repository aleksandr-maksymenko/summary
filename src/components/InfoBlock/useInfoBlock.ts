import { ContactType } from 'src/types'
import { getUseSelectorData } from 'src/utils'

const useInfoBlock = () => {
  const contacts = getUseSelectorData('contacts') as ContactType[]

  return { contacts }
}

export default useInfoBlock
