import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AgentTitle } from "../agent/AgentTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const AssignmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
