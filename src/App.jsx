import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Producto from './pages/Producto'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <div className="landing">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
