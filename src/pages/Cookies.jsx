import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Cookies() {
  const { t } = useLanguage()
  const sections = t('legal.cookies.sections')

  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-hero">
          <h1>{t('legal.cookies.title')}</h1>
          <p className="legal-updated">{t('legal.shared.updated')}</p>
          <p className="legal-intro">{t('legal.cookies.intro')}</p>
        </div>

        <div className="legal-sections">
          {sections.map((section) => (
            <article key={section.title} className="legal-card">
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={`${section.title}-${index}`}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <div className="legal-actions">
          <Link to="/" className="btn-secondary">{t('legal.shared.backHome')}</Link>
        </div>
      </div>
    </section>
  )
}

export default Cookies
