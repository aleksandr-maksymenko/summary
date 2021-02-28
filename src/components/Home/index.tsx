import React from 'react'
import Head from 'next/head'
import About from '@components/About'
import InfoBlock from '@components/InfoBlock'
import AsideInfo from '@components/AsideInfo'

const skills = [
  'React - 3 years',
  'React Native - 1 year',
  'Redux - 2 years',
  'Mobx - 1 year',
  'Mobx-State-Tree - 1 year',
  'HTML/CSS - 4 years',
  'JavaScript - 3 years',
  'Typescript - 2 years',
  'Node.js/Express - 0.5 year',
  'Next.js - 1 year',
]

const interests = [
  'Web development',
  'Snow Boarding',
  'Terminator',
  'Rock (Music)',
]

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
        <aside>
          <AsideInfo type="Skills" defaultClassName="skills" list={skills} />
          <AsideInfo
            type="interests"
            defaultClassName="interests"
            list={interests}
          />
        </aside>
      </main>
    </>
  )
}
