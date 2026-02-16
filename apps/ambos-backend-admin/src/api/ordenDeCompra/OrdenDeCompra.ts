import { Usuario } from "../usuario/Usuario";

export type OrdenDeCompra = {
  createdAt: Date;
  estado?: "Option1" | null;
  id: string;
  updatedAt: Date;
  usuario?: Usuario | null;
};
