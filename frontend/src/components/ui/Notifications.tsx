import { useCart } from '../../store/useCart';
import { Zap, CheckCircle2, AlertCircle } from 'lucide-react';

const Notification = () => {
  const { notification } = useCart();

  if (!notification.visible) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] w-full max-w-sm px-4 animate-in fade-in zoom-in duration-300">
      <div className={`
        relative overflow-hidden p-4 rounded-2xl border flex items-center gap-4 shadow-2xl backdrop-blur-md
        ${notification.type === 'success' 
          ? 'bg-black/80 border-[#99FF00]/30 shadow-[#99FF00]/10' 
          : 'bg-black/80 border-red-500/30 shadow-red-500/10'}
      `}>
        {/* Barra de progreso animada */}
        <div className={`absolute bottom-0 left-0 h-1 bg-[#99FF00] animate-out fade-out fill-mode-forwards duration-[3000ms] w-full origin-left scale-x-0`}></div>
        
        <div className={`p-2 rounded-lg ${notification.type === 'success' ? 'bg-[#99FF00] text-black' : 'bg-red-500 text-white'}`}>
          {notification.type === 'success' ? <Zap size={18} fill="currentColor" /> : <AlertCircle size={18} />}
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Notificación del Team</span>
          <p className="text-white font-black italic uppercase font-display text-lg tracking-wider leading-none mt-1">
            {notification.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;