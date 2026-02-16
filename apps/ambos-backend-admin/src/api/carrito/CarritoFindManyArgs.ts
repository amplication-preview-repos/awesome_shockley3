import { CarritoWhereInput } from "./CarritoWhereInput";
import { CarritoOrderByInput } from "./CarritoOrderByInput";

export type CarritoFindManyArgs = {
  where?: CarritoWhereInput;
  orderBy?: Array<CarritoOrderByInput>;
  skip?: number;
  take?: number;
};
