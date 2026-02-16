export type Producto = {
  colorPrincipal: string | null;
  createdAt: Date;
  esLiso: boolean | null;
  genero?: "Option1" | null;
  id: string;
  nombre: string | null;
  precio: number | null;
  stock: number | null;
  subColorVivo: string | null;
  tipo?: "Option1" | null;
  updatedAt: Date;
};
