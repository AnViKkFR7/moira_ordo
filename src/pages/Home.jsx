import { Link } from 'react-router-dom'

function Home() {
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
              <div className="visual-box">
                <div className="visual-line"></div>
                <div className="visual-line"></div>
                <div className="visual-line"></div>
              </div>
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
