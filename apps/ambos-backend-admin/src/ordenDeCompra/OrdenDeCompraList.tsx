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
import { USUARIO_TITLE_FIELD } from "../usuario/UsuarioTitle";

export const OrdenDeCompraList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"OrdenDeCompras"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="estado" source="estado" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="usuario" source="usuario.id" reference="Usuario">
          <TextField source={USUARIO_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
