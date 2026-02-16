import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type Model = {
  createdAt: Date;
  gender?: "Option1" | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  products?: Array<Product>;
  updatedAt: Date;
};
