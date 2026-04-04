import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // LÍNEA COMPLETA PRE-WORK 13ENERGY
  const products = [
    {
      id: 1,
      flavor: 'LIMA',
      color: '#99FF00', // Verde Neón
      tagline: 'READY TO <br /> <span class="text-[#99FF00]">DRINK.</span>',
      description: 'El pre-entreno definitivo en lata. 400mg de pura potencia sabor Lima para romper tus límites.',
      img: '/lata-13energy.png'
    },
    {
      id: 2,
      flavor: 'MANGO',
      color: '#FF8000', // Naranja Mango
      tagline: 'EXPLOSIÓN <br /> <span class="text-[#FF8000]">TROPICAL.</span>',
      description: 'Toda la potencia de nuestra fórmula Hardcore con un sabor Mango refrescante y adictivo.',
      img: '/lata-13energy-mango.png'
    },
    {
      id: 3,
      flavor: 'FRUTILLA-NARANJA',
      color: '#FF1E1E', // Rojo Frutilla Intenso
      tagline: 'FUERZA <br /> <span class="text-[#FF1E1E]">EXTREMA.</span>',
      description: 'Sabor dual Frutilla-Naranja. El balance perfecto entre frescura y rendimiento extremo en cada entrenamiento.',
      img: '/lata-13energy-frutilla.png' 
    }
  ];

  // Cambio automático cada 5 segundos para mantener el dinamismo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-13black font-sans">
      
      {/* Luz de fondo dinámica - El resplandor que cambia según el sabor */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15 blur-[160px] transition-all duration-1000 rounded-full pointer-events-none"
        style={{ backgroundColor: products[currentSlide].color }}
      ></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Izquierdo: Textos y CTA */}
        <div className="text-center md:text-left py-10 order-2 md:order-1 h-[450px] md:h-auto flex flex-col justify-center">
          <div className="mb-4">
             <span 
              className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] border transition-all duration-700 uppercase"
              style={{ color: products[currentSlide].color, borderColor: products[currentSlide].color + '40' }}
             >
               SABOR: {products[currentSlide].flavor}
             </span>
          </div>

          <h1 
            className="text-6xl md:text-[90px] lg:text-[110px] font-black text-white leading-[0.85] italic uppercase mb-6 tracking-tighter font-display transition-all duration-700"
            dangerouslySetInnerHTML={{ __html: products[currentSlide].tagline }}
          ></h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-md mx-auto md:mx-0 font-medium transition-all duration-700 leading-tight">
            {products[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
               style={{ backgroundColor: products[currentSlide].color }}
               className="px-10 py-5 text-black font-black text-xl rounded-full hover:scale-105 transition-all uppercase italic shadow-2xl shadow-black/50"
            >
              Probala ahora
            </button>
            <button className="px-10 py-5 border-2 border-white/10 text-white font-black text-xl rounded-full hover:bg-white hover:text-black transition-all uppercase italic">
              Venta Mayorista
            </button>
          </div>
          
          {/* Indicadores de Sabor (Puntos) */}
          <div className="flex gap-3 mt-12 justify-center md:justify-start">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-700 rounded-full ${currentSlide === index ? 'w-12' : 'w-4 bg-white/10'}`}
                style={{ backgroundColor: currentSlide === index ? products[index].color : '' }}
              ></button>
            ))}
          </div>
        </div>

        {/* Lado Derecho: La Lata Completa Animada */}
        <div className="relative flex justify-center items-center h-[500px] md:h-[700px] lg:h-[800px] order-1 md:order-2">
          {products.map((product, index) => (
            <img 
              key={product.id}
              src={product.img} 
              alt={product.flavor} 
              className={`absolute z-10 w-auto h-full max-h-[450px] md:max-h-[650px] lg:max-h-[750px] drop-shadow-[0_35px_45px_rgba(0,0,0,0.8)] animate-float transition-all duration-1000 ease-in-out object-contain ${
                currentSlide === index 
                ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                : 'opacity-0 translate-y-20 scale-90 rotate-6 pointer-events-none'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;