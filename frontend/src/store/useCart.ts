import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addItem: (product: any) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  isOpen: boolean;
  toggleCart: () => void;
  selectedCategory: string;
  selectedFlavor: number;
  setSelection: (category: string, flavorIndex: number) => void;
  
  // SISTEMA DE NOTIFICACIONES
  notification: { message: string; visible: boolean; type: 'success' | 'error' };
  showNotification: (message: string, type?: 'success' | 'error') => void;
}

export const useCart = create<CartStore>((set, get) => ({
  cart: [],
  isOpen: false,
  selectedCategory: 'PRE-WORK',
  selectedFlavor: 0,
  notification: { message: '', visible: false, type: 'success' },

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  setSelection: (category, flavorIndex) => set({ selectedCategory: category, selectedFlavor: flavorIndex }),

  showNotification: (message, type = 'success') => {
    set({ notification: { message, visible: true, type } });
    setTimeout(() => {
      set({ notification: { message: '', visible: false, type: 'success' } });
    }, 3000); // Desaparece en 3 segundos
  },

  addItem: (product) => {
    const { cart, showNotification } = get();
    const existing = cart.find((item) => item.id === product.name);
    
    if (existing) {
      set({
        cart: cart.map((item) =>
          item.id === product.name ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ cart: [...cart, { id: product.name, name: product.name, price: product.price, img: product.img, quantity: 1 }] });
    }
    
    // Disparamos la notificación épica
    showNotification(`POTENCIA SUMADA: ${product.name}`);
  },

  removeItem: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),

  updateQuantity: (id, qty) => set((state) => ({
    cart: state.cart.map((item) => 
      item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
    ),
  })),
}));