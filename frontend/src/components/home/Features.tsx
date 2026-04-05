import { Zap, ShieldPlus, Brain } from 'lucide-react';

const Features = () => {
  const pillars = [
    {
      id: '01',
      title: 'EXPLOSIÓN',
      desc: '400mg de cafeína anhídra para una energía inmediata y sostenida.',
      icon: <Zap size={32} />,
      color: '#99FF00' // Verde Neón
    },
    {
      id: '02',
      title: 'RECONSTRUCCIÓN',
      desc: 'Matriz de aminoácidos y colágeno para reparar fibras y articulaciones.',
      icon: <ShieldPlus size={32} />,
      color: '#FF1E1E' // Rojo
    },
    {
      id: '03',
      title: 'ENFOQUE',
      desc: 'Concentración absoluta sin bajones de azúcar ni nerviosismo.',
      icon: <Brain size={32} />,
      color: '#00E0FF' // Cyan
    }
  ];

  return (
    <section className="py-16 bg-[#050505] font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div 
              key={p.id} 
              className="relative p-10 rounded-[40px] bg-[#0D0D0D] border border-white/5 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_50px_rgba(0,0,0,1)]"
              style={{ borderTopColor: p.color + '30' }}
            >
              {/* Resplandor de fondo al pasar el mouse */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-10 group-hover:opacity-25 transition-opacity rounded-full"
                style={{ backgroundColor: p.color }}
              ></div>

              <div className="flex justify-between items-start mb-10">
                <div 
                  className="p-4 rounded-2xl border border-white/10 shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ color: p.color, backgroundColor: 'black' }}
                >
                  {p.icon}
                </div>
                <span className="text-white/10 font-black italic text-6xl font-display leading-none select-none">
                  {p.id}
                </span>
              </div>

              <h3 className="text-4xl font-black italic font-display text-white mb-4 uppercase tracking-tighter">
                {p.title}
              </h3>
              
              <p className="text-[#D1D1D1] text-lg font-medium leading-relaxed mb-8">
                {p.desc}
              </p>

              {/* Barra de progreso inferior */}
              <div 
                className="h-1 w-12 rounded-full transition-all duration-700 group-hover:w-full"
                style={{ backgroundColor: p.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;