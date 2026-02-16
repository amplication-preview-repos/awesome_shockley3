import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";
import { UsuarioCreateNestedManyWithoutCarritosInput } from "./UsuarioCreateNestedManyWithoutCarritosInput";

export type CarritoCreateInput = {
  usuario?: UsuarioWhereUniqueInput | null;
  usuarios?: UsuarioCreateNestedManyWithoutCarritosInput;
};
