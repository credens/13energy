import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import ProductShowcase from './components/home/ProductShowcase';
import Distributors from './components/home/Distributors';

function App() {
  return (
    <div className="min-h-screen bg-13black">
      <Navbar />
      <Hero />
      
      {/* SEPARADOR DE SECCIÓN: Línea Neon con Glow */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-13neon/50 to-transparent relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-13neon/10 blur-[60px] rounded-full"></div>
      </div>

      <ProductShowcase />

      {/* SEPARADOR FINAL */}
      <div className="w-full h-px bg-white/5"></div>

      <Distributors />
      
      <footer className="py-20 bg-black text-center border-t border-white/5">
        <div className="text-2xl font-black italic text-white mb-4 font-display">
          13<span className="text-13neon">ENERGY</span>
        </div>
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em]">
          © 2024 Hardcore Performance - Argentina
        </p>
      </footer>
    </div>
  );
}

export default App;