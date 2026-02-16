import { Model } from "../model/Model";
import { OrderStatus } from "../orderStatus/OrderStatus";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  model?: Model | null;
  orderStatus?: OrderStatus | null;
  tallaCasaca: string | null;
  tallaPantalon: string | null;
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};
