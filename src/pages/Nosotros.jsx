function Nosotros() {
  return (
    <>
      {/* About Us Section */}
      <section className="about-section" id="nosotros">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Quiénes somos</h2>
              <p className="about-intro">
                Somos un equipo especializado en crear experiencias digitales duraderas. 
                No perseguimos tendencias. Construimos fundamentos.
              </p>
              <p>
                Nacimos de la necesidad de encontrar un punto medio entre el caos de los 
                constructores visuales y la rigidez de las soluciones empresariales. 
                Creímos que debía existir algo mejor: una forma de crear webs profesionales 
                donde el diseño permanece estable y el contenido fluye con orden.
              </p>
              <p>
                Moira Ordo es nuestra respuesta. Un sistema que respeta el trabajo del 
                diseñador, empodera al desarrollador y libera al cliente.
              </p>
            </div>
            
            <div className="about-values">
              <h3>Nuestros principios</h3>
              <div className="values-list">
                <div className="value-item">
                  <h4>Claridad</h4>
                  <p>Sin jerga técnica innecesaria. Hablamos tu idioma.</p>
                </div>
                <div className="value-item">
                  <h4>Estabilidad</h4>
                  <p>Construimos para que dure. No para que impresione una temporada.</p>
                </div>
                <div className="value-item">
                  <h4>Honestidad</h4>
                  <p>Sin promesas imposibles. Solo soluciones reales a problemas reales.</p>
                </div>
                <div className="value-item">
                  <h4>Compromiso</h4>
                  <p>Tu proyecto es nuestro proyecto. Estamos contigo desde el día uno.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-philosophy">
            <blockquote className="philosophy-quote">
              <p>
                "No creamos el mundo. Decidimos cómo fluye."
              </p>
              <cite>— Filosofía Moira Ordo</cite>
            </blockquote>
            <p className="philosophy-text">
              Esta es nuestra guía. No sobreactuamos. No complicamos lo simple. 
              Creamos sistemas que funcionan en silencio y permiten que tu contenido 
              y tu mensaje sean los protagonistas.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Nuestro método</h2>
          <p className="section-subtitle">
            Trabajamos de forma transparente, clara y siempre enfocados en tus objetivos.
          </p>
          <div className="method-grid">
            <div className="method-card">
              <h3>Descubrimiento</h3>
              <p>
                Comenzamos por entender tu negocio, tu audiencia y tus metas. 
                Cada proyecto es diferente y merece atención única.
              </p>
            </div>
            <div className="method-card">
              <h3>Estrategia</h3>
              <p>
                Diseñamos la arquitectura del sitio pensando en el futuro. 
                Estructura que perdura, contenido que evoluciona.
              </p>
            </div>
            <div className="method-card">
              <h3>Desarrollo</h3>
              <p>
                Construimos con tecnología sólida y código limpio. 
                Sin atajos, sin compromisos técnicos.
              </p>
            </div>
            <div className="method-card">
              <h3>Lanzamiento</h3>
              <p>
                Entregamos tu proyecto y te enseñamos a gestionarlo. 
                Quedamos contigo para cualquier necesidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Construyamos algo juntos</h2>
          <p>Estamos listos para escuchar tu proyecto y hacerlo realidad.</p>
          <button className="btn-primary large">Hablemos</button>
        </div>
      </section>
    </>
  )
}

export default Nosotros
