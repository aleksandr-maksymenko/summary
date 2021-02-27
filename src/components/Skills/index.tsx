import React from 'react'

const skills = [
  'React - 3 years',
  'React Native - 1 year',
  'Redux - 3 years',
  'Mobx - 1 year',
  'Mobx-State-Tree - 1 year',
  'HTML/CSS - 4 years',
  'JavaScript - 3 years',
  'Typescript - 2 years',
  'Node.js/Express - 0.5 year',
  'Next.js - 1 year',
]

export default function Skills() {
  const defaultSkillsClassName = 'skills'

  return (
    <aside className={defaultSkillsClassName}>
      <h3 className={`${defaultSkillsClassName}__title`}>Skills</h3>
      <ul className={`${defaultSkillsClassName}__container`}>
        {skills.map(skill => (
          <li key={skill} className={`${defaultSkillsClassName}__skill`}>
            {skill}
          </li>
        ))}
      </ul>
    </aside>
  )
}
