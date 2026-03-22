import type { ResolvedCv } from '../types/cv'
import { renderTextWithEmphasis } from '../utils/renderTextWithEmphasis'

interface MainContentProps {
  cv: ResolvedCv
}

export const MainContent = ({ cv }: MainContentProps) => {
  return (
    <main className="cv-main">
      <section className="main-section">
        <h3>{cv.labels.summary}</h3>
        {cv.summary.map((paragraph, index) => (
          <p key={`${paragraph.slice(0, 20)}-${index}`}>{paragraph}</p>
        ))}
      </section>

      <section className="main-section">
        <h3>{cv.labels.employment}</h3>
        <div className="employment-list">
          {cv.employment.map((job) => (
            <article className="job-entry" key={job.id}>
              <div className="job-details">
                <h4 className="job-heading">
                  {job.role}, <strong>{job.company}</strong>, {job.location}
                </h4>
                <p className="job-date">{job.dateRange}</p>
                <ul>
                  {job.bullets.map((bullet, index) => (
                    <li key={`${job.id}-bullet-${index}`}>
                      {renderTextWithEmphasis(bullet.text, bullet.emphasis)}
                    </li>
                  ))}
                </ul>
                <div className="stack-chips">
                  {job.stack.map((tech) => (
                    <span key={`${job.id}-${tech}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="main-section">
        <h3>{cv.labels.education}</h3>
        <div className="education-list">
          {cv.education.map((item) => (
            <article key={`${item.institution}-${item.dateRange}`} className="education-entry">
              <h4 className="education-heading">
                {item.degree}, {item.institution}, {item.location}
              </h4>
              <p className="education-date">{item.dateRange}</p>
              {item.field ? <p className="education-field">{item.field}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="main-section references-section">
        <h3>{cv.labels.references}</h3>
        <p>{cv.labels.referencesText}</p>
      </section>
    </main>
  )
}
