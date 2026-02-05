import { Link } from 'react-router-dom'
import '../App.css'

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado')
  }

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/logo2.png" alt="Moira Ordo" className="logo-img" />
          </Link>
          <nav className="nav">
            <Link to="/producto">Producto</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/contacto" className="cta-btn">Contacto</Link>
          </nav>
        </div>
      </header>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Comencemos tu proyecto</h1>
          <p className="contact-subtitle">
            Cuéntanos qué necesitas. Te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>¿Por qué contactarnos?</h2>
              <ul className="contact-benefits">
                <li>
                  <span className="benefit-icon">✓</span>
                  <div>
                    <strong>Consulta gratuita</strong>
                    <p>Primera conversación sin compromiso</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <div>
                    <strong>Respuesta rápida</strong>
                    <p>Te contestamos en menos de 24 horas</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <div>
                    <strong>Atención personalizada</strong>
                    <p>Hablamos directamente contigo, sin intermediarios</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <div>
                    <strong>Presupuesto a medida</strong>
                    <p>Soluciones adaptadas a tu proyecto y presupuesto</p>
                  </div>
                </li>
              </ul>

              <div className="contact-details">
                <h3>Otras formas de contacto</h3>
                <p>
                  <strong>Email:</strong> hola@moiraordo.com
                </p>
                <p>
                  <strong>Horario:</strong> Lun - Vie, 9:00 - 18:00
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Empresa / Proyecto</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nombre de tu empresa o proyecto"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Tipo de proyecto *</label>
                  <select id="projectType" name="projectType" required>
                    <option value="">Selecciona una opción</option>
                    <option value="nueva-web">Nueva página web</option>
                    <option value="rediseno">Rediseño de web existente</option>
                    <option value="ecommerce">Tienda online</option>
                    <option value="corporativa">Web corporativa</option>
                    <option value="landing">Landing page</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Cuéntanos tu proyecto *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Describe tu proyecto, tus objetivos y cualquier detalle que consideres importante..."
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span>
                      He leído y acepto la política de privacidad *
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary large">
                  Enviar solicitud
                </button>

                <p className="form-note">
                  * Campos obligatorios. Respetamos tu privacidad y no compartimos tu información.
                </p>
              </form>
            </div>
          </div>
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
                <Link to="/producto">Producto</Link>
                <Link to="/nosotros">Nosotros</Link>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#privacy">Privacidad</a>
                <a href="#terms">Términos</a>
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

export default Contacto
