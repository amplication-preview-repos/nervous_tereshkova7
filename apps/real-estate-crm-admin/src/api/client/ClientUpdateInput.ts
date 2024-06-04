import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserUpdateManyWithoutClientsInput } from "./UserUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
  users?: UserUpdateManyWithoutClientsInput;
};
