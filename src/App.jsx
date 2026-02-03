import './App.css'

function App() {
  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">Moira Ordo</div>
          <nav className="nav">
            <a href="#producto">Producto</a>
            <a href="#caracteristicas">Características</a>
            <a href="#contacto" className="cta-btn">Comenzar</a>
          </nav>
        </div>
      </header>

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
            <button className="btn-primary">Comenzar ahora</button>
            <button className="btn-secondary">Ver demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="caracteristicas">
        <div className="container">
          <h2 className="section-title">Controla el flujo. No el diseño.</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">○</div>
              <h3>Estructura estable</h3>
              <p>El diseño permanece bajo tu control. El sistema solo gestiona el contenido.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">△</div>
              <h3>Contenido dinámico</h3>
              <p>Tus clientes actualizan sin romper nada. El orden se mantiene.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">□</div>
              <h3>Infraestructura invisible</h3>
              <p>La tecnología no se exhibe. Solo funciona.</p>
            </div>
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
          <button className="btn-primary large">Comenzar ahora</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">Moira Ordo</div>
              <p>El sistema que decide cómo fluye el contenido.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Producto</h4>
                <a href="#caracteristicas">Características</a>
                <a href="#pricing">Precios</a>
                <a href="#docs">Documentación</a>
              </div>
              <div className="footer-column">
                <h4>Compañía</h4>
                <a href="#about">Sobre nosotros</a>
                <a href="#contacto">Contacto</a>
                <a href="#blog">Blog</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Moira Ordo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
