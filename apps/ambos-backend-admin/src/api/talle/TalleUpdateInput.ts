import { PedidoUpdateManyWithoutTallesInput } from "./PedidoUpdateManyWithoutTallesInput";

export type TalleUpdateInput = {
  especial?: boolean | null;
  pedidos?: PedidoUpdateManyWithoutTallesInput;
  valor?: string | null;
};
