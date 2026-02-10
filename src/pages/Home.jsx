import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  const projects = [
    {
      id: 1,
      image: '/Captura de pantalla 2026-02-07 113628.png',
      title: 'Empresa inmobiliaria',
      description: 'Web corporativa minimalista'
    },
    {
      id: 2,
      image: '/Captura de pantalla 2026-02-07 113822.png',
      title: 'Propiedades destacadas',
      description: 'Propiedades exclusivas en las mejores zonas de Barcelona y la Costa Dorada'
    },
    {
      id: 3,
      image: '/Captura de pantalla 2026-02-07 113909.png',
      title: 'Adaptada a móviles',
      description: 'Responsive'
    }
  ]

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
            El destino ordenado<br />del contenido
          </h1>
          <p className="hero-subtitle">
            Un sistema estable para contenido cambiante.<br />
            Pensado para webs que no se improvisan.
          </p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn-primary">Comenzar ahora</Link>
            <button className="btn-secondary">Ver demo</button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-proposition">
        <div className="container">
          <div className="vp-content">
            <div className="vp-text">
              <h2>No crea el mundo.<br />Decide cómo fluye.</h2>
              <p>Moira Ordo no es un constructor visual. No es un CMS genérico. Es infraestructura invisible que separa claramente diseño y contenido.</p>
              <ul className="vp-list">
                <li>El creador define la estructura</li>
                <li>El cliente gestiona el contenido</li>
                <li>El sistema garantiza el orden</li>
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
          <h2 className="section-title">Pensado para profesionales</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Diseñadores</h3>
              <p>Tu visión creativa permanece intacta. El cliente gestiona contenido sin tocar el diseño.</p>
            </div>
            <div className="benefit-item">
              <h3>Desarrolladores</h3>
              <p>Código limpio, estructura predecible. Sin sorpresas en producción.</p>
            </div>
            <div className="benefit-item">
              <h3>Agencias</h3>
              <p>Entrega proyectos profesionales con autonomía de contenido para el cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Nuestros proyectos</h2>
          <p className="section-subtitle">
            Soluciones digitales diseñadas con precisión y ejecutadas con excelencia
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
                aria-label="Anterior"
              >
                ‹
              </button>
              <button 
                className="carousel-btn carousel-btn-next" 
                onClick={nextSlide}
                aria-label="Siguiente"
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
                  aria-label={`Ir a proyecto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contacto">
        <div className="container">
          <h2>Donde el contenido sigue su orden</h2>
          <p>Únete a profesionales que confían en la estabilidad.</p>
          <Link to="/contacto" className="btn-primary large">Comenzar ahora</Link>
        </div>
      </section>
    </>
  )
}

export default Home
