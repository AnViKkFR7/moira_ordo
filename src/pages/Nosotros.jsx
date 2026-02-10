import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Nosotros() {
  const { t } = useLanguage()
  const values = t('nosotros.values.items')
  const methodItems = t('nosotros.method.items')

  return (
    <>
      {/* About Us Section */}
      <section className="about-section" id="nosotros">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('nosotros.about.title')}</h2>
              <p className="about-intro">
                {t('nosotros.about.intro')}
              </p>
              <p>
                {t('nosotros.about.paragraphOne')}
              </p>
              <p>
                {t('nosotros.about.paragraphTwo')}
              </p>
            </div>
            
            <div className="about-values">
              <h3>{t('nosotros.values.title')}</h3>
              <div className="values-list">
                {values.map((value) => (
                  <div key={value.title} className="value-item">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-philosophy">
            <blockquote className="philosophy-quote">
              <p>
                {t('nosotros.philosophy.quote')}
              </p>
              <cite>{t('nosotros.philosophy.cite')}</cite>
            </blockquote>
            <p className="philosophy-text">
              {t('nosotros.philosophy.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="container">
          <h2 className="section-title">{t('nosotros.founders.title')}</h2>
          <p className="section-subtitle">
            {t('nosotros.founders.subtitle')}
          </p>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image">
                <img src="/image.png" alt="Aaron Garcia" />
              </div>
              <div className="founder-info">
                <h3>Aaron Garcia</h3>
                <p className="founder-role">{t('nosotros.founders.aaron.role')}</p>
                <div className="founder-stats">
                  <span>{t('nosotros.founders.aaron.stats')}</span>
                </div>
                <p className="founder-desc">
                  {t('nosotros.founders.aaron.description')}
                </p>
                <a href="https://www.linkedin.com/in/aaron-garcia-84088a154/" target="_blank" rel="noopener noreferrer" className="founder-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="founder-card">
              <div className="founder-image">
                <img src="/1759491269382.jpg" alt="Joselyn Ninahuaman Calcina" />
              </div>
              <div className="founder-info">
                <h3>Joselyn Ninahuaman Calcina</h3>
                <p className="founder-role">{t('nosotros.founders.joselyn.role')}</p>
                <div className="founder-stats">
                  <span>{t('nosotros.founders.joselyn.stats')}</span>
                </div>
                <p className="founder-desc">
                  {t('nosotros.founders.joselyn.description')}
                </p>
                <a href="https://www.linkedin.com/in/joselyn-ninahuaman-calcina-/" target="_blank" rel="noopener noreferrer" className="founder-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">{t('nosotros.method.title')}</h2>
          <p className="section-subtitle">
            {t('nosotros.method.subtitle')}
          </p>
          <div className="method-grid">
            {methodItems.map((item) => (
              <div key={item.title} className="method-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('nosotros.cta.title')}</h2>
          <p>{t('nosotros.cta.subtitle')}</p>
          <Link to="/contacto" className="btn-primary large">{t('nosotros.cta.button')}</Link>
        </div>
      </section>
    </>
  )
}

export default Nosotros
