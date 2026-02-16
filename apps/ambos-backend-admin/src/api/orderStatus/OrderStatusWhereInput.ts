import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type OrderStatusWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
