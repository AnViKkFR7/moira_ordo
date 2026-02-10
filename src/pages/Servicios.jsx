import { useLanguage } from '../i18n/LanguageContext'

function Servicios() {
  const { t } = useLanguage()
  const whatWeDoList = t('servicios.whatWeDo.list')
  const approachSteps = t('servicios.approach.steps')
  const features = t('servicios.features.items')

  return (
    <>
      {/* Product Hero */}
      <section className="product-hero">
        <div className="container">
          <h1 className="product-hero-title">{t('servicios.hero.title')}</h1>
          <p className="product-hero-subtitle">
            {t('servicios.hero.subtitleLine1')}<br />
            {t('servicios.hero.subtitleLine2')}
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section" id="producto">
        <div className="container">
          <div className="product-content">
            <div className="product-main">
              <h3>{t('servicios.whatWeDo.title')}</h3>
              <p>
                {t('servicios.whatWeDo.description')}
              </p>
              <ul className="product-list">
                {whatWeDoList.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong> — {item.description}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="product-approach">
              <h3>{t('servicios.approach.title')}</h3>
              <div className="approach-steps">
                {approachSteps.map((step) => (
                  <div key={step.number} className="approach-step">
                    <span className="step-number">{step.number}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="caracteristicas">
        <div className="container">
          <h2 className="section-title">{t('servicios.features.title')}</h2>
          <p className="section-subtitle">
            {t('servicios.features.subtitle')}
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{['○', '△', '□', '◇', '⬡', '⬢'][index]}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('servicios.cta.title')}</h2>
          <p>{t('servicios.cta.subtitle')}</p>
          <button className="btn-primary large">{t('servicios.cta.button')}</button>
        </div>
      </section>
    </>
  )
}

export default Servicios
