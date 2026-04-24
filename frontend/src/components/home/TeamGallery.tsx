const communityPhotos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop', alt: 'Entrenamiento Hardcore' },
  { id: 2, url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop', alt: 'Powerlifting 13Energy' },
  { id: 3, url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop', alt: 'Crossfit Performance' },
  { id: 4, url: 'https://images.unsplash.com/photo-1574673139082-c3b8d4c42bc2?q=80&w=1000&auto=format&fit=crop', alt: 'Boxeo e intensidad' },
  { id: 5, url: 'https://images.unsplash.com/photo-1599058917233-a7995a97c00e?q=80&w=1000&auto=format&fit=crop', alt: 'Bodybuilding community' },
  { id: 6, url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop', alt: 'Atleta 13Energy' },
];

const TeamGallery = () => {
  return (
    <section id="team13" className="py-24 bg-[#050505] font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black italic font-display text-white uppercase leading-none tracking-tighter">
            #TEAM<span className="text-[#99FF00]">13</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-sm mt-4">
            Sumate a la comunidad de alto rendimiento
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-20 bg-black/60 backdrop-grayscale backdrop-blur-[2px] flex flex-col items-center justify-center rounded-[40px] border-2 border-dashed border-white/10">
              <span className="text-white font-display text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter drop-shadow-2xl">
                PROXIMAMENTE
              </span>
              <span className="text-white font-sans text-sm md:text-xl font-black uppercase tracking-[0.4em] mt-4">
                DROP DE COMUNIDAD
              </span>
              <button 
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 px-10 py-4 bg-[#99FF00] text-black font-black italic uppercase rounded-full hover:scale-105 transition-all pointer-events-auto"
              >
                Sumarme al Team
              </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 opacity-40 grayscale">
            {communityPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-[40px] bg-[#0D0D0D] border border-white/5"
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-10">
                  <span className="text-white font-black italic font-display text-2xl md:text-3xl tracking-tighter uppercase">
                    13ENERGY ELITE
                  </span>
                </div>
              </div>
          ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <a 
              href="https://instagram.com/13energy.arg" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block px-10 py-4 border border-[#99FF00]/30 text-[#99FF00] font-black italic uppercase rounded-full hover:bg-[#99FF00] hover:text-black transition-all text-sm tracking-widest"
            >
              Taggeanos para aparecer
            </a>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
