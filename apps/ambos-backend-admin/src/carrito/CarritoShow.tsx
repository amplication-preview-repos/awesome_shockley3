import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CARRITO_TITLE_FIELD } from "./CarritoTitle";
import { USUARIO_TITLE_FIELD } from "../usuario/UsuarioTitle";

export const CarritoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="usuario" source="usuario.id" reference="Usuario">
          <TextField source={USUARIO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Usuario"
          target="carritoId"
          label="Usuarios"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="apellido" source="apellido" />
            <ReferenceField
              label="carrito"
              source="carrito.id"
              reference="Carrito"
            >
              <TextField source={CARRITO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="nombre" source="nombre" />
            <TextField label="rol" source="rol" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
