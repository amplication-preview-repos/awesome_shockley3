import { Talle as TTalle } from "../api/talle/Talle";

export const TALLE_TITLE_FIELD = "valor";

export const TalleTitle = (record: TTalle): string => {
  return record.valor?.toString() || String(record.id);
};
