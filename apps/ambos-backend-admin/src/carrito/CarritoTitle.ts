import { Carrito as TCarrito } from "../api/carrito/Carrito";

export const CARRITO_TITLE_FIELD = "id";

export const CarritoTitle = (record: TCarrito): string => {
  return record.id?.toString() || String(record.id);
};
