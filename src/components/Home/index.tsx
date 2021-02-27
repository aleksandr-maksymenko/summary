import React from 'react'
import Head from 'next/head'
import About from '@components/About'
import InfoBlock from '@components/InfoBlock'
import Skills from '@components/Skills'

export default function Home() {
  const defaultHomeClassName = 'home'

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <About />
      <InfoBlock />

      <main className={`${defaultHomeClassName}__main`}>
        <section>exp</section>
        <Skills />
      </main>
    </>
  )
}
