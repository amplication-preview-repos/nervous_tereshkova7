import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ExtraInfoCreateInput = {
  key?: string | null;
  property?: PropertyWhereUniqueInput | null;
  value?: string | null;
};
