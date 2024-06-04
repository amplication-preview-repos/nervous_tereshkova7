import { ExtraInfoWhereInput } from "./ExtraInfoWhereInput";
import { ExtraInfoOrderByInput } from "./ExtraInfoOrderByInput";

export type ExtraInfoFindManyArgs = {
  where?: ExtraInfoWhereInput;
  orderBy?: Array<ExtraInfoOrderByInput>;
  skip?: number;
  take?: number;
};
