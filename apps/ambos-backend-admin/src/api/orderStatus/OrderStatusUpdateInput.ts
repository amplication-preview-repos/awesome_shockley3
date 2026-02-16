import { OrderUpdateManyWithoutOrderStatusesInput } from "./OrderUpdateManyWithoutOrderStatusesInput";

export type OrderStatusUpdateInput = {
  name?: string | null;
  orders?: OrderUpdateManyWithoutOrderStatusesInput;
};
