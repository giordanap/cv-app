import type { ReactNode } from 'react'
import type { ResolvedCv } from '../types/cv'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  XIcon,
} from '../components/Icons'

interface SidebarProps {
  cv: ResolvedCv
}

const ContactRow = ({
  icon,
  text,
  href,
}: {
  icon: ReactNode
  text: string
  href?: string
}) => {
  if (!href) {
    return (
      <div className="contact-line">
        {icon}
        <span>{text}</span>
      </div>
    )
  }

  return (
    <a className="contact-line" href={href}>
      {icon}
      <span>{text}</span>
    </a>
  )
}

export const Sidebar = ({ cv }: SidebarProps) => {
  return (
    <aside className="cv-sidebar">
      <h1 className="cv-name">{cv.person.fullName}</h1>
      <div className="cv-divider" aria-hidden="true" />
      <p className="cv-base-title">{cv.person.baseTitle}</p>

      <section className="cv-block">
        <h2>{cv.labels.contact}</h2>
        <div className="contact-lines">
          <ContactRow
            icon={<MailIcon width={14} height={14} />}
            text={cv.person.email}
            href={`mailto:${cv.person.email}`}
          />
          <ContactRow
            icon={<PhoneIcon width={14} height={14} />}
            text={cv.person.phone}
            href={`tel:${cv.person.phone.replace(/\s+/g, '')}`}
          />
        </div>

        <div className="contact-socials" aria-label="Social links">
          <a href={cv.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon width={15} height={15} />
          </a>
          <a href={cv.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter/X">
            <XIcon width={15} height={15} />
          </a>
          <a href={cv.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon width={15} height={15} />
          </a>
          {cv.links.whatsapp ? (
            <a href={cv.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon width={15} height={15} />
            </a>
          ) : null}
        </div>
      </section>

      <section className="cv-block">
        <h2>{cv.labels.expertise}</h2>
        <div className="expertise-groups">
          {cv.expertise.map((group) => (
            <div key={group.title} className="expertise-group">
              <h3>{group.title}</h3>
              <div className="expertise-items">
                {group.items.map((item) => (
                  <span key={`${group.title}-${item}`} className="expertise-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-block">
        <h2>{cv.labels.hobbies}</h2>
        <p className="hobbies-inline">{cv.hobbies.join(', ')}</p>
      </section>

      <section className="cv-block">
        <h2>{cv.labels.languages}</h2>
        <ul className="language-list">
          {cv.languages.map((language) => (
            <li key={language.name}>
              <div className="language-row">
                <span>{language.name}</span>
              </div>
              <div className="language-bar" role="presentation">
                <div style={{ width: `${language.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
