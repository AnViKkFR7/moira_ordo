import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Moira Ordo</div>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('footer.columns.product')}</h4>
              <Link to="/producto">{t('footer.links.features')}</Link>
              <Link to="/servicios">{t('footer.links.docs')}</Link>
            </div>
            <div className="footer-column">
              <h4>{t('footer.columns.company')}</h4>
              <Link to="/nosotros">{t('footer.links.about')}</Link>
              <Link to="/contacto">{t('footer.links.contact')}</Link>
            </div>
            <div className="footer-column">
              <h4>{t('footer.columns.legal')}</h4>
              <Link to="/privacidad">{t('footer.links.privacy')}</Link>
              <Link to="/aviso-legal">{t('footer.links.legal')}</Link>
              <Link to="/cookies">{t('footer.links.cookies')}</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
