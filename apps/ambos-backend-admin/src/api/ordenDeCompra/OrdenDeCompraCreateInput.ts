import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";

export type OrdenDeCompraCreateInput = {
  estado?: "Option1" | null;
  usuario?: UsuarioWhereUniqueInput | null;
};
