import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PedidoListRelationFilter } from "../pedido/PedidoListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TalleWhereInput = {
  especial?: BooleanNullableFilter;
  id?: StringFilter;
  pedidos?: PedidoListRelationFilter;
  valor?: StringNullableFilter;
};
