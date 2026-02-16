import { UsuarioWhereUniqueInput } from "../usuario/UsuarioWhereUniqueInput";

export type OrdenDeCompraUpdateInput = {
  estado?: "Option1" | null;
  usuario?: UsuarioWhereUniqueInput | null;
};
