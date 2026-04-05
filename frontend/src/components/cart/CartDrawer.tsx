import { useNavigate } from 'react-router-dom';
import { useCart } from '../../store/useCart';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';

const CartDrawer = () => {
  const { cart, isOpen, toggleCart, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Si el carrito está cerrado, no renderizamos nada
  if (!isOpen) return null;

  // Cálculo del total
  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Función para redirigir al checkout
  const handleCheckout = () => {
    toggleCart(); // Cerramos el drawer antes de navegar
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end font-sans">
      
      {/* Fondo desenfocado (Overlay) */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={toggleCart}
      ></div>
      
      {/* Panel del Carrito */}
      <div className="relative w-full max-w-md bg-[#0D0D0D] h-full border-l border-white/10 shadow-2xl flex flex-col p-6 md:p-8 animate-in slide-in-from-right duration-300">
        
        {/* Cabecera */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-[#99FF00]" size={24} />
            <h2 className="text-3xl font-black italic font-display text-white uppercase tracking-tight">Tu Pedido</h2>
          </div>
          <button 
            onClick={toggleCart} 
            className="text-gray-500 hover:text-white transition-colors p-2"
          >
            <X size={32} />
          </button>
        </div>

        {/* Lista de Productos */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="text-center mt-20">
               <p className="text-gray-600 font-black uppercase text-xs tracking-[0.3em]">El carrito está vacío</p>
               <button 
                onClick={toggleCart}
                className="mt-6 text-[#99FF00] font-bold uppercase text-[10px] tracking-widest border-b border-[#99FF00]/30 pb-1"
               >
                 Seguir Explorando
               </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white/[0.03] p-5 rounded-[32px] border border-white/5 items-center">
                
                {/* Miniatura de Lata */}
                <img src={item.img} alt={item.name} className="w-14 h-20 object-contain drop-shadow-lg" />
                
                <div className="flex-1">
                  <h4 className="text-white font-black italic uppercase font-display text-lg leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[#99FF00] font-black text-[10px] tracking-widest mt-1 mb-3">PACK X6</p>
                  
                  {/* SELECTOR DE CANTIDAD */}
                  <div className="flex items-center gap-2">
                    {/* Botón Menos */}
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#99FF00] hover:text-black transition-all"
                    >
                      <Minus size={14} />
                    </button>
                    
                    {/* Input Editable */}
                    <input 
                      type="number" 
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-12 bg-transparent text-center text-white font-black text-lg outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    {/* Botón Más */}
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#99FF00] hover:text-black transition-all"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Borrar Item */}
                <button 
                  onClick={() => removeItem(item.id)} 
                  className="text-gray-700 hover:text-red-500 transition-colors p-2"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer del Carrito (Subtotal y Botón) */}
        {cart.length > 0 && (
          <div className="border-t border-white/10 pt-8 mt-6">
            <div className="flex justify-between items-end mb-6 px-2">
               <div className="flex flex-col">
                  <span className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">Subtotal</span>
                  <span className="text-white/40 text-[9px] font-medium uppercase italic">Impuestos incluidos</span>
               </div>
               <span className="text-white font-black font-display text-4xl italic">
                 ${totalAmount.toLocaleString()}
               </span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#99FF00] text-black font-black uppercase italic py-6 rounded-2xl text-2xl font-display tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#99FF00]/10"
            >
              Finalizar Compra
            </button>
            
            <p className="text-center text-[9px] text-gray-600 font-bold uppercase mt-4 tracking-widest">
                Envíos a todo el país | Compra Segura
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;