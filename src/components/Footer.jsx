import { Link } from 'react-router-dom'

function Footer() {
  return (
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
              <Link to="/producto">Características</Link>
              <a href="#pricing">Precios</a>
              <a href="#docs">Documentación</a>
            </div>
            <div className="footer-column">
              <h4>Compañía</h4>
              <Link to="/nosotros">Sobre nosotros</Link>
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
  )
}

export default Footer
