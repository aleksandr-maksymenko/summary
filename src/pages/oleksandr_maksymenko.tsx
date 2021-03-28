import React from 'react'
import getCvData from '@api/getCvData'

import { initializeStore } from '../store'

import Home from '@components/Home'

export default function Index() {
  return <Home />
}

export async function getServerSideProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  await getCvData(dispatch)

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  }
}
