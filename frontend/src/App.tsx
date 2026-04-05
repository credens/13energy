import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CartDrawer from './components/cart/CartDrawer';
import Notification from './components/ui/Notification'; // <--- NUEVO
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#050505] selection:bg-[#99FF00] selection:text-black font-sans">
          <Navbar />
          <CartDrawer />
          <Notification /> {/* <--- INYECTADO AQUÍ */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          
          <footer className="py-20 bg-black text-center border-t border-white/5 text-white">
            <div className="text-3xl font-black italic mb-4 font-display tracking-tighter uppercase">
              13<span className="text-[#99FF00]">ENERGY</span>
            </div>
            <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.5em]">© 2024 Hardcore Performance - Argentina</p>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;