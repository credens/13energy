const NutritionalTable = () => {
  // Valores calculados por envase completo de 473ml
  const specs = [
    { label: 'Beta Alanina', value: '6550mg', desc: 'Resistencia Máxima' },
    { label: 'Creatina Monohidrato', value: '5440mg', desc: 'Potencia Explosiva' },
    { label: 'L-Arginina', value: '2175mg', desc: 'Vasodilatación / Pump' },
    { label: 'Citrulina', value: '2175mg', desc: 'Flujo Sanguíneo' },
    { label: 'L-Taurina', value: '540mg', desc: 'Foco Mental' },
    { label: 'Azúcares', value: '0g', desc: 'Energía Limpia' },
  ];

  return (
    <section id="productos" className="py-32 bg-13gray">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-13black p-8 md:p-16 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-4 font-display leading-none">
              Fórmula <span className="text-13neon">Hardcore</span>
            </h2>
            <p className="text-gray-500 font-bold tracking-[0.3em] uppercase text-[10px]">
              Valores totales por envase de 473ml
            </p>
          </div>

          {/* DESTACADO: CAFEÍNA */}
          <div className="mb-12 bg-white/5 border border-13neon/30 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between group hover:border-13neon transition-all">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-13neon font-display text-6xl md:text-8xl font-black italic leading-none">
                400mg
              </h3>
              <p className="text-white font-black uppercase tracking-[0.2em] text-xl md:text-2xl italic leading-none">
                Cafeína Anhídra
              </p>
            </div>
            <div className="text-center md:text-right max-w-xs">
              <p className="text-gray-400 text-sm font-medium">
                La dosis más alta permitida para un rendimiento extremo. 
                <span className="text-white block mt-2 font-bold uppercase text-xs tracking-widest">
                  Ready to Drink - Sin vueltas.
                </span>
              </p>
            </div>
          </div>

          {/* Grilla de otros ingredientes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
            {specs.map((item, idx) => (
              <div 
                key={idx} 
                className="flex justify-between items-end border-b border-white/5 pb-4 group hover:border-13neon/20 transition-all"
              >
                <div>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[9px] block mb-1">
                    {item.desc}
                  </span>
                  <span className="text-white font-bold uppercase tracking-widest text-sm leading-none">
                    {item.label}
                  </span>
                </div>
                <span className="text-13neon font-black text-4xl italic font-display leading-none">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          
          {/* SECCIÓN DE LEGALES Y ADVERTENCIAS */}
          <div className="mt-12 pt-10 border-t border-white/10 bg-black/40 p-6 md:p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-6 text-red-500">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
               <h4 className="font-black uppercase tracking-[0.3em] text-xs">Advertencias e Importante</h4>
            </div>
            
            <p className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-wider leading-relaxed text-justify">
              <strong className="text-gray-300">IMPORTANTE:</strong> No utilizar en caso de embarazo, mujeres en período de lactancia ni en niños. 
              Mantener fuera del alcance de los niños. Consumir este producto de acuerdo con las recomendaciones de ingesta diaria establecidas en el rótulo. 
              El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Consumir a su medida antes de consumir este producto. 
              Se sugiere no consumir con alcohol. Este producto está indicado para personas que realizan ejercicio físico con requerimiento de calorías diarias 
              superior al promedio de la población (mayor a 2000 kcal/día). 
              <span className="text-13neon font-bold block mt-4 border-l-2 border-13neon pl-4 uppercase tracking-[0.2em]">
                Consumir como máximo 1 envase por día.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NutritionalTable;