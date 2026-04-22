import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../store/useCart';
import { ShoppingBag, ChevronLeft, Truck, ShieldCheck, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useCart();
  
  // Estado para los campos (obligatorios y opcionales)
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Opcional
    whatsapp: '',
    address: '',
    depto: '', // Opcional
    city: '',
    province: ''
  });

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 50000 ? 0 : 5500;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="text-gray-600" size={40} />
        </div>
        <h2 className="text-3xl font-black italic font-display text-white uppercase mb-4 tracking-tighter">Tu carrito está vacío</h2>
        <Link to="/" className="bg-[#99FF00] text-black px-10 py-4 rounded-full font-black italic uppercase tracking-widest hover:scale-105 transition-all font-display text-xl">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Integración con Mercado Pago próximamente. Tu pedido fue registrado.");
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 font-sans text-white">
      <Helmet>
        <title>Checkout | 13Energy - Finalizar Compra</title>
        <meta name="description" content="Completá tu pedido de 13Energy. Envío a todo Argentina. Pago seguro con Mercado Pago." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#99FF00] transition-colors mb-4 uppercase font-black text-[10px] tracking-[0.2em]">
            <ChevronLeft size={14} /> Volver a la tienda
          </Link>
          <h1 className="text-5xl md:text-7xl font-black italic font-display uppercase leading-none tracking-tighter">
            FINALIZAR <span className="text-[#99FF00]">COMPRA</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <form id="checkout-form" onSubmit={handleSubmit} className="bg-[#0D0D0D] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-[#99FF00] rounded-xl flex items-center justify-center text-black shadow-[0_0_15px_rgba(153,255,0,0.3)]">
                  <Truck size={20} />
                </div>
                <h3 className="text-2xl font-black italic font-display uppercase tracking-tight text-white">Datos de Entrega</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                {/* Nombre */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-2">Nombre Completo</label>
                  <input required type="text" placeholder="NOMBRE Y APELLIDO" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none font-bold text-xs uppercase text-white transition-all placeholder:text-gray-800" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-2 flex items-center gap-2">
                    <MessageCircle size={12} className="text-[#99FF00]" /> WhatsApp
                  </label>
                  <input required type="tel" placeholder="EJ: 11 1234 5678" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none font-bold text-sm uppercase text-white transition-all placeholder:text-gray-800" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                </div>

                {/* Email - OPCIONAL */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-2 flex items-center gap-2">
                    <Mail size={12} /> Email <span className="text-gray-600 text-[8px] italic">(Opcional)</span>
                  </label>
                  <input type="email" placeholder="TU@EMAIL.COM" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none font-bold text-sm uppercase text-white transition-all placeholder:text-gray-800" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>

                {/* Dirección */}
                <div className="md:col-span-1">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-2">Calle y Número</label>
                  <input required type="text" placeholder="EJ: AV. CABILDO 1234" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none font-bold text-sm uppercase text-white transition-all placeholder:text-gray-800" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                </div>

                {/* Depto - OPCIONAL */}
                <div className="md:col-span-1">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-2">Piso / Depto <span className="text-gray-600 text-[8px] italic">(Opcional)</span></label>
                  <input type="text" placeholder="EJ: 4TO B" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none font-bold text-sm uppercase text-white transition-all placeholder:text-gray-800" value={formData.depto} onChange={e => setFormData({...formData, depto: e.target.value})} />
                </div>

                {/* Ciudad */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-2">Ciudad</label>
                  <input required type="text" placeholder="EJ: ROSARIO" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none font-bold text-sm uppercase text-white transition-all placeholder:text-gray-800" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                </div>

                {/* Provincia */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-2">Provincia</label>
                  <input required type="text" placeholder="EJ: SANTA FE" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-[#99FF00] outline-none font-bold text-sm uppercase text-white transition-all placeholder:text-gray-800" value={formData.province} onChange={e => setFormData({...formData, province: e.target.value})} />
                </div>
              </div>
            </form>

            <div className="bg-[#0D0D0D] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="text-2xl font-black italic font-display uppercase tracking-tight text-white">Método de Pago</h3>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="text-blue-400 font-bold italic text-sm">Mercado</span>
                             <span className="text-blue-500 font-black italic text-sm">Pago</span>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl flex items-center gap-6">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                            <div className="w-4 h-4 bg-[#99FF00] rounded-full shadow-[0_0_10px_#99FF00]"></div>
                        </div>
                        <div>
                            <p className="text-white font-black uppercase italic text-sm tracking-widest">Pagar con Mercado Pago</p>
                            <p className="text-gray-500 text-[10px] uppercase font-bold mt-1">Crédito, Débito o Dinero en cuenta</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <aside className="lg:col-span-5 sticky top-32">
            <div className="bg-[#0D0D0D] border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl">
              <h3 className="text-3xl font-black italic font-display uppercase mb-8 border-b border-white/5 pb-6">Resumen</h3>
              
              <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-16 bg-black rounded-xl border border-white/5 flex items-center justify-center p-2">
                         <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-white font-black uppercase text-xs italic leading-tight">{item.name}</span>
                        <span className="text-[#99FF00] text-[9px] font-black uppercase tracking-widest mt-1">Pack x{item.quantity}</span>
                      </div>
                    </div>
                    <span className="text-white font-display text-xl italic">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8 mb-10">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-gray-500">Productos</span>
                  <span className="text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-gray-500">Costo de Envío</span>
                  <span className={shipping === 0 ? "text-[#99FF00]" : "text-white"}>
                    {shipping === 0 ? "SIN CARGO" : `$${shipping.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between items-end pt-6 border-t border-white/10">
                  <span className="text-gray-400 font-black uppercase text-sm italic tracking-widest leading-none">Total</span>
                  <span className="text-[#99FF00] font-black font-display text-6xl italic leading-none drop-shadow-[0_0_15px_rgba(153,255,0,0.3)]">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button 
                form="checkout-form"
                type="submit"
                className="w-full bg-[#99FF00] text-black font-black uppercase italic py-6 rounded-2xl text-3xl font-display tracking-[0.1em] hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-[#99FF00]/10"
              >
                Pagar con Mercado Pago
              </button>
              
              <p className="text-center text-[8px] text-gray-600 font-black uppercase mt-6 tracking-[0.2em] leading-relaxed">
                Al confirmar serás redirigido a Mercado Pago para realizar la transacción de forma segura.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Checkout;