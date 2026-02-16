import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TalleList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Talles"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="especial" source="especial" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valor" source="valor" />{" "}
      </Datagrid>
    </List>
  );
};
