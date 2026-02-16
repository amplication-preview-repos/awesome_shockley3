import { Order } from "../order/Order";

export type OrderStatus = {
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
