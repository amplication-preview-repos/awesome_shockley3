import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TalleWhereUniqueInput } from "../talle/TalleWhereUniqueInput";
import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";

export type PedidoWhereInput = {
  adeuda?: FloatNullableFilter;
  comprobante?: JsonFilter;
  descripcion?: StringNullableFilter;
  estado?: "Option1";
  id?: StringFilter;
  metodoDePago?: "Option1";
  restoPagado?: BooleanNullableFilter;
  seA?: FloatNullableFilter;
  talle?: TalleWhereUniqueInput;
  usuario?: UsuarioWhereUniqueInput;
};
