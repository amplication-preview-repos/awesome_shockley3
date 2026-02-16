import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";
import { UsuarioUpdateManyWithoutCarritosInput } from "./UsuarioUpdateManyWithoutCarritosInput";

export type CarritoUpdateInput = {
  usuario?: UsuarioWhereUniqueInput | null;
  usuarios?: UsuarioUpdateManyWithoutCarritosInput;
};
