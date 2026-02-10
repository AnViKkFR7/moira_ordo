function Producto() {
  return (
    <>
      {/* Product Hero */}
      <section className="product-hero">
        <div className="container">
          <h1 className="product-hero-title">Creamos tu presencia digital</h1>
          <p className="product-hero-subtitle">
            Páginas web a medida que reflejan la esencia de tu proyecto.<br />
            Sin plantillas. Sin improvisación. Solo soluciones pensadas para ti.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section" id="producto">
        <div className="container">
          <div className="product-content">
            <div className="product-main">
              <h3>Lo que hacemos</h3>
              <p>
                Desarrollamos sitios web profesionales con Moira Ordo en su núcleo. 
                Cada proyecto es único, diseñado específicamente para tus necesidades 
                y construido con la estabilidad que tu negocio merece.
              </p>
              <ul className="product-list">
                <li>
                  <strong>Páginas web a medida</strong> — Diseño y desarrollo personalizado 
                  que se adapta exactamente a tu visión y objetivos.
                </li>
                <li>
                  <strong>Atención personalizada</strong> — Acompañamiento continuo desde 
                  la primera conversación hasta mucho después del lanzamiento.
                </li>
                <li>
                  <strong>Gestión autónoma de contenido</strong> — Actualiza textos, imágenes 
                  y productos sin depender de nadie. El diseño permanece intacto.
                </li>
                <li>
                  <strong>Mantenimiento y soporte</strong> — Tu web siempre actualizada, 
                  segura y funcionando sin interrupciones.
                </li>
                <li>
                  <strong>Escalabilidad real</strong> — Tu sitio crece contigo. Añade 
                  funcionalidades cuando las necesites, sin rehacer todo.
                </li>
              </ul>
            </div>
            
            <div className="product-approach">
              <h3>Nuestro enfoque</h3>
              <div className="approach-steps">
                <div className="approach-step">
                  <span className="step-number">01</span>
                  <div>
                    <h4>Escuchamos</h4>
                    <p>Entendemos tu proyecto, tu audiencia y tus objetivos reales.</p>
                  </div>
                </div>
                <div className="approach-step">
                  <span className="step-number">02</span>
                  <div>
                    <h4>Diseñamos</h4>
                    <p>Creamos una estructura visual y funcional pensada para durar.</p>
                  </div>
                </div>
                <div className="approach-step">
                  <span className="step-number">03</span>
                  <div>
                    <h4>Construimos</h4>
                    <p>Desarrollamos con código limpio y sistemas robustos.</p>
                  </div>
                </div>
                <div className="approach-step">
                  <span className="step-number">04</span>
                  <div>
                    <h4>Acompañamos</h4>
                    <p>Te enseñamos a gestionar tu contenido con total autonomía.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="caracteristicas">
        <div className="container">
          <h2 className="section-title">Características que importan</h2>
          <p className="section-subtitle">
            Tecnología invisible. Resultados visibles.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">○</div>
              <h3>Diseño estable</h3>
              <p>Tu identidad visual permanece consistente. El cliente gestiona contenido sin afectar el diseño.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">△</div>
              <h3>Contenido dinámico</h3>
              <p>Actualiza textos, imágenes y productos sin tocar código. El orden se mantiene siempre.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">□</div>
              <h3>Infraestructura invisible</h3>
              <p>La tecnología trabaja en segundo plano. Solo percibes la estabilidad.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">◇</div>
              <h3>Rendimiento optimizado</h3>
              <p>Carga rápida, experiencia fluida. Tu web funciona como debe funcionar.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⬡</div>
              <h3>Responsive por naturaleza</h3>
              <p>Perfecta en cualquier dispositivo. Desde móviles hasta pantallas grandes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⬢</div>
              <h3>SEO integrado</h3>
              <p>Construido para ser encontrado. Estructura semántica y optimización desde el día uno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel Section */}
      <section className="admin-section">
        <div className="container">
          <div className="admin-intro">
            <h2 className="section-title">Tu Centro de Control</h2>
            <p className="section-subtitle">
              Más que una web, te entregamos una plataforma. Gestiona tu negocio digital con autonomía total.
            </p>
            <p className="admin-description-highlight">
              Analizamos a fondo la operativa de tu negocio para arquitecturar un <strong>modelo de datos dinámico</strong> a medida. 
              Estructuramos meticulosamente toda tu información —desde contenidos multimedia y documentos corporativos hasta catálogos complejos— 
              creando un ecosistema digital que se adapta exactamente a tus necesidades reales.
            </p>
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
                {<img src="/items.png" alt="Edición de Items y Atributos en el Panel de Administración Moira Ordo" />}
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
                {<img src="/roles.png" alt="Gestión de Usuarios y Roles en el Panel de Administración Moira Ordo" />}
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
