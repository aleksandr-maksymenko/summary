import axios from 'axios'
import { cvData } from '@actions/cvData'
import { AppDispatch } from 'src/store'

export default async function getCvData(dispatch: AppDispatch) {
  const { data } = await axios.get('https://my-summary.herokuapp.com/cv')

  dispatch(cvData(data))
}
