import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";
import { AssignmentCreateNestedManyWithoutAgentsInput } from "./AssignmentCreateNestedManyWithoutAgentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserCreateNestedManyWithoutAgentsInput } from "./UserCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  assignments?: AssignmentCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutAgentsInput;
};
