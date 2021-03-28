import { CvDataType } from 'src/types'

export const GET_CV_DATA = 'GET_CV_DATA'

export type CvData = {
  type: typeof GET_CV_DATA
  payload: {
    data: CvDataType
  }
}
