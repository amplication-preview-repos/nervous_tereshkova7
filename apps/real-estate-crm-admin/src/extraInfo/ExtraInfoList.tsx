import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const ExtraInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExtraInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="key" source="key" />
        <ReferenceField
          label="Property"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};
