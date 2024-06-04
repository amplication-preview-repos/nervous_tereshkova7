import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";
import { AssignmentUpdateManyWithoutAgentsInput } from "./AssignmentUpdateManyWithoutAgentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserUpdateManyWithoutAgentsInput } from "./UserUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  assignments?: AssignmentUpdateManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
  users?: UserUpdateManyWithoutAgentsInput;
};
