import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  gender?: "Option1" | null;
  model?: ModelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
  tallaAvailable?: string | null;
  typeField?: "Option1" | null;
};
