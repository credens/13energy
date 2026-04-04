import { useState } from 'react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      name: 'LIMA',
      color: '#99FF00',
      img: '/lata-13energy.png',
      tagline: 'READY TO DRINK',
      description: 'Nuestra fórmula original. Energía cítrica pura para entrenamientos de alta intensidad.'
    },
    {
      name: 'MANGO',
      color: '#FF8000',
      img: '/lata-13energy-mango.png',
      tagline: 'EXPLOSIÓN TROPICAL',
      description: 'El dulzor del mango maduro con la potencia de 400mg de cafeína. Sabor imbatible.'
    },
    {
      name: 'FRUTILLA-NARANJA',
      color: '#FF1E1E',
      img: '/lata-13energy-frutilla.png',
      tagline: 'FUERZA EXTREMA',
      description: 'El balance perfecto entre frutilla y naranja. Rendimiento hardcore con un perfil único.'
    }
  ];

  const nutrition = [
    { label: 'BETA ALANINA', value: '6550mg' },
    { label: 'CREATINA', value: '5440mg' },
    { label: 'CITRULINA', value: '2175mg' },
    { label: 'L-ARGININA', value: '2175mg' },
    { label: 'L-TAURINA', value: '540mg' },
    { label: 'CAFEÍNA', value: '400mg' },
  ];

  return (
    <section id="productos" className="pt-10 pb-24 bg-13black">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Selector de Sabores (Pegado a la caja) */}
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          {products.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 rounded-t-2xl font-black italic uppercase tracking-widest transition-all duration-300 border-x border-t text-[10px] ${
                activeTab === idx 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-gray-400 border-white/5 hover:border-white/10'
              }`}
              style={{ borderColor: activeTab === idx ? p.color : '' }}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-13gray rounded-b-[32px] rounded-tr-[32px] rounded-tl-none border border-white/5 px-8 pt-4 pb-12">
          
          {/* COLUMNA IZQUIERDA: LATA */}
          <div className="relative flex items-center justify-center h-[400px] md:h-[550px]">
            <div 
              className="absolute w-48 h-48 md:w-64 md:h-64 blur-[100px] opacity-20 transition-all duration-1000 rounded-full"
              style={{ backgroundColor: products[activeTab].color }}
            ></div>
            
            <img 
              key={activeTab}
              src={products[activeTab].img} 
              alt={products[activeTab].name} 
              className="relative z-10 w-auto h-full max-h-[350px] md:max-h-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-float object-contain transition-all duration-700"
            />
          </div>

          {/* COLUMNA DERECHA: INFO */}
          <div className="flex flex-col justify-center">
            
            <div className="mb-6">
              <h3 className="text-4xl md:text-6xl font-black italic font-display uppercase leading-none mb-3 tracking-tighter" style={{ color: products[activeTab].color }}>
                {products[activeTab].tagline}
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-medium max-w-md">
                {products[activeTab].description}
              </p>
            </div>

            {/* Ficha Técnica */}
            <div className="flex gap-3 mb-6">
              <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <span className="text-white font-bold uppercase italic font-display text-lg tracking-widest">473ML</span>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <span className="text-white font-bold uppercase italic font-display text-lg tracking-widest">FÓRMULA RTD</span>
              </div>
            </div>

            {/* TABLA NUTRICIONAL (CORREGIDA LEGIBILIDAD) */}
            <div className="grid grid-cols-3 gap-y-4 gap-x-6 mb-8 py-6 border-y border-white/10">
              {nutrition.map((n, i) => (
                <div key={i} className="flex flex-col">
                  {/* Nombre del ingrediente en un gris mucho más claro y bold */}
                  <span className="text-gray-300 font-black uppercase tracking-widest text-[9px] mb-1">
                    {n.label}
                  </span>
                  <span className="text-white font-black text-xl md:text-2xl font-display italic leading-none">
                    {n.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Botón y Advertencia */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <button 
                  className="px-10 py-4 rounded-full font-black text-lg italic uppercase transition-all shadow-xl hover:scale-105 active:scale-95"
                  style={{ backgroundColor: products[activeTab].color, color: 'black' }}
                >
                  Comprar Pack x6
                </button>
                <span className="text-white font-black uppercase italic text-[10px] tracking-widest">Stock Disponible</span>
              </div>

              <p className="text-[9px] text-gray-500 uppercase tracking-widest leading-tight text-justify opacity-80 border-t border-white/5 pt-4">
                <strong className="text-red-600 italic">ADVERTENCIA:</strong> No apto para embarazadas, lactancia ni niños. No mezclar con alcohol. Máximo 1 envase por día. Suplemento para deportistas de alto rendimiento.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;