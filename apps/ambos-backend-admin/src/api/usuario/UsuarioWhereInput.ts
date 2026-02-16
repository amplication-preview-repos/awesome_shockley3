import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CarritoWhereUniqueInput } from "../carrito/CarritoWhereUniqueInput";
import { CarritoListRelationFilter } from "../carrito/CarritoListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrdenDeCompraListRelationFilter } from "../ordenDeCompra/OrdenDeCompraListRelationFilter";
import { PedidoListRelationFilter } from "../pedido/PedidoListRelationFilter";

export type UsuarioWhereInput = {
  apellido?: StringNullableFilter;
  carrito?: CarritoWhereUniqueInput;
  carritos?: CarritoListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  ordenDeCompras?: OrdenDeCompraListRelationFilter;
  pedidos?: PedidoListRelationFilter;
  rol?: "Option1";
};
