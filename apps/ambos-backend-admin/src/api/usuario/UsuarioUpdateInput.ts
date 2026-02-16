import { CarritoWhereUniqueInput } from "../carrito/CarritoWhereUniqueInput";
import { CarritoUpdateManyWithoutUsuariosInput } from "./CarritoUpdateManyWithoutUsuariosInput";
import { OrdenDeCompraUpdateManyWithoutUsuariosInput } from "./OrdenDeCompraUpdateManyWithoutUsuariosInput";
import { PedidoUpdateManyWithoutUsuariosInput } from "./PedidoUpdateManyWithoutUsuariosInput";

export type UsuarioUpdateInput = {
  apellido?: string | null;
  carrito?: CarritoWhereUniqueInput | null;
  carritos?: CarritoUpdateManyWithoutUsuariosInput;
  email?: string | null;
  nombre?: string | null;
  ordenDeCompras?: OrdenDeCompraUpdateManyWithoutUsuariosInput;
  pedidos?: PedidoUpdateManyWithoutUsuariosInput;
  rol?: "Option1" | null;
};
