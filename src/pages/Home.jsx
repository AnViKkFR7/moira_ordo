import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const { t } = useLanguage()
  
  const projects = t('home.projects')
  const benefits = t('home.benefits.items')

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }
    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide])

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
            <button className="btn-secondary">{t('home.hero.secondaryCta')}</button>
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
              <img src="/web-icon-set-drawn-chalkboard-with-white-chalk.jpg" alt="Sistema de iconos web" />
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

      {/* Projects Carousel Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">{t('home.projectsSection.title')}</h2>
          <p className="section-subtitle">
            {t('home.projectsSection.subtitle')}
          </p>
          
          <div className="carousel">
            <div 
              className="carousel-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="carousel-slide">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className="carousel-btn carousel-btn-prev" 
                onClick={prevSlide}
                aria-label={t('home.projectsSection.prevAria')}
              >
                ‹
              </button>
              <button 
                className="carousel-btn carousel-btn-next" 
                onClick={nextSlide}
                aria-label={t('home.projectsSection.nextAria')}
              >
                ›
              </button>
            </div>
            
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={t('home.projectsSection.goToAria', { index: index + 1 })}
                />
              ))}
            </div>
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
