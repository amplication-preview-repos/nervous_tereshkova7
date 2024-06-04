import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentCreateNestedManyWithoutUsersInput } from "./AgentCreateNestedManyWithoutUsersInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientCreateNestedManyWithoutUsersInput } from "./ClientCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  agents?: AgentCreateNestedManyWithoutUsersInput;
  client?: ClientWhereUniqueInput | null;
  clients?: ClientCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
