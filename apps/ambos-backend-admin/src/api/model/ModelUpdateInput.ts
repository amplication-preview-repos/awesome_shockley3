import { OrderUpdateManyWithoutModelsInput } from "./OrderUpdateManyWithoutModelsInput";
import { ProductUpdateManyWithoutModelsInput } from "./ProductUpdateManyWithoutModelsInput";

export type ModelUpdateInput = {
  gender?: "Option1" | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutModelsInput;
  products?: ProductUpdateManyWithoutModelsInput;
};
