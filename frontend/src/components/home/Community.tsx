const Community = () => {
  const posts = [
    { id: 1, type: 'GYM', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', text: 'NUEVO PR ALCANZADO CON 13ENERGY' },
    { id: 2, type: 'GAMING', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', text: 'FOCUS TOTAL EN EL TORNEO NOCTURNO' },
    { id: 3, type: 'CROSSFIT', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800', text: 'READY TO DRINK: ABRÍS Y DETONÁS' },
    { id: 4, type: 'OUTDOOR', img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800', text: 'RECUPERACIÓN TOTAL POST-ENTRENO' },
  ];

  return (
    <section id="comunidad" className="py-24 bg-[#050505] overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <span className="text-13neon font-black tracking-[0.4em] text-[10px] uppercase">Comunidad Activa</span>
            <h2 className="text-6xl md:text-8xl font-black italic font-display uppercase leading-none text-white tracking-tighter">
              TEAM <span className="text-13neon">13</span>
            </h2>
          </div>
          <div className="text-right">
             <a href="https://instagram.com/13energy.ok" target="_blank" rel="noreferrer" className="text-white font-black italic text-2xl font-display hover:text-13neon transition-colors uppercase tracking-tight">
                @13energy.ok
             </a>
          </div>
        </div>

        {/* Grilla de Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative group overflow-hidden rounded-[32px] aspect-square bg-black border border-white/5 shadow-2xl">
              <img src={post.img} alt={post.type} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-13neon text-black text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">#{post.type}</span>
                <p className="text-white font-bold uppercase italic text-sm mt-3 tracking-tight">{post.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BANNER BLANCO CON TEXTO FORZADO EN NEGRO */}
        <div className="mt-20 p-10 md:p-16 bg-white rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 group shadow-2xl">
          <div className="text-black text-center md:text-left">
            <h3 className="text-5xl md:text-[80px] font-black italic font-display leading-none uppercase tracking-tighter mb-6 !text-black">
              ¿SOS ATLETA <br /> O STREAMER?
            </h3>
            
            <div className="flex flex-col gap-2">
              {/* El "!" antes de text-black obliga a ignorar cualquier otra regla de color */}
              <div className="!text-black font-black uppercase tracking-tight text-xl md:text-2xl leading-none">
                Buscamos la próxima cara de 13Energy.
              </div>
              <div className="!text-black font-black uppercase tracking-[0.2em] text-xs md:text-sm">
                Sumate al equipo oficial.
              </div>
            </div>
          </div>

          <a 
            href="mailto:13energy.ok@gmail.com?subject=Postulacion Team 13" 
            className="px-12 py-6 bg-black text-[#99FF00] font-black italic text-xl rounded-full hover:scale-105 transition-all uppercase shadow-2xl font-display tracking-widest"
          >
            Postularme Ahora
          </a>
        </div>

      </div>
    </section>
  );
};

export default Community;