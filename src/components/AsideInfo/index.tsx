import React from 'react'

type AboutProps = {
  defaultClassName: string
  type: string
  list: string[]
}

export default function AsideInfo({
  defaultClassName,
  type,
  list,
}: AboutProps) {
  return (
    <section className={defaultClassName}>
      <h3 className={`${defaultClassName}__title`}>{type}</h3>
      <ul className={`${defaultClassName}__container`}>
        {list.map(skill => (
          <li key={skill} className={`${defaultClassName}__item`}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
