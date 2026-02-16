import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ProductoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
