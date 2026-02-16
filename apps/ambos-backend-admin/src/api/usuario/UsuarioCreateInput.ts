import { CarritoWhereUniqueInput } from "../carrito/CarritoWhereUniqueInput";
import { CarritoCreateNestedManyWithoutUsuariosInput } from "./CarritoCreateNestedManyWithoutUsuariosInput";
import { OrdenDeCompraCreateNestedManyWithoutUsuariosInput } from "./OrdenDeCompraCreateNestedManyWithoutUsuariosInput";
import { PedidoCreateNestedManyWithoutUsuariosInput } from "./PedidoCreateNestedManyWithoutUsuariosInput";

export type UsuarioCreateInput = {
  apellido?: string | null;
  carrito?: CarritoWhereUniqueInput | null;
  carritos?: CarritoCreateNestedManyWithoutUsuariosInput;
  email?: string | null;
  nombre?: string | null;
  ordenDeCompras?: OrdenDeCompraCreateNestedManyWithoutUsuariosInput;
  pedidos?: PedidoCreateNestedManyWithoutUsuariosInput;
  rol?: "Option1" | null;
};
