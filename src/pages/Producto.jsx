function Producto() {
  return (
    <>
      {/* Product Hero (Modified for admin context) */}
      <section className="product-hero">
        <div className="container">
          <h1 className="product-hero-title">Tu Centro de Control</h1>
          <p className="product-hero-subtitle">
            Más que una web, te entregamos una plataforma. Gestiona tu negocio digital con autonomía total.
          </p>
        </div>
      </section>

      {/* Admin Panel Section */}
      <section className="admin-section">
        <div className="container">
          <div className="admin-intro">
            <div className="admin-description-highlight">
              <p>
                Analizamos a fondo la operativa de tu negocio para arquitecturar un <strong>modelo de datos dinámico</strong> a medida. 
                Estructuramos meticulosamente toda tu información —desde contenidos multimedia y documentos corporativos hasta catálogos complejos— 
                creando un ecosistema digital que se adapta exactamente a tus necesidades reales.
              </p>
            </div>
          </div>

          <div className="admin-feature-row">
            <div className="admin-feature-content">
              <h3>Panel de Administración Intuitivo</h3>
              <p>
                Olvídate de interfaces complicadas. Nuestro panel está diseñado pensando en la claridad. 
                Tendrás una visión global de tu sitio, estadísticas y acceso rápido a lo que necesitas gestionar.
              </p>
              <ul className="admin-list">
                <li>Diseño limpio y amigable.</li>
                <li>Acceso inmediato desde cualquier lugar.</li>
                <li>Panel personalizado para tu empresa.</li>
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
              <h3>Control Total de Contenidos</h3>
              <p>
                Añade nuevos productos, edita textos o cambia imágenes en tiempo real. 
                Tienes la libertad de mantener tu web viva y actualizada sin depender de nosotros para cada cambio pequeño.
              </p>
            </div>
            <div className="admin-feature-visual">
              <div className="visual-placeholder">
                <img src="/items.png" alt="Edición de Items y Atributos en el Panel de Administración Moira Ordo" />
              </div>
            </div>
          </div>

          <div className="admin-feature-row">
            <div className="admin-feature-content">
              <h3>Gestión de Equipos y Roles</h3>
              <p>
                Tu negocio crece, y tu equipo también. Invita a miembros de tu empresa y decide qué pueden hacer.
              </p>
              <ul className="admin-list">
                <li><strong>Administradores:</strong> Control total.</li>
                <li><strong>Editores:</strong> Pueden modificar contenido.</li>
                <li><strong>Lectores:</strong> Solo visualización.</li>
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
          <h2>¿Listo para comenzar tu proyecto?</h2>
          <p>Hablemos de cómo podemos ayudarte a crear tu presencia digital.</p>
          <button className="btn-primary large">Contactar ahora</button>
        </div>
      </section>
    </>
  )
}

export default Producto
