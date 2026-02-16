import { Color as TColor } from "../api/color/Color";

export const COLOR_TITLE_FIELD = "nombre";

export const ColorTitle = (record: TColor): string => {
  return record.nombre?.toString() || String(record.id);
};
