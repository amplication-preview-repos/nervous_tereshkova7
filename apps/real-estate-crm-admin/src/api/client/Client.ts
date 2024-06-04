import { Appointment } from "../appointment/Appointment";
import { User } from "../user/User";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
  user?: User | null;
  users?: Array<User>;
};
