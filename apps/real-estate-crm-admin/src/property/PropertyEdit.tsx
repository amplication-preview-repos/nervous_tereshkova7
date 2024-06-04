import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
  BooleanInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { ExtraInfoTitle } from "../extraInfo/ExtraInfoTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <SelectArrayInput
          label="amenities"
          source="amenities"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="assignments"
          reference="Assignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssignmentTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="beachAccess" source="beachAccess" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="extraInfos"
          reference="ExtraInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExtraInfoTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="rooms" source="rooms" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
