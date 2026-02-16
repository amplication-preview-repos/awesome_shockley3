import { InputJsonValue } from "../../types";
import { TalleWhereUniqueInput } from "../talle/TalleWhereUniqueInput";
import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";

export type PedidoUpdateInput = {
  adeuda?: number | null;
  comprobante?: InputJsonValue;
  descripcion?: string | null;
  estado?: "Option1" | null;
  metodoDePago?: "Option1" | null;
  restoPagado?: boolean | null;
  seA?: number | null;
  talle?: TalleWhereUniqueInput | null;
  usuario?: UsuarioWhereUniqueInput | null;
};
