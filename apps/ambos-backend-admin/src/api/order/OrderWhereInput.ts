import { StringFilter } from "../../util/StringFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { OrderStatusWhereUniqueInput } from "../orderStatus/OrderStatusWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  model?: ModelWhereUniqueInput;
  orderStatus?: OrderStatusWhereUniqueInput;
  tallaCasaca?: StringNullableFilter;
  tallaPantalon?: StringNullableFilter;
  total?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
