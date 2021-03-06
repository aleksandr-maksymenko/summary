import React from 'react'

const exp = [
  {
    position: 'Front end engineer',
    companyName: 'Kyivstar',
    date: '05/2020 – now',
    career: '',
    location: 'Kiev, Ukraine',
    jobDescription: [
      {
        id: 1,
        text: 'Create design system',
      },
      {
        id: 2,
        text: 'Create main page for the company',
      },
    ],
  },
  {
    position: 'Front end developer',
    companyName: 'Opinov8',
    date: '07/2019 – 05/2020',
    career: '',
    location: 'Kiev, Ukraine',
    jobDescription: [
      {
        id: 1,
        text:
          'I created a mobile app based on React Native. My job was created UI components based on the React, integration server API with these components, and view API data through React Native components',
      },
      {
        id: 2,
        text: 'I wrote native (IOS Android) native module',
      },
    ],
  },
  {
    position: 'Front end developer',
    companyName: 'Axon',
    date: '05/2018 – 06/2019',
    location: 'Kiev, Ukraine',
    career:
      'The company creates modern mobile web apps based on React, Angular, on the client-side, Java, PHP, GO on the backend-side',
    jobDescription: [
      {
        id: 1,
        text:
          'I created a simulation game for agrarian companies to create offline-first PWA based on React. You can look at app.farmforesight.com from Personal Projects. All client logic was on my side. Login: sky3107@mfsa.com. Password: 123',
      },
      {
        id: 2,
        text:
          'I created client and server-side for the interior project with Angular and Nodejs (Nestjs).',
      },
      {
        id: 2,
        text: 'Create screaming web service.',
      },
    ],
  },
  {
    position: 'Front end developer',
    companyName: 'D2 Digital',
    date: '07/2017 – 04/2018',
    location: 'Kiev, Ukraine',
    career:
      'The company creates web sites based on HTML/CSS/JS, React, Angular on the client-side, PHP on the backend-side',
    jobDescription: [
      {
        id: 1,
        text: 'I created web pages based on HTML/CSS/JS.',
      },
      {
        id: 2,
        text: 'I created web pages based on React/Angular',
      },
      {
        id: 2,
        text: 'I created hybrid app based on Unity and C#.',
      },
    ],
  },
  {
    position: 'Front end developer',
    companyName: 'Reclamare',
    date: '05/2016 – 06/2017',
    location: 'Kiev, Ukraine',
    career: '',
    jobDescription: [
      {
        id: 1,
        text: 'I created web sites based on HTML/CSS.',
      },
      {
        id: 2,
        text: 'Prepared layout to create WordPress theme',
      },
      {
        id: 2,
        text: 'I started learn with chat bots (Telegram)',
      },
    ],
  },
]

export default function Experience() {
  const defaultExperienceClassName = 'experience'

  return (
    <div className={defaultExperienceClassName}>
      <h2 className={`${defaultExperienceClassName}__title`}>
        WORK EXPERIENCE
      </h2>
      <div className={`${defaultExperienceClassName}__container`}>
        {exp.map(work => (
          <React.Fragment key={work.companyName}>
            <h3 className={`${defaultExperienceClassName}__position`}>
              {work.position}
            </h3>
            <h4 className={`${defaultExperienceClassName}__company-name`}>
              {work.companyName}
            </h4>
            <div className={`${defaultExperienceClassName}__dates-container`}>
              <span>{work.date}</span>
              <span>{work.location}</span>
            </div>
            {work.career && <p>{work.career}</p>}
            <p>Achievements/Tasks</p>
            <ul className={`${defaultExperienceClassName}__about`}>
              {work.jobDescription.map(job => (
                <li
                  key={job.id}
                  className={`${defaultExperienceClassName}__about-item`}
                >
                  {job.text}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
