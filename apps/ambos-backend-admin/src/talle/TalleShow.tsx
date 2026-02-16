import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TALLE_TITLE_FIELD } from "./TalleTitle";
import { USUARIO_TITLE_FIELD } from "../usuario/UsuarioTitle";

export const TalleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="especial" source="especial" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valor" source="valor" />
        <ReferenceManyField reference="Pedido" target="talleId" label="Pedidos">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="adeuda" source="adeuda" />
            <TextField label="comprobante" source="comprobante" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="descripcion" source="descripcion" />
            <TextField label="estado" source="estado" />
            <TextField label="ID" source="id" />
            <TextField label="metodoDePago" source="metodoDePago" />
            <BooleanField label="restoPagado" source="restoPagado" />
            <TextField label="seña" source="seA" />
            <ReferenceField label="talle" source="talle.id" reference="Talle">
              <TextField source={TALLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="usuario"
              source="usuario.id"
              reference="Usuario"
            >
              <TextField source={USUARIO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
