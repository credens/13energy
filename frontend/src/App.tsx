import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CartDrawer from './components/cart/CartDrawer';
import Notification from './components/ui/Notification';
import ScrollProgress from './components/ui/ScrollProgress';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#050505] selection:bg-[#99FF00] selection:text-black font-sans">
          <Helmet>
            <title>13Energy | Ready To Drink - Pre-Work & Recovery</title>
            <meta name="description" content="La bebida energética más potente del mercado. 400mg de cafeína, Creatina y Beta-Alanina. Sin azúcar, lista para tomar." />
          </Helmet>

          {/* Componentes Globales */}
          <ScrollProgress />
          <Navbar />
          <CartDrawer />
          <Notification />
          
          {/* Manejo de Rutas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          
          {/* Footer Unificado */}
          <footer className="py-20 bg-black text-center border-t border-white/5 text-white">
            <div className="text-3xl font-black italic mb-4 font-display tracking-tighter uppercase">
              13<span className="text-[#99FF00]">ENERGY</span>
            </div>
            <div className="flex justify-center gap-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-500 font-sans">
                <a href="https://instagram.com/13energy.ok" target="_blank" rel="noreferrer" className="hover:text-[#99FF00] transition-colors">Instagram</a>
                <a href="mailto:13energy.ok@gmail.com" className="hover:text-[#99FF00] transition-colors">Contacto</a>
            </div>
            <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.5em] font-sans">
              © 2024 Hardcore Performance - Argentina
            </p>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;