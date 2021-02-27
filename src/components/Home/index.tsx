import React from 'react'
import Head from 'next/head'
import About from '@components/About'
import InfoBlock from '@components/InfoBlock'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <About />
      <InfoBlock />
    </>
  )
}
