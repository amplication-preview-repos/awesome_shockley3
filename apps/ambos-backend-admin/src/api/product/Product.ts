import { Model } from "../model/Model";

export type Product = {
  createdAt: Date;
  description: string | null;
  gender?: "Option1" | null;
  id: string;
  model?: Model | null;
  name: string | null;
  price: number | null;
  stock: number | null;
  tallaAvailable: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
