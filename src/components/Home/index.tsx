import React from 'react'
import Head from 'next/head'
import About from '@components/About'
import InfoBlock from '@components/InfoBlock'
import AsideInfo from '@components/AsideInfo'

const skills = [
  {
    text: 'React -',
    period: '3 years',
  },
  {
    text: 'React Native -',
    period: '1 year',
  },
  {
    text: 'Redux -',
    period: '2 years',
  },
  {
    text: 'Mobx -',
    period: '1 year',
  },
  {
    text: 'Mobx-State-Tree -',
    period: '1 year',
  },
  {
    text: 'HTML/CSS -',
    period: '4 years',
  },
  {
    text: 'JavaScript -',
    period: '3 years',
  },
  {
    text: 'TypeScript -',
    period: '2 years',
  },
  {
    text: 'Node.js/Express -',
    period: '0.5 year',
  },
  {
    text: 'Next.js -',
    period: '1 year',
  },
]

const interests = [
  { text: 'Web development' },
  { text: 'Snow Boarding' },
  { text: 'Terminator' },
  { text: 'Terminator' },
  { text: 'Rock (Music)' },
]

const links = [
  {
    text: 'https://app.farmforesight.com/login',
    href:
      'https://app.farmforesight.com/login (login: sky3107@mfsa.com, pass: 123)',
  },
]

const achievements = [
  {
    text: 'some text',
  },
]

const languages = [
  {
    text: 'Russian',
    proficiency: 'Native or Bilingual Proficiency',
  },
]

export default function Home() {
  const defaultHomeClassName = 'home'

  return (
    <>
      <About />
      <InfoBlock />

      <main className={`${defaultHomeClassName}__main`}>
        <section>exp</section>
        <aside>
          <AsideInfo
            type="block"
            title="skills"
            defaultClassName="skills"
            list={skills}
          />
          <AsideInfo
            type="block"
            title="interests"
            defaultClassName="interests"
            list={interests}
          />
          <AsideInfo
            type="link"
            title="personal projects"
            defaultClassName="projects"
            list={links}
          />
          <AsideInfo
            type="link"
            title="Achievements"
            defaultClassName="achievements"
            list={achievements}
          />
          <AsideInfo
            type="link"
            title="languages"
            defaultClassName="languages"
            list={languages}
          />
        </aside>
      </main>
    </>
  )
}
