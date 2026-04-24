import { useState } from 'react';
import { useCart } from '../../store/useCart';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useCart();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !EMAIL_REGEX.test(email)) {
      showNotification("EMAIL INVÁLIDO", "error");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        showNotification("HYPE ACTIVADO: TE AVISAREMOS");
      } else {
        showNotification("ERROR AL SUSCRIBIRSE", "error");
      }
    } catch {
      showNotification("ERROR DE CONEXIÓN", "error");
    }
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden font-sans">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#99FF00]/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="bg-[#99FF00] p-8 md:p-20 rounded-[50px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="text-5xl md:text-7xl font-black italic font-display !text-black uppercase leading-[0.8] mb-8 tracking-tighter">
              ¿LISTO PARA EL <br /> PRÓXIMO DROP?
            </h2>

            <div className="flex flex-col gap-1">
              <div className="!text-black font-black uppercase tracking-tight text-xl md:text-2xl leading-none">
                Buscamos la próxima cara de 13Energy.
              </div>
              <div className="!text-black font-black uppercase tracking-[0.2em] text-xs md:text-sm">
                Sumate al equipo oficial.
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md z-10">
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="TU EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black !text-white px-6 py-5 rounded-full font-black text-xs tracking-[0.2em] outline-none focus:ring-4 focus:ring-black/20 transition-all placeholder:!text-white/40"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black text-[#99FF00] px-10 py-5 rounded-full font-black italic text-xl uppercase font-display hover:scale-105 active:scale-95 transition-all shadow-2xl tracking-widest border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isLoading ? '...' : 'Avisame'}
              </button>
            </form>

            <div className="mt-4 !text-black font-black uppercase tracking-[0.1em] text-[10px] text-center md:text-left">
              * Recibí una notificación exclusiva cuando abramos el stock.
            </div>
          </div>

          <span className="absolute -bottom-10 left-0 text-[200px] font-black italic text-black/5 pointer-events-none font-display select-none">
            13ENERGY
          </span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
