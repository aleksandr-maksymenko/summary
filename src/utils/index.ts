import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

export const getUseSelectorData = (objectName: string): object =>
  useSelector((state: RootState) => state[objectName])
