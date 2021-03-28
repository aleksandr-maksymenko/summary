import React from 'react'
import { ExperienceType } from 'src/types'
import useExperience from './useExperience'

export default function Experience() {
  const { experience, title } = useExperience()
  const defaultExperienceClassName = 'experience'

  return (
    <div className={defaultExperienceClassName}>
      <h2 className={`${defaultExperienceClassName}__title`}>{title}</h2>
      <div className={`${defaultExperienceClassName}__container`}>
        {experience.map((work: ExperienceType) => (
          <React.Fragment key={work.company}>
            <h3 className={`${defaultExperienceClassName}__position`}>
              {work.position}
            </h3>
            <h4 className={`${defaultExperienceClassName}__company-name`}>
              {work.company}
            </h4>
            <div className={`${defaultExperienceClassName}__dates-container`}>
              <span>{work.period}</span>
              <span>{work.location}</span>
            </div>
            {work.description && <p>{work.description}</p>}
            <p>Achievements/Tasks</p>
            <ul className={`${defaultExperienceClassName}__about`}>
              {work.achievementsTasks.map(job => (
                <li
                  key={job.task}
                  className={`${defaultExperienceClassName}__about-item`}
                >
                  {job.task}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
