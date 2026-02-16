import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { OrderStatusWhereUniqueInput } from "../orderStatus/OrderStatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  model?: ModelWhereUniqueInput | null;
  orderStatus?: OrderStatusWhereUniqueInput | null;
  tallaCasaca?: string | null;
  tallaPantalon?: string | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
