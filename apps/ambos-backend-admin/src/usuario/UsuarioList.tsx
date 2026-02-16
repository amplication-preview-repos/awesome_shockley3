import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CARRITO_TITLE_FIELD } from "../carrito/CarritoTitle";

export const UsuarioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Usuarios"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="apellido" source="apellido" />
        <ReferenceField label="carrito" source="carrito.id" reference="Carrito">
          <TextField source={CARRITO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <TextField label="rol" source="rol" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
