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

      {/* Founders Section */}
      <section className="founders-section">
        <div className="container">
          <h2 className="section-title">Nuestros Fundadores</h2>
          <p className="section-subtitle">
            Un equipo unido con amplia experiencia tecnológica.
          </p>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image">
                <img src="/image.png" alt="Aaron Garcia" />
              </div>
              <div className="founder-info">
                <h3>Aaron Garcia</h3>
                <p className="founder-role">Software Engineer</p>
                <div className="founder-stats">
                  <span>+5 años de experiencia</span>
                </div>
                <p className="founder-desc">
                  Arquitectura de software y soluciones robustas.
                </p>
                <a href="https://www.linkedin.com/in/aaron-garcia-84088a154/" target="_blank" rel="noopener noreferrer" className="founder-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="founder-card">
              <div className="founder-image">
                <img src="/1759491269382.jpg" alt="Joselyn Ninahuaman Calcina" />
              </div>
              <div className="founder-info">
                <h3>Joselyn Ninahuaman Calcina</h3>
                <p className="founder-role">Developer Full Stack</p>
                <div className="founder-stats">
                  <span>+2 años de experiencia</span>
                </div>
                <p className="founder-desc">
                  Desarrollo integral de aplicaciones web modernas.
                </p>
                <a href="https://www.linkedin.com/in/joselyn-ninahuaman-calcina-/" target="_blank" rel="noopener noreferrer" className="founder-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
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
