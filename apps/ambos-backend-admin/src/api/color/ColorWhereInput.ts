import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ColorWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
  numeroReferencia?: IntNullableFilter;
};
