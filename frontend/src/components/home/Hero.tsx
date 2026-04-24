import { useState, useEffect } from 'react';
import { useCart } from '../../store/useCart';

const allProducts = [
  { name: 'LIMA', type: 'PRE-WORK', color: '#99FF00', tagline: 'READY TO <br /> DRINK.', img: '/lata-13energy-lima.png', cat: 'PRE-WORK', idx: 0, isAvailable: true },
  { name: 'FRUTILLA', type: 'PRE-WORK', color: '#FF1E1E', tagline: 'FUERZA <br /> EXTREMA.', img: '/lata-13energy-frutilla.png', cat: 'PRE-WORK', idx: 1, isAvailable: true },
  { name: 'LIMONADA', type: 'RECOVERY', color: '#D4FF00', tagline: 'RECUPERACIÓN <br /> TOTAL.', img: '/lata-13energy-recovery-limon.png', cat: 'RECOVERY', idx: 0, isAvailable: false },
  { name: 'RECO-FRUTILLA', type: 'RECOVERY', color: '#FF4D6D', tagline: 'REHIDRATÁ TU <br /> POTENCIA.', img: '/lata-13energy-recovery-frutilla.png', cat: 'RECOVERY', idx: 1, isAvailable: false },
  { name: 'COCO', type: 'RECOVERY + COLÁGENO', color: '#A5F3FC', tagline: 'REPARACIÓN <br /> TOTAL.', img: '/lata-13energy-recovery-colageno-coco.png', cat: 'COLÁGENO', idx: 0, isAvailable: false },
  { name: 'NARANJA', type: 'RECOVERY + COLÁGENO', color: '#FB923C', tagline: 'ARTICULACIONES <br /> FUERTES.', img: '/lata-13energy-recovery-colageno-naranja.png', cat: 'COLÁGENO', idx: 1, isAvailable: false }
];

const Hero = () => {
  const { setSelection } = useCart();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allProducts.length);
    setCurrentSlide(randomIndex);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === allProducts.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAction = () => {
    const current = allProducts[currentSlide];
    if (current.isAvailable) {
      setSelection(current.cat, current.idx);
      document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505] font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 blur-[160px] transition-all duration-1000 rounded-full pointer-events-none" style={{ backgroundColor: allProducts[currentSlide].color }}></div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left py-10 order-2 md:order-1">
          <span className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] border mb-4 inline-block transition-all duration-700 uppercase" style={{ color: allProducts[currentSlide].color, borderColor: allProducts[currentSlide].color + '40' }}>
            {allProducts[currentSlide].type}: {allProducts[currentSlide].name}
          </span>
          <h1 className="text-7xl md:text-[100px] lg:text-[120px] font-black text-white leading-[0.85] italic uppercase mb-6 font-display transition-all duration-700 tracking-tighter" dangerouslySetInnerHTML={{ __html: allProducts[currentSlide].tagline }}></h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={handleAction} 
              style={{ backgroundColor: allProducts[currentSlide].isAvailable ? allProducts[currentSlide].color : '#333' }} 
              className={`px-10 py-5 font-black text-xl rounded-full hover:scale-105 transition-all uppercase italic text-center shadow-xl ${allProducts[currentSlide].isAvailable ? 'text-black' : 'text-white'}`}
            >
              {allProducts[currentSlide].isAvailable ? 'Ver Catálogo' : 'Anotate para el drop'}
            </button>
            <a href="#distribuidores" className="px-10 py-5 border-2 border-white/10 text-white font-black text-xl rounded-full hover:bg-white hover:text-black transition-all uppercase italic text-center">Distribuidores</a>
          </div>
        </div>
        <div className="relative flex justify-center items-center h-[400px] md:h-[700px] order-1 md:order-2">
          {allProducts.map((product, index) => {
            const isActive = currentSlide === index;
            const isNext = index === (currentSlide + 1) % allProducts.length;
            if (!isActive && !isNext) return null;
            return (
              <div key={index} className={`absolute z-10 w-full h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
                <img 
                  src={product.img} 
                  alt={`Lata de 13Energy ${product.type} sabor ${product.name} - Bebida energética 473ml`} 
                  className={`w-auto h-full max-h-[450px] md:max-h-[650px] lg:max-h-[750px] drop-shadow-[0_35px_45px_rgba(0,0,0,0.8)] animate-float object-contain ${!product.isAvailable ? 'grayscale opacity-30' : ''}`} 
                />
                {!product.isAvailable && isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 pointer-events-none">
                    <div className="absolute inset-0 bg-black/40 backdrop-grayscale rounded-[50px] m-10"></div>
                    <span className="relative z-30 text-white font-display text-6xl md:text-[100px] font-black italic uppercase leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
                      PROXIMAMENTE
                    </span>
                    <span className="relative z-30 text-white font-sans text-sm md:text-xl font-black uppercase tracking-[0.2em] mt-2 drop-shadow-lg">
                      ANOTATE PARA EL DROP
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;