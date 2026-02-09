import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  model?: ModelWhereUniqueInput;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  stock?: IntNullableFilter;
  tallaAvailable?: StringNullableFilter;
  typeField?: "Option1";
};
