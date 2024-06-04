import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ExtraInfoListRelationFilter } from "../extraInfo/ExtraInfoListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  assignments?: AssignmentListRelationFilter;
  beachAccess?: BooleanNullableFilter;
  description?: StringNullableFilter;
  extraInfos?: ExtraInfoListRelationFilter;
  id?: StringFilter;
  media?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  rooms?: IntNullableFilter;
  status?: "Option1";
  typeField?: "Option1";
};
