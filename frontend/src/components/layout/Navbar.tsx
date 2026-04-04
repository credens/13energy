import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="text-3xl font-black italic tracking-tighter text-white uppercase font-display">
          13<span className="text-13neon">ENERGY</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Productos', 'Comunidad', 'Distribuidores'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-13neon transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6">
          {['Productos', 'Comunidad', 'Distribuidores'].map((item) => (
            <a key={item} onClick={() => setIsOpen(false)} href={`#${item.toLowerCase()}`} className="text-2xl font-black uppercase italic text-white font-display">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;