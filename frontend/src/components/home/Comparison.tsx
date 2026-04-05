import { Zap, ShieldAlert, BarChart3 } from 'lucide-react';

const Comparison = () => {
  const data = [
    { label: 'CAFEÍNA ANHÍDRA', powerValue: '400mg', others: '80mg', win: true },
    { label: 'CREATINA MONOHIDRATO', powerValue: '5440mg', others: '0mg', win: true },
    { label: 'BETA-ALANINA', powerValue: '6550mg', others: '0mg', win: true },
    { label: 'L-ARGININA / CITRULINA', powerValue: '4350mg', others: '0mg', win: true },
    { label: 'AZÚCARES AÑADIDOS', powerValue: '0g', others: '27g+', win: false },
  ];

  return (
    <section id="comparativa" className="py-16 bg-[#0D0D0D] border-y border-white/5 relative overflow-hidden">
      {/* Contenedor más angosto (max-w-4xl en vez de 5xl) */}
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-12">
          <span className="text-[#99FF00] font-black tracking-[0.4em] text-[9px] uppercase">Data Driven Performance</span>
          <h2 className="text-4xl md:text-6xl font-black italic font-display uppercase leading-none text-white tracking-tighter mt-2">
            LA CIENCIA <span className="text-[#99FF00]">NO MIENTE</span>
          </h2>
        </div>

        {/* TABLA COMPACTADA */}
        <div className="bg-[#080808] rounded-[32px] border border-white/10 overflow-hidden shadow-xl">
          
          {/* ENCABEZADO: Más bajo y con fuente ajustada */}
          <div className="grid grid-cols-3 bg-white/10 py-6 px-6 md:px-10 border-b border-white/5">
            <div className="text-left text-gray-200 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Componente
            </div>
            <div className="text-center text-gray-500 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Competencia
            </div>
            <div className="text-center text-[#99FF00] font-black uppercase tracking-[0.2em] text-xs md:text-xl flex items-center justify-center gap-2 font-display italic">
              <Zap size={16} fill="#99FF00" /> 13ENERGY
            </div>
          </div>

          {/* CUERPO DE LA TABLA: Filas más bajas */}
          {data.map((item, idx) => (
            <div key={idx} className="grid grid-cols-3 py-6 md:py-8 px-6 md:px-10 border-b border-white/5 items-center hover:bg-white/[0.01] transition-colors">
              <div className="text-left">
                <span className="text-white font-black italic font-display text-lg md:text-2xl tracking-wider uppercase leading-none">
                  {item.label}
                </span>
              </div>

              <div className="text-center">
                <span className="text-gray-700 font-black text-xl md:text-3xl font-display italic leading-none">
                  {item.others}
                </span>
              </div>

              <div className="text-center">
                <span className={`font-black text-3xl md:text-5xl font-display italic leading-none ${item.win ? 'text-[#99FF00]' : 'text-white'}`}>
                  {item.powerValue}
                </span>
              </div>
            </div>
          ))}
          
          {/* Conclusión Final más compacta */}
          <div className="p-8 bg-gradient-to-r from-[#99FF00]/5 via-transparent to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-[#99FF00] rounded-xl flex items-center justify-center text-black shadow-md shrink-0">
                <BarChart3 size={20} />
              </div>
              <p className="text-white font-black uppercase italic text-xs md:text-sm tracking-tight leading-tight">
                PAGÁS POR <span className="text-[#99FF00]">RESULTADOS</span>, <br /> NO POR MARKETING.
              </p>
            </div>
            <a href="#distribuidores" className="bg-white text-black font-black uppercase italic px-8 py-3 rounded-full text-xs hover:bg-[#99FF00] transition-all font-display tracking-widest">
              Sumate al Team
            </a>
          </div>
        </div>

        {/* Disclaimer Legal más discreto */}
        <div className="mt-8 flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
          <ShieldAlert className="text-gray-600 shrink-0" size={18} />
          <p className="text-[9px] text-gray-600 uppercase tracking-widest leading-tight text-left italic">
            Comparativa basada en promedios de marcas líderes (473ml). 13Energy es un suplemento dietario de alto rendimiento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;