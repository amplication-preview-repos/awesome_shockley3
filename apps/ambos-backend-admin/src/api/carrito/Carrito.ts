import { Usuario } from "../usuario/Usuario";

export type Carrito = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  usuario?: Usuario | null;
  usuarios?: Array<Usuario>;
};
