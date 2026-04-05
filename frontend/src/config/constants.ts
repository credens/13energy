// Centralizamos los valores para que los cambies en un solo lugar
export const PRICING = {
  UNIT_PRICE: 5000, // Precio por lata individual
  PACK_SIZE: 6,     // Cantidad de latas por pack
};

// Cálculo automático del precio del pack
export const PACK_PRICE = PRICING.UNIT_PRICE * PRICING.PACK_SIZE;