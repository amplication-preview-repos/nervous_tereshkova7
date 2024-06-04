import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AssignmentUpdateManyWithoutPropertiesInput } from "./AssignmentUpdateManyWithoutPropertiesInput";
import { ExtraInfoUpdateManyWithoutPropertiesInput } from "./ExtraInfoUpdateManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyUpdateInput = {
  address?: string | null;
  amenities?: Array<"Option1">;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  assignments?: AssignmentUpdateManyWithoutPropertiesInput;
  beachAccess?: boolean | null;
  description?: string | null;
  extraInfos?: ExtraInfoUpdateManyWithoutPropertiesInput;
  media?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  rooms?: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
