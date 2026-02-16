import { PedidoCreateNestedManyWithoutTallesInput } from "./PedidoCreateNestedManyWithoutTallesInput";

export type TalleCreateInput = {
  especial?: boolean | null;
  pedidos?: PedidoCreateNestedManyWithoutTallesInput;
  valor?: string | null;
};
