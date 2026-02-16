import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  modelId?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  tallaAvailable?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
