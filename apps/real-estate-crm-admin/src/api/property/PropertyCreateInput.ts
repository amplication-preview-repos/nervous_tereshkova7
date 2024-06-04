import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AssignmentCreateNestedManyWithoutPropertiesInput } from "./AssignmentCreateNestedManyWithoutPropertiesInput";
import { ExtraInfoCreateNestedManyWithoutPropertiesInput } from "./ExtraInfoCreateNestedManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyCreateInput = {
  address?: string | null;
  amenities?: Array<"Option1">;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  assignments?: AssignmentCreateNestedManyWithoutPropertiesInput;
  beachAccess?: boolean | null;
  description?: string | null;
  extraInfos?: ExtraInfoCreateNestedManyWithoutPropertiesInput;
  media?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  rooms?: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
