import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Producto from './pages/Producto'
import Servicios from './pages/Servicios'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Privacidad from './pages/Privacidad'
import AvisoLegal from './pages/AvisoLegal'
import Cookies from './pages/Cookies'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="landing">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto" element={<Producto />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  )
}

export default App
