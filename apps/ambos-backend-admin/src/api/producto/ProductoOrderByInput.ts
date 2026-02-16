import { SortOrder } from "../../util/SortOrder";

export type ProductoOrderByInput = {
  colorPrincipal?: SortOrder;
  createdAt?: SortOrder;
  esLiso?: SortOrder;
  genero?: SortOrder;
  id?: SortOrder;
  nombre?: SortOrder;
  precio?: SortOrder;
  stock?: SortOrder;
  subColorVivo?: SortOrder;
  tipo?: SortOrder;
  updatedAt?: SortOrder;
};
