import { StringFilter } from "../../util/StringFilter";
import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";

export type OrdenDeCompraWhereInput = {
  estado?: "Option1";
  id?: StringFilter;
  usuario?: UsuarioWhereUniqueInput;
};
