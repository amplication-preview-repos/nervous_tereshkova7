import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const AssignmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Agent" source="agent.id" reference="Agent">
          <TextField source={AGENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Property"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
