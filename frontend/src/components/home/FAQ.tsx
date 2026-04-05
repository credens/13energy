import { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, ShieldCheck, Clock, Flame, Droplets, Activity } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿POR QUÉ 400mg DE CAFEÍNA?",
      answer: "Es la dosis estándar para atletas de alto rendimiento. Mientras otras bebidas tienen 80-150mg, 13Energy está diseñada para entrenamientos de máxima exigencia donde el enfoque y la energía no pueden fallar.",
      icon: <Zap size={20} className="text-[#99FF00]" />
    },
    {
      question: "¿QUÉ ES EL COSQUILLEO QUE SIENTO?",
      answer: "Es la Beta-Alanina actuando. Es un efecto inofensivo llamado parestesia que indica que el suplemento está circulando por tu sistema, ayudando a retrasar la fatiga muscular y el ácido láctico.",
      icon: <Flame size={20} className="text-[#99FF00]" />
    },
    {
      question: "¿CÓMO FUNCIONA LA LÍNEA RECOVERY?",
      answer: "Nuestra línea Recovery está diseñada para frenar el catabolismo muscular y reponer electrolitos perdidos. Con 5000mg de BCAAs y Glutamina, acelera la reparación de tejidos sin usar estimulantes, siendo ideal para después de entrenar o sesiones nocturnas.",
      icon: <Droplets size={20} className="text-[#00E0FF]" />
    },
    {
      question: "¿QUÉ BENEFICIO TIENE EL COLÁGENO?",
      answer: "La línea Recovery + Colágeno suma 5000mg de colágeno hidrolizado a la matriz de recuperación. Está enfocada en proteger articulaciones, tendones y ligamentos del desgaste extremo, promoviendo una recuperación estructural integral.",
      icon: <Activity size={20} className="text-[#FB923C]" />
    },
    {
      question: "¿CUÁNDO ES EL MEJOR MOMENTO PARA TOMARLA?",
      answer: "Para PRE-WORK: 15-20 minutos antes de entrenar. Para RECOVERY y COLÁGENO: durante o inmediatamente después de la actividad física para maximizar la absorción de nutrientes.",
      icon: <Clock size={20} className="text-[#99FF00]" />
    },
    {
      question: "¿ES UN PRODUCTO APTO PARA CELÍACOS?",
      answer: "Sí. Según nuestra tabla nutricional, no contiene gluten. Es energía limpia diseñada bajo estándares de laboratorio para ser segura y efectiva.",
      icon: <ShieldCheck size={20} className="text-[#99FF00]" />
    }
  ];

  return (
    <section id="faq" className="py-32 bg-[#050505] border-t border-white/5 font-sans">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="text-[#99FF00] font-black tracking-[0.4em] text-[10px] uppercase">Manual de Usuario</span>
          <h2 className="text-5xl md:text-7xl font-black italic font-display uppercase leading-none text-white tracking-tighter mt-4">
            CULTURA <span className="text-[#99FF00]">HARDCORE</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-[32px] transition-all duration-300 ${
                openIndex === index ? 'border-[#99FF00]/50 bg-white/[0.03]' : 'border-white/5 bg-transparent'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-10 text-left outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0">{faq.icon}</div>
                  <span className="text-white font-black italic font-display text-xl md:text-3xl tracking-wider uppercase leading-none">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? <ChevronUp className="text-[#99FF00]" /> : <ChevronDown className="text-gray-600" />}
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-10 pb-10">
                  <p className="text-[#D1D1D1] font-medium leading-relaxed text-base md:text-xl border-t border-white/5 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
              Ciencia y Potencia aplicada al entrenamiento
            </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;