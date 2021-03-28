import React from 'react'

import useInfoBlock from './useInfoBlock'

export default function InfoBlock() {
  const { contacts } = useInfoBlock()
  const defaultInfoBlockClassName = 'info-block'

  return (
    <div className={defaultInfoBlockClassName}>
      <div className={`${defaultInfoBlockClassName}__wrapper`}>
        <ul className={`${defaultInfoBlockClassName}__contact-list`}>
          {contacts.map(contact => (
            <li
              key={contact.type}
              className={`${defaultInfoBlockClassName}__contact`}
            >
              {contact.icon}
              <a
                href={contact.link}
                className={`${defaultInfoBlockClassName}__link`}
              >
                {contact.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
