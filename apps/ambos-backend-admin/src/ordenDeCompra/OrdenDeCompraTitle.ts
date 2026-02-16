import { OrdenDeCompra as TOrdenDeCompra } from "../api/ordenDeCompra/OrdenDeCompra";

export const ORDENDECOMPRA_TITLE_FIELD = "id";

export const OrdenDeCompraTitle = (record: TOrdenDeCompra): string => {
  return record.id?.toString() || String(record.id);
};
