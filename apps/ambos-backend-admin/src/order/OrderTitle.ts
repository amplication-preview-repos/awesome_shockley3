import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "tallaCasaca";

export const OrderTitle = (record: TOrder): string => {
  return record.tallaCasaca?.toString() || String(record.id);
};
