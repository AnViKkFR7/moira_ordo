import { Link } from 'react-router-dom'
import { useState } from 'react'
import YoutubePopup from '../components/YoutubePopup'
import { useLanguage } from '../i18n/LanguageContext'

function Home() {
  const [showYoutube, setShowYoutube] = useState(false)
  const [activeNode, setActiveNode] = useState(null)
  const { t } = useLanguage()
  
  const projects = t('home.projects')
  const benefits = t('home.benefits.items')


  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video"
          >
            <source src="/5480-184226885_small.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">
            {t('home.hero.titleLine1')}<br />{t('home.hero.titleLine2')}
          </h1>
          <p className="hero-subtitle">
            {t('home.hero.subtitleLine1')}<br />
            {t('home.hero.subtitleLine2')}
          </p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn-primary">{t('home.hero.primaryCta')}</Link>
            <button
              className="btn-secondary"
              type="button"
              onClick={() => setShowYoutube(true)}
            >
              {t('home.hero.secondaryCta')}
            </button>
            <YoutubePopup
              videoId="8X5Bi9ina1Q"
              open={showYoutube}
              onClose={() => setShowYoutube(false)}
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-proposition">
        <div className="container">
          <div className="vp-content">
            <div className="vp-text">
              <h2>{t('home.valueProposition.titleLine1')}<br />{t('home.valueProposition.titleLine2')}</h2>
              <p>{t('home.valueProposition.description')}</p>
              <ul className="vp-list">
                <li>{t('home.valueProposition.list.0')}</li>
                <li>{t('home.valueProposition.list.1')}</li>
                <li>{t('home.valueProposition.list.2')}</li>
              </ul>
            </div>
            <div className="vp-visual">
              <div className="vp-cycle">
                <div className="vp-cycle-ring"></div>
                <div className="vp-cycle-core">
                  <span className="vp-cycle-core-icon">∞</span>
                  <span className="vp-cycle-core-label">{t('home.valueProposition.cycleCenter')}</span>
                </div>
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    className={`vp-cycle-node vp-cycle-n${i}`}
                    onClick={() => setActiveNode(i)}
                    aria-label={t(`home.valueProposition.flowNodes.${i}`)}
                  >
                    <div className={`vp-cycle-dot vp-dot-n${i}`}></div>
                    <span className="vp-cycle-tag">{t(`home.valueProposition.flowNodes.${i}`)}</span>
                    <span className="vp-cycle-sub">{t(`home.valueProposition.flowTags.${i}`)}</span>
                  </button>
                ))}
              </div>

              {activeNode !== null && (
                <div className="vp-popup-overlay" onClick={() => setActiveNode(null)}>
                  <div className="vp-popup" onClick={e => e.stopPropagation()}>
                    <button className="vp-popup-close" onClick={() => setActiveNode(null)} aria-label="Cerrar">✕</button>
                    <div className={`vp-popup-dot vp-dot-n${activeNode}`}></div>
                    <h4 className="vp-popup-title">{t(`home.valueProposition.flowNodes.${activeNode}`)}</h4>
                    <p className="vp-popup-desc">{t(`home.valueProposition.flowPopup.${activeNode}`)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">{t('home.benefits.title')}</h2>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="benefit-item">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">{t('home.projectsSection.title')}</h2>
          <p className="section-subtitle">{t('home.projectsSection.subtitle')}</p>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <article key={project.id} className={`project-card project-card--${i}`}>
                {/* Mockup area */}
                <div className="project-mockup">
                  <div className="project-browser">
                    <div className="browser-bar">
                      <span className="browser-dot"></span>
                      <span className="browser-dot"></span>
                      <span className="browser-dot"></span>
                      <span className="browser-url">{project.title.toLowerCase().replace(/ /g, '-')}.com</span>
                    </div>
                    <div className="browser-screen">
                      {project.imgDesktop ? (
                        <img src={project.imgDesktop} alt={`${project.title} desktop`} />
                      ) : (
                        <div className="screen-placeholder">
                          <span>Captura desktop</span>
                          <span className="placeholder-hint">1280 × 800 px</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="project-mobile">
                    <div className="mobile-notch"></div>
                    <div className="mobile-screen">
                      {project.imgMobile ? (
                        <img src={project.imgMobile} alt={`${project.title} mobile`} />
                      ) : (
                        <div className="screen-placeholder screen-placeholder--mobile">
                          <span>Mobile</span>
                          <span className="placeholder-hint">390 × 844</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-tags">
                    {project.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.url && project.url !== '#' && (
                    <a href={project.url} className="project-visit" target="_blank" rel="noopener noreferrer">
                      {t('home.projectsSection.visitLabel')}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contacto">
        <div className="container">
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.subtitle')}</p>
          <Link to="/contacto" className="btn-primary large">{t('home.cta.button')}</Link>
        </div>
      </section>
    </>
  )
}

export default Home
