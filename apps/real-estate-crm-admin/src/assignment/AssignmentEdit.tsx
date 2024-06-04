import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AgentTitle } from "../agent/AgentTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const AssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="agent.id" reference="Agent" label="Agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="Property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
