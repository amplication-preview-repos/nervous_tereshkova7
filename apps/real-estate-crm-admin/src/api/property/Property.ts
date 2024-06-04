import { Appointment } from "../appointment/Appointment";
import { Assignment } from "../assignment/Assignment";
import { ExtraInfo } from "../extraInfo/ExtraInfo";
import { JsonValue } from "type-fest";

export type Property = {
  address: string | null;
  amenities?: Array<"Option1">;
  appointments?: Array<Appointment>;
  assignments?: Array<Assignment>;
  beachAccess: boolean | null;
  createdAt: Date;
  description: string | null;
  extraInfos?: Array<ExtraInfo>;
  id: string;
  media: JsonValue;
  name: string | null;
  price: number | null;
  rooms: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
