import { Carrito } from "../carrito/Carrito";
import { OrdenDeCompra } from "../ordenDeCompra/OrdenDeCompra";
import { Pedido } from "../pedido/Pedido";

export type Usuario = {
  apellido: string | null;
  carrito?: Carrito | null;
  carritos?: Array<Carrito>;
  createdAt: Date;
  email: string | null;
  id: string;
  nombre: string | null;
  ordenDeCompras?: Array<OrdenDeCompra>;
  pedidos?: Array<Pedido>;
  rol?: "Option1" | null;
  updatedAt: Date;
};
