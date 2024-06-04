import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ExtraInfoWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
  value?: StringNullableFilter;
};
