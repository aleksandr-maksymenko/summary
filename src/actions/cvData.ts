import { CvDataType } from 'src/types'
import { GET_CV_DATA } from './types'

export const cvData = (data: CvDataType) => ({
  type: GET_CV_DATA,
  payload: { data },
})
