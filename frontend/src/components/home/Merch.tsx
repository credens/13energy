import { useCart } from '../../store/useCart';
import { Link } from 'react-router-dom';

const merchItems = [
  {
    id: 'merch-stringer',
    name: 'STRINGER',
    price: 22000,
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop', 
    description: 'MÁXIMA LIBERTAD PARA ENTRENAR'
  },
  {
    id: 'merch-muscle-tee',
    name: 'MUSCLE TEE',
    price: 25000,
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
    description: 'CORTE AMPLIO RENDIMIENTO TOTAL'
  },
  {
    id: 'merch-top-energy',
    name: 'TOP ENERGY',
    price: 28000,
    img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop',
    description: 'SOPORTE Y CONFORT SIN LÍMITES'
  }
];

const Merch = () => {
  const { addItem, toggleCart } = useCart();

  const handleAdd = (item: typeof merchItems[0]) => {
    addItem({
      name: item.name,
      img: item.img,
      price: item.price
    });
    toggleCart();
  };

  return (
    <section id="merch" className="py-24 bg-[#050505] font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-8xl font-black italic font-display text-white uppercase leading-[0.8] tracking-tighter">
              HARDCORE <br /> <span className="text-[#99FF00]">GEAR</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mt-4">
              Equipamiento oficial para el alto rendimiento
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-white/10 text-[120px] font-black italic font-display leading-none select-none">
              MERCH
            </span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="absolute inset-0 z-20 bg-black/80 backdrop-grayscale backdrop-blur-[2px] flex flex-col items-center justify-center rounded-[40px] border-2 border-dashed border-white/10 p-6 text-center">
              <span className="text-white font-display text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
                PROXIMAMENTE
              </span>
              <span className="text-white font-sans text-[10px] font-black uppercase tracking-[0.4em] mt-2">
                GEAR EN PRODUCCIÓN
              </span>
              <button 
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 px-8 py-3 bg-[#99FF00] text-black font-black italic uppercase rounded-full text-sm hover:scale-105 transition-all pointer-events-auto"
              >
                Avisame
              </button>
          </div>
          {merchItems.map((item) => (
            <div key={item.id} className="group relative bg-[#0D0D0D] rounded-[40px] border border-white/5 p-6 transition-all overflow-hidden opacity-40 grayscale flex flex-col">
              <div className="relative h-48 mb-6 flex items-center justify-center bg-black/20 rounded-3xl border border-white/5 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black italic font-display text-white uppercase leading-none tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-tight mb-4">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                   <span className="text-[#99FF00] font-black italic font-display text-xl">
                    ${item.price.toLocaleString()}
                  </span>
                  <button disabled className="px-4 py-2 bg-white/5 text-white/20 font-black italic uppercase text-[10px] rounded-full cursor-not-allowed border border-white/5">
                    Soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/gear" className="px-12 py-4 border border-white/10 text-white font-black italic uppercase rounded-full hover:bg-white hover:text-black transition-all text-sm tracking-widest">
            Ver Colección Completa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Merch;
