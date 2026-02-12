import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage)
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
          aria-label={t('header.menuLabel')}
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
          <Link to="/producto" onClick={closeMenu}>{t('header.nav.product')}</Link>
          <Link to="/servicios" onClick={closeMenu}>{t('header.nav.services')}</Link>
          <Link to="/nosotros" onClick={closeMenu}>{t('header.nav.about')}</Link>
          <Link to="/contacto" className="cta-btn" onClick={closeMenu}>{t('header.nav.contactCta')}</Link>
          <div className="language-switcher">
            <div className="language-segment" role="group" aria-label={t('languageSwitcher.label')}>
              {['es', 'en', 'fr'].map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`language-option ${language === code ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(code)}
                  aria-pressed={language === code}
                >
                  {code.toUpperCase()}
                </button>
              ))}
              <span className="language-segment-glow" aria-hidden="true"></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
