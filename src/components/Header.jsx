import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Moira Ordo</Link>
        <nav className="nav">
          <Link to="/producto">Producto</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto" className="cta-btn">Comenzar</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
