import { Pedido } from "../pedido/Pedido";

export type Talle = {
  createdAt: Date;
  especial: boolean | null;
  id: string;
  pedidos?: Array<Pedido>;
  updatedAt: Date;
  valor: string | null;
};
