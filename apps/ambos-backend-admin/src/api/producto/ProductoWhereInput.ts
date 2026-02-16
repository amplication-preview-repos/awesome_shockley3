import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductoWhereInput = {
  colorPrincipal?: StringNullableFilter;
  esLiso?: BooleanNullableFilter;
  genero?: "Option1";
  id?: StringFilter;
  nombre?: StringNullableFilter;
  precio?: FloatNullableFilter;
  stock?: IntNullableFilter;
  subColorVivo?: StringNullableFilter;
  tipo?: "Option1";
};
