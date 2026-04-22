import { useState } from 'react';
import { useCart } from '../../store/useCart';

const Distributors = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const { showNotification } = useCart(); // <--- IMPORTAMOS NOTIFICACIÓN

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/distributors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('');
        showNotification("SOLICITUD ENVIADA AL TEAM 13"); // <--- DISPARA EL TOAST
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error al enviar. Intentá nuevamente.');
        showNotification("ERROR AL ENVIAR SOLICITUD", "error");
      }
    } catch (error) {
      setStatus('Error de conexión con el servidor.');
      showNotification("ERROR DE CONEXIÓN", "error");
    }
  };

  return (
    <section id="distribuidores" className="py-32 bg-black text-white font-sans">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black font-display italic uppercase mb-6 leading-none tracking-tighter">
            Llevá la <br /><span className="text-[#99FF00]">Energía</span> a tu zona
          </h2>
          <div className="flex flex-col gap-4 items-center md:items-start mt-10">
             <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Escribinos directamente:</p>
             <a href="mailto:13energy.ok@gmail.com" className="text-white hover:text-[#99FF00] transition-colors font-display text-2xl italic tracking-widest uppercase">
                13ENERGY.OK@GMAIL.COM
             </a>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl">
          <form onSubmit={handleSubmit} className="bg-[#0D0D0D] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl flex flex-col gap-5">
            <input 
              type="text" 
              required
              placeholder="NOMBRE COMPLETO" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none transition-all font-bold text-xs text-white placeholder:text-gray-700" 
            />
            <input 
              type="email" 
              required
              placeholder="EMAIL" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none transition-all font-bold text-xs text-white placeholder:text-gray-700" 
            />
            <textarea 
              placeholder="MENSAJE O CIUDAD" 
              rows={3} 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none transition-all font-bold text-xs text-white placeholder:text-gray-700"
            ></textarea>
            
            <button type="submit" disabled={status === 'Enviando...'} className="bg-[#99FF00] text-black font-black uppercase italic py-6 rounded-2xl hover:scale-[1.02] transition-all font-display text-2xl tracking-widest active:scale-95 shadow-xl shadow-[#99FF00]/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
              {status === 'Enviando...' ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
            
            {status && (
              <p className="text-[10px] text-center font-black uppercase tracking-widest text-[#99FF00] animate-pulse">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Distributors;