import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- IMPORTANTE
import { useCart } from '../../store/useCart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, toggleCart } = useCart();
  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/5 font-sans">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO CLICKEABLE */}
        <Link 
          to="/" 
          className="text-3xl font-black italic tracking-tighter text-white uppercase font-display hover:opacity-80 transition-opacity"
        >
          13<span className="text-[#99FF00]">ENERGY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#productos" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#99FF00] transition-colors">Productos</a>
          <a href="/#comunidad" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#99FF00] transition-colors">Comunidad</a>
          <Link to="/gear" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#99FF00] transition-colors">Gear</Link>
          <a href="/#distribuidores" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#99FF00] transition-colors">Distribuidores</a>
          
          <div className="flex items-center gap-5 ml-4 border-l border-white/10 pl-8">
            {/* BOTÓN CARRITO */}
            <button 
              onClick={toggleCart}
              className="relative text-white hover:text-[#99FF00] transition-colors"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#99FF00] text-black text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <a href="https://instagram.com/13energy.arg" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#99FF00] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6 text-white uppercase font-black italic tracking-widest font-display text-2xl">
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <a href="/#productos" onClick={() => setIsOpen(false)}>Productos</a>
          <a href="/#comunidad" onClick={() => setIsOpen(false)}>Comunidad</a>
          <Link to="/gear" onClick={() => setIsOpen(false)}>Gear</Link>
          <a href="/#distribuidores" onClick={() => setIsOpen(false)}>Distribuidores</a>
          <button onClick={() => {toggleCart(); setIsOpen(false);}} className="text-[#99FF00] text-left flex items-center gap-2 uppercase">
            <ShoppingBag size={22} /> Carrito ({totalItems})
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;