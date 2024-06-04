import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  agent?: AgentWhereUniqueInput;
  agents?: AgentListRelationFilter;
  client?: ClientWhereUniqueInput;
  clients?: ClientListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
