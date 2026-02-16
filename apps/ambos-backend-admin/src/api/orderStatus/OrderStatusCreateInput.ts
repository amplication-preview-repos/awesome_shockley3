import { OrderCreateNestedManyWithoutOrderStatusesInput } from "./OrderCreateNestedManyWithoutOrderStatusesInput";

export type OrderStatusCreateInput = {
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutOrderStatusesInput;
};
