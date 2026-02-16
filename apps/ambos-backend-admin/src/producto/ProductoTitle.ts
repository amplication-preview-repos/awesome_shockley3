import { Producto as TProducto } from "../api/producto/Producto";

export const PRODUCTO_TITLE_FIELD = "colorPrincipal";

export const ProductoTitle = (record: TProducto): string => {
  return record.colorPrincipal?.toString() || String(record.id);
};
