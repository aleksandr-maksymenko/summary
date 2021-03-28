import React from 'react'
import { useAbout } from './useAbout'

export default function About() {
  const { name, position, bio, avatar } = useAbout()
  const defaultAboutClassName = 'about'

  return (
    <section className={defaultAboutClassName}>
      <div className={`${defaultAboutClassName}__image-container`}>
        <img
          src={`https://my-summary.herokuapp.com${avatar.url}`}
          alt={avatar.alternativeText}
          width={150}
          height={150}
          loading="lazy"
          className={`${defaultAboutClassName}__image`}
        />
      </div>
      <article className={`${defaultAboutClassName}__article`}>
        <h1 className={`${defaultAboutClassName}__name`}>{name}</h1>
        <span className={`${defaultAboutClassName}__position`}>{position}</span>
        <p className={`${defaultAboutClassName}__bio`}>{bio}</p>
      </article>
    </section>
  )
}
