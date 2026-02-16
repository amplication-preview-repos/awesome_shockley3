import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ModelWhereInput = {
  gender?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  products?: ProductListRelationFilter;
};
