import React from 'react'
import Link from '@icons/Link'

type AboutProps = {
  defaultClassName: string
  type: string
  title: string
  list: {
    text: string
    period?: string
    href?: string
    proficiency?: string
  }[]
}

export default function AsideInfo({
  defaultClassName,
  type,
  list,
  title,
}: AboutProps) {
  return (
    <section className={defaultClassName}>
      <h3 className={`${defaultClassName}__title`}>{title}</h3>
      <ul className={`${defaultClassName}__container`}>
        {list.map(item => (
          <li key={item.text} className={`${defaultClassName}__item`}>
            {type === 'block' && item.text + ' ' + (item.period || '')}
            {type === 'link' && (
              <>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${defaultClassName}__link`}
                  >
                    {item.text}
                    <Link />
                  </a>
                ) : (
                  <p>
                    {item.text}
                    <span>{item.proficiency}</span>
                  </p>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
