import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AgentWhereInput = {
  appointments?: AppointmentListRelationFilter;
  assignments?: AssignmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  users?: UserListRelationFilter;
};
