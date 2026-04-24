import { Helmet } from 'react-helmet-async';
import { useCart } from '../../store/useCart';
import { PACK_PRICE, PRICING } from '../../config/constants';

const ProductShowcase = () => {
  const { selectedCategory, selectedFlavor, setSelection, addItem, toggleCart } = useCart();

  const lines = {
    'PRE-WORK': {
      tag: 'POWER & ENERGY',
      comingSoon: false,
      products: [
        { name: 'LIMA', color: '#99FF00', img: '/lata-13energy-lima.png', desc: 'Fórmula original para entrenamientos de alta intensidad.' },
        { name: 'FRUTILLA', color: '#FF1E1E', img: '/lata-13energy-frutilla.png', desc: 'Balance perfecto entre frutilla y naranja.' }
      ],
      nutrition: [{ label: 'BETA ALANINA', value: '+6000mg' }, { label: 'CREATINA', value: '+5000mg' }, { label: 'CAFEÍNA', value: '400mg' }, { label: 'CITRULINA', value: '+2000mg' }, { label: 'L-ARGININA', value: '+2000mg' }, { label: 'CALORÍAS', value: '9KCAL' }]
    },
    'RECOVERY': {
      tag: 'REPARACIÓN & HIDRATACIÓN',
      comingSoon: true,
      products: [
        { name: 'LIMONADA', color: '#D4FF00', img: '/lata-13energy-recovery-limon.png', desc: 'Hidratación profunda. Recuperación sin estimulantes.' },
        { name: 'FRUTILLA', color: '#FF4D6D', img: '/lata-13energy-recovery-frutilla.png', desc: 'Recuperación muscular avanzada con sabor a frutilla.' }
      ],
      nutrition: [{ label: 'BCAAs 2:1:1', value: '5000mg' }, { label: 'GLUTAMINA', value: '3000mg' }, { label: 'ELECTROLITOS', value: '1000mg' }, { label: 'VITAMINA C', value: '500mg' }, { label: 'MAGNESIO', value: '200mg' }, { label: 'AZÚCARES', value: '0g' }]
    },
    'COLÁGENO': {
      tag: 'REPARACIÓN & ARTICULACIONES',
      comingSoon: true,
      products: [
        { name: 'COCO', color: '#A5F3FC', img: '/lata-13energy-recovery-colageno-coco.png', desc: 'Recuperación estructural. Ideal para salud articular.' },
        { name: 'NARANJA', color: '#FB923C', img: '/lata-13energy-recovery-colageno-naranja.png', desc: 'Sabor naranja vibrante con el poder del colágeno.' }
      ],
      nutrition: [{ label: 'COLÁGENO', value: '5000mg' }, { label: 'BCAAs', value: '3000mg' }, { label: 'MAGNESIO', value: '200mg' }, { label: 'VITAMINA D3', value: '10µg' }, { label: 'ZINC', value: '15mg' }, { label: 'CALORÍAS', value: '18KCAL' }]
    }
  };

  const currentLine = lines[selectedCategory as keyof typeof lines];
  const currentProduct = currentLine.products[selectedFlavor] || currentLine.products[0];

  const handleAdd = () => {
    if (currentLine.comingSoon) return;
    addItem({
      name: `${selectedCategory} - ${currentProduct.name}`,
      img: currentProduct.img,
      price: PACK_PRICE
    });
    toggleCart();
  };

  return (
    <section id="productos" className="py-20 bg-[#050505] font-sans">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Bebidas energéticas 13Energy",
          "itemListElement": [
            {
              "@type": "Product",
              "name": "13Energy Pre-Work",
              "description": "Bebida energética pre-workout con 400mg de cafeína, creatina y beta-alanina. Sin azúcar.",
              "brand": { "@type": "Brand", "name": "13Energy" },
              "offers": { "@type": "Offer", "price": "30000", "priceCurrency": "ARS", "availability": "https://schema.org/InStock", "url": "https://13energy.com.ar/#productos" },
              "image": "https://13energy.com.ar/lata-13energy-lima.png"
            },
            {
              "@type": "Product",
              "name": "13Energy Recovery",
              "description": "Bebida de recuperación con BCAAs, Glutamina y electrolitos. Sin estimulantes.",
              "brand": { "@type": "Brand", "name": "13Energy" },
              "offers": { "@type": "Offer", "price": "30000", "priceCurrency": "ARS", "availability": "https://schema.org/InStock", "url": "https://13energy.com.ar/#productos" },
              "image": "https://13energy.com.ar/lata-13energy-recovery-limon.png"
            },
            {
              "@type": "Product",
              "name": "13Energy Recovery + Colágeno",
              "description": "Bebida de recuperación con colágeno hidrolizado para articulaciones y tendones.",
              "brand": { "@type": "Brand", "name": "13Energy" },
              "offers": { "@type": "Offer", "price": "30000", "priceCurrency": "ARS", "availability": "https://schema.org/InStock", "url": "https://13energy.com.ar/#productos" },
              "image": "https://13energy.com.ar/lata-13energy-recovery-colageno-coco.png"
            }
          ]
        })}</script>
      </Helmet>
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 border-b border-white/5 pb-6 text-white">
          {Object.keys(lines).map((cat) => (
            <button key={cat} onClick={() => setSelection(cat, 0)} className={`text-xl md:text-3xl font-black italic font-display uppercase transition-all ${selectedCategory === cat ? 'text-white scale-110' : 'text-gray-700 hover:text-gray-400'}`}>
              {cat === 'COLÁGENO' ? 'RECOVERY + COLÁGENO' : cat}
              {selectedCategory === cat && <span className="text-13neon ml-1">.</span>}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-2 text-white">
          {currentLine.products.map((p, idx) => (
            <button key={idx} onClick={() => setSelection(selectedCategory, idx)} className={`px-6 py-2 rounded-t-2xl font-black italic uppercase transition-all border-x border-t text-[10px] ${selectedFlavor === idx ? 'bg-white text-black' : 'bg-transparent text-gray-500 border-white/5'}`} style={{ borderColor: selectedFlavor === idx ? p.color : '' }}>{p.name}</button>
          ))}
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#0D0D0D] rounded-b-[32px] rounded-tr-[32px] border border-white/5 px-8 pt-6 pb-12 shadow-2xl">
          {currentLine.comingSoon && (
            <div className="absolute inset-0 z-20 rounded-b-[32px] rounded-tr-[32px] bg-black/70 backdrop-grayscale backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-auto">
              <span className="text-gray-300 font-black italic font-display uppercase text-4xl md:text-6xl tracking-tight">Próximamente</span>
              <span className="text-gray-500 font-bold uppercase text-xs tracking-[0.4em] mt-3">Línea en desarrollo</span>
            </div>
          )}
          <div className={`relative flex items-center justify-center h-[400px] md:h-[550px] ${currentLine.comingSoon ? 'grayscale opacity-60' : ''}`}>
            <div className="absolute w-48 h-48 md:w-64 md:h-64 blur-[100px] opacity-20 rounded-full transition-all duration-1000" style={{ backgroundColor: currentProduct.color }}></div>
            <img key={currentProduct.name + selectedCategory} src={currentProduct.img} alt={`Lata de 13Energy ${selectedCategory} sabor ${currentProduct.name} - ${currentLine.tag}`} className="relative z-10 w-auto h-full max-h-[500px] drop-shadow-2xl animate-float object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-4xl md:text-6xl font-black italic font-display uppercase leading-none mb-3" style={{ color: currentProduct.color }}>{currentLine.tag}</h3>
            <p className="text-[#D1D1D1] text-lg font-medium mb-6 max-w-md">{currentProduct.desc}</p>
            <div className="grid grid-cols-3 gap-y-4 gap-x-6 mb-8 py-6 border-y border-white/10 text-white">
              {currentLine.nutrition.map((n, i) => (
                <div key={i} className="flex flex-col group transition-all">
                  <span className="text-gray-300 font-black uppercase text-[9px] mb-1">{n.label}</span>
                  <span className="text-white font-black text-xl md:text-2xl font-display italic leading-none">{n.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <button onClick={handleAdd} disabled={currentLine.comingSoon} className="px-12 py-5 rounded-full font-black text-xl italic uppercase shadow-xl hover:scale-105 active:scale-95 transition-all w-fit disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100" style={{ backgroundColor: currentProduct.color, color: 'black' }}>{currentLine.comingSoon ? 'Próximamente' : 'Pedir Pack x6'}</button>
              <div className="flex flex-col">
                <span className="text-white font-black text-3xl font-display italic leading-none">${PRICING.UNIT_PRICE.toLocaleString()}</span>
                <span className="text-gray-500 font-bold uppercase text-[9px] tracking-widest mt-1">Precio por lata</span>
              </div>
            </div>
            {selectedCategory === 'PRE-WORK' && (
              <div className="pt-6 border-t border-white/5 text-white">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest leading-relaxed text-justify italic">
                  <strong className="text-white font-bold">IMPORTANTE:</strong> No utilizar en caso de embarazo, lactancia ni niños. Consumir máximo 1 envase por día. No mezclar con alcohol.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;