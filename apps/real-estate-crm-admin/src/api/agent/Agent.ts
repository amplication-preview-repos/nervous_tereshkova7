import { Appointment } from "../appointment/Appointment";
import { Assignment } from "../assignment/Assignment";
import { User } from "../user/User";

export type Agent = {
  appointments?: Array<Appointment>;
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
  user?: User | null;
  users?: Array<User>;
};
