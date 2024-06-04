import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ExtraInfoUpdateInput = {
  key?: string | null;
  property?: PropertyWhereUniqueInput | null;
  value?: string | null;
};
