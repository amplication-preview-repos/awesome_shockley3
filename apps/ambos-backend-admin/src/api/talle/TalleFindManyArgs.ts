import { TalleWhereInput } from "./TalleWhereInput";
import { TalleOrderByInput } from "./TalleOrderByInput";

export type TalleFindManyArgs = {
  where?: TalleWhereInput;
  orderBy?: Array<TalleOrderByInput>;
  skip?: number;
  take?: number;
};
