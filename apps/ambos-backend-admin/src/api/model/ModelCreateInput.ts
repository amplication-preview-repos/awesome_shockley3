import { OrderCreateNestedManyWithoutModelsInput } from "./OrderCreateNestedManyWithoutModelsInput";
import { ProductCreateNestedManyWithoutModelsInput } from "./ProductCreateNestedManyWithoutModelsInput";

export type ModelCreateInput = {
  gender?: "Option1" | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutModelsInput;
  products?: ProductCreateNestedManyWithoutModelsInput;
};
