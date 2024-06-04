import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentUpdateManyWithoutUsersInput } from "./AgentUpdateManyWithoutUsersInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientUpdateManyWithoutUsersInput } from "./ClientUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  agents?: AgentUpdateManyWithoutUsersInput;
  client?: ClientWhereUniqueInput | null;
  clients?: ClientUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
