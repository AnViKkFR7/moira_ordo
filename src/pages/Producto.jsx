import { useLanguage } from '../i18n/LanguageContext'

function Producto() {
  const { t } = useLanguage()
  const adminFeatures = t('producto.admin.features')

  return (
    <>
      {/* Product Hero (Modified for admin context) */}
      <section className="product-hero">
        <div className="container">
          <h1 className="product-hero-title">{t('producto.hero.title')}</h1>
          <p className="product-hero-subtitle">
            {t('producto.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Admin Panel Section */}
      <section className="admin-section">
        <div className="container">
          <div className="admin-intro">
            <div className="admin-description-highlight">
              <p>
                {t('producto.admin.highlight')}
              </p>
            </div>
          </div>

          <div className="admin-feature-row">
            <div className="admin-feature-content">
              <h3>{adminFeatures[0].title}</h3>
              <p>{adminFeatures[0].description}</p>
              <ul className="admin-list">
                {adminFeatures[0].list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="admin-feature-visual">
              <div className="visual-placeholder">
                <img src="/panel_admin.png" alt="Panel de Administración Moira Ordo" />
              </div>
            </div>
          </div>

          <div className="admin-feature-row reverse">
            <div className="admin-feature-content">
              <h3>{adminFeatures[1].title}</h3>
              <p>{adminFeatures[1].description}</p>
            </div>
            <div className="admin-feature-visual">
              <div className="visual-placeholder">
                <img src="/items.png" alt="Edición de Items y Atributos en el Panel de Administración Moira Ordo" />
              </div>
            </div>
          </div>

          <div className="admin-feature-row">
            <div className="admin-feature-content">
              <h3>{adminFeatures[2].title}</h3>
              <p>{adminFeatures[2].description}</p>
              <ul className="admin-list">
                {adminFeatures[2].list.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="admin-feature-visual">
              <div className="visual-placeholder">
                <img src="/roles.png" alt="Gestión de Usuarios y Roles en el Panel de Administración Moira Ordo" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('producto.cta.title')}</h2>
          <p>{t('producto.cta.subtitle')}</p>
          <button className="btn-primary large">{t('producto.cta.button')}</button>
        </div>
      </section>
    </>
  )
}

export default Producto
