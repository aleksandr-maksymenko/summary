import React from 'react'

import Linkedin from '@icons/Linkedin'
import Mail from '@icons/Mail'
import Location from '@icons/Location'
import Phone from '@icons/Phone'
import Skype from '@icons/Skype'
import Telegram from '@icons/Telegram'
import Viber from '@icons/Viber'
import Git from '@icons/Git'

const contacts = [
  {
    type: 'email',
    link: 'mailto:oleksandr.maksymenko@outlook.com',
    icon: <Mail />,
    text: 'oleksandr.maksymenko@outlook.com',
  },
  {
    type: 'phone',
    link: 'tel:+380633167816',
    icon: <Phone />,
    text: '+380 (063) 316-78-16',
  },
  {
    type: 'telegram',
    link: 'https://telegram.me/oleksandr_maksymenko',
    icon: <Telegram />,
    text: 'Message me into telegram',
  },
  {
    type: 'viber',
    link: 'viber:+380633167816',
    icon: <Viber />,
    text: 'Message me into viber',
  },
  {
    type: 'skype',
    link: 'https://join.skype.com/invite/mm0nz26gOh3S',
    icon: <Skype />,
    text: 'Oleksandr Maksymenko',
  },
  {
    type: 'location',
    link: 'https://www.google.com.ua/maps/@50.4273936,30.5173127,14z',
    icon: <Location />,
    text: 'Kiev, Ukraine',
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/in/oleksandr-maksymenko',
    icon: <Linkedin />,
    text: 'oleksandr-maksymenko',
  },
  {
    type: 'github',
    link: 'https://github.com/oleksandrmaksymenko',
    icon: <Git />,
    text: 'GitHub',
  },
]

export default function InfoBlock() {
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
