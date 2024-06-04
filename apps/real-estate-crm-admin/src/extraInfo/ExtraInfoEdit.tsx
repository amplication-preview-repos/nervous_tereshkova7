import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PropertyTitle } from "../property/PropertyTitle";

export const ExtraInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="Property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
