import { StringFilter } from "../../util/StringFilter";
import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";
import { UsuarioListRelationFilter } from "../usuario/UsuarioListRelationFilter";

export type CarritoWhereInput = {
  id?: StringFilter;
  usuario?: UsuarioWhereUniqueInput;
  usuarios?: UsuarioListRelationFilter;
};
