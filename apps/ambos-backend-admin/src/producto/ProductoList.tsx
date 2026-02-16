import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Productos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="colorPrincipal" source="colorPrincipal" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="esLiso" source="esLiso" />
        <TextField label="genero" source="genero" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <TextField label="precio" source="precio" />
        <TextField label="stock" source="stock" />
        <TextField label="subColorVivo" source="subColorVivo" />
        <TextField label="tipo" source="tipo" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
