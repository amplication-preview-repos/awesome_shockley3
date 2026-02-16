import { JsonValue } from "type-fest";
import { Talle } from "../talle/Talle";
import { Usuario } from "../usuario/Usuario";

export type Pedido = {
  adeuda: number | null;
  comprobante: JsonValue;
  createdAt: Date;
  descripcion: string | null;
  estado?: "Option1" | null;
  id: string;
  metodoDePago?: "Option1" | null;
  restoPagado: boolean | null;
  seA: number | null;
  talle?: Talle | null;
  updatedAt: Date;
  usuario?: Usuario | null;
};
