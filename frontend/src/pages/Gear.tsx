import { useCart } from '../store/useCart';
import { Link } from 'react-router-dom';

const gearItems = [
  { id: 'merch-stringer', name: 'STRINGER', price: 22000, description: 'MÁXIMA LIBERTAD PARA ENTRENAR', img: '/merch/stringer.png' },
  { id: 'merch-muscle-tee', name: 'MUSCLE TEE', price: 25000, description: 'CORTE AMPLIO RENDIMIENTO TOTAL', img: '/merch/muscle-tee.png' },
  { id: 'merch-top-energy', name: 'TOP ENERGY', price: 28000, description: 'SOPORTE Y CONFORT SIN LÍMITES', img: '/merch/top-energy.png' },
  { id: 'merch-top-back', name: 'TOP BACK', price: 28000, description: 'DISEÑO EN ESPALDA MÁXIMA SUJECIÓN', img: '/merch/top-back.png' },
  { id: 'merch-crop-tee', name: 'CROP TEE', price: 26000, description: 'ESTILO OVERSIZE PARA TU DÍA A DÍA', img: '/merch/crop-tee.png' },
  { id: 'merch-hoodie-oversize', name: 'HOODIE OVERSIZE', price: 55000, description: 'COMODIDAD Y ACTITUD SIEMPRE ENFOCADO', img: '/merch/hoodie-oversize.png' }
];

const Gear = () => {
  const { showNotification } = useCart();

  const handleBuy = () => {
    showNotification("GEAR EN PRODUCCIÓN - TE AVISAREMOS", "error");
    // Scroll a newsletter en el home si se redirige, o simplemente mostrar aviso
    window.location.href = "/#newsletter";
  };

  return (
    <div className="pt-32 pb-20 bg-[#050505] min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <Link to="/" className="text-[#99FF00] font-black italic uppercase text-xs tracking-widest hover:underline mb-4 inline-block">← Volver al Home</Link>
          <h1 className="text-7xl md:text-9xl font-black italic font-display text-white uppercase leading-[0.8] tracking-tighter">
            HARDCORE <br /> <span className="text-[#99FF00]">GEAR</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-sm mt-6">Equipamiento oficial 13Energy Performance</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {gearItems.map((item) => (
            <div key={item.id} className="group relative bg-[#0D0D0D] rounded-[40px] border border-white/5 p-10 transition-all hover:border-[#99FF00]/30 flex flex-col h-full overflow-hidden">
              <div className="relative aspect-square mb-8 flex items-center justify-center bg-black/40 rounded-3xl overflow-hidden border border-white/5">
                 <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                 <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <span className="text-[#99FF00] font-display text-3xl font-black italic uppercase">Proximamente</span>
                 </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-black italic font-display text-white uppercase leading-none tracking-tight">{item.name}</h2>
                    <span className="text-[#99FF00] font-black italic font-display text-3xl">${item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-8">{item.description}</p>
                </div>

                <button 
                  onClick={handleBuy}
                  className="w-full py-5 bg-[#111] text-white border border-white/10 font-black italic uppercase rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Anotate para el Drop
                  <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gear;
