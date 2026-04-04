const Distributors = () => {
  return (
    <section id="distribuidores" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black font-display italic uppercase mb-6 leading-none tracking-tighter">
            Llevá la <br /><span className="text-13neon">Energía</span> a tu zona
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg">
            Buscamos gimnasios, tiendas de suplementos y distribuidores mayoristas. Unimate al equipo de 13Energy.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {['Envios a todo el país', 'Precios Mayoristas', 'Soporte de Marca'].map(i => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-13neon border border-13neon/30 px-4 py-2 rounded-full">
                <span>●</span> {i}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl">
          <form className="bg-13gray p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl flex flex-col gap-5">
            <input type="text" placeholder="NOMBRE COMPLETO" className="bg-black border border-white/10 p-5 rounded-2xl focus:border-13neon outline-none transition-all uppercase font-bold text-xs tracking-widest text-white placeholder:text-gray-700" />
            <input type="email" placeholder="EMAIL" className="bg-black border border-white/10 p-5 rounded-2xl focus:border-13neon outline-none transition-all uppercase font-bold text-xs tracking-widest text-white placeholder:text-gray-700" />
            <textarea placeholder="MENSAJE O CIUDAD" rows={3} className="bg-black border border-white/10 p-5 rounded-2xl focus:border-13neon outline-none transition-all uppercase font-bold text-xs tracking-widest text-white placeholder:text-gray-700"></textarea>
            <button className="bg-13neon text-black font-black uppercase italic py-6 rounded-2xl hover:scale-[1.02] transition-all font-display text-2xl tracking-widest shadow-lg shadow-13neon/20">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Distributors;