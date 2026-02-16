import { SortOrder } from "../../util/SortOrder";

export type PedidoOrderByInput = {
  adeuda?: SortOrder;
  comprobante?: SortOrder;
  createdAt?: SortOrder;
  descripcion?: SortOrder;
  estado?: SortOrder;
  id?: SortOrder;
  metodoDePago?: SortOrder;
  restoPagado?: SortOrder;
  seA?: SortOrder;
  talleId?: SortOrder;
  updatedAt?: SortOrder;
  usuarioId?: SortOrder;
};
