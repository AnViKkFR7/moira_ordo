import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo2.png" alt="Moira Ordo" className="logo-img" />
        </Link>
        
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="mobile-logo-container">
            <Link to="/" onClick={closeMenu}>
              <img src="/logo2.png" alt="Moira Ordo" className="mobile-logo-img" />
            </Link>
          </div>
          <Link to="/producto" onClick={closeMenu}>Producto</Link>
          <Link to="/servicios" onClick={closeMenu}>Servicios</Link>
          <Link to="/nosotros" onClick={closeMenu}>Nosotros</Link>
          <Link to="/contacto" className="cta-btn" onClick={closeMenu}>Comenzar</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
