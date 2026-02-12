import { useLanguage } from '../i18n/LanguageContext'

function Privacidad() {
  const { t } = useLanguage()
  const sections = t('legal.privacy.sections')

  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-hero">
          <h1>{t('legal.privacy.title')}</h1>
          <p className="legal-updated">{t('legal.shared.updated')}</p>
          <p className="legal-intro">{t('legal.privacy.intro')}</p>
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
      </div>
    </section>
  )
}

export default Privacidad
