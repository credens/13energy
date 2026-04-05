import { Timer, Zap, RotateCcw } from 'lucide-react';

const UsageGuide = () => {
  const steps = [
    {
      time: '20 MIN ANTES',
      title: 'ACTIVA EL MODO BEAST',
      desc: 'Tomá tu 13Energy Pre-Work bien fría. Los 400mg de cafeína y la Beta-Alanina necesitan unos minutos para entrar en el sistema.',
      icon: <Zap size={30} />,
      color: '#99FF00'
    },
    {
      time: 'DURANTE',
      title: 'MÁXIMO RENDIMIENTO',
      desc: 'Entrená pesado. La Creatina y la Citrulina van a estar trabajando en tu flujo sanguíneo para darte más fuerza y un bombeo superior.',
      icon: <Timer size={30} />,
      color: '#FFFFFF'
    },
    {
      time: 'POST ENTRENAMIENTO',
      title: 'RECONSTRUCCIÓN TOTAL',
      desc: 'Es el momento de Recovery o Colágeno. Hidratá y dale a tus músculos los aminoácidos necesarios para reparar fibras.',
      icon: <RotateCcw size={30} />,
      color: '#00E0FF'
    }
  ];

  return (
    <section className="py-16 bg-[#050505] font-sans relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Encabezado Compacto */}
        <div className="text-center mb-16">
          <span className="text-[#99FF00] font-black tracking-[0.4em] text-[10px] uppercase">Guía de Optimización</span>
          <h2 className="text-5xl md:text-7xl font-black italic font-display uppercase leading-none text-white tracking-tighter mt-2">
            PROTOCOLO <span className="text-[#99FF00]">13</span>
          </h2>
        </div>

        {/* Grilla de Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Icono con Brillo Dinámico */}
              <div 
                className="w-20 h-20 rounded-[28px] bg-[#0D0D0D] border border-white/5 flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ color: step.color, boxShadow: `0 10px 40px -10px ${step.color}20` }}
              >
                {step.icon}
              </div>
              
              {/* Tiempo / Momento */}
              <span 
                className="font-black italic font-display text-xl mb-2 tracking-widest uppercase"
                style={{ color: step.color }}
              >
                {step.time}
              </span>
              
              {/* Título de Paso en Blanco Puro */}
              <h3 className="text-2xl font-black italic font-display text-white uppercase mb-4 tracking-tight leading-none">
                {step.title}
              </h3>
              
              {/* Descripción en Gris de Alto Contraste */}
              <p className="text-[#D1D1D1] text-sm md:text-base leading-relaxed font-medium max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner de Cierre Estilizado */}
        <div className="mt-20 p-[1px] bg-gradient-to-r from-transparent via-[#99FF00]/40 to-transparent rounded-full">
            <div className="bg-[#050505] py-4 px-10 rounded-full text-center">
                <p className="text-white font-black italic font-display text-lg md:text-2xl tracking-[0.1em] uppercase">
                  No es solo una bebida. <span className="text-[#99FF00]">Es un sistema de poder.</span>
                </p>
            </div>
        </div>

      </div>

      {/* Decoración Ambiental Lateral */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#99FF00]/5 blur-[100px] rounded-full -translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default UsageGuide;