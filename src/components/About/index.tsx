import React from 'react'

export default function About() {
  const defaultAboutClassName = 'about'

  return (
    <section className={defaultAboutClassName}>
      <img
        src="https://placehold.it/150"
        alt="avatar"
        className={`${defaultAboutClassName}__image`}
      />
      <article className={`${defaultAboutClassName}__article`}>
        <h1 className={`${defaultAboutClassName}__name`}>
          Aleksandr Maksymenko
        </h1>
        <span className={`${defaultAboutClassName}__position`}>
          Front End Developer
        </span>
        <p className={`${defaultAboutClassName}__bio`}>
          I like to create web sites, mobile applications, this is my hobby.
          When I have free time usually I try to learn new features in
          JavaScript, try to create an app or web site.
        </p>
      </article>
    </section>
  )
}
