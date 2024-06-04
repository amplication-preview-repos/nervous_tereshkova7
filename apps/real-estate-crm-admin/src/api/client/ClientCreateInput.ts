import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserCreateNestedManyWithoutClientsInput } from "./UserCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutClientsInput;
};
