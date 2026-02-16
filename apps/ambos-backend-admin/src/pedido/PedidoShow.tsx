import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { TALLE_TITLE_FIELD } from "../talle/TalleTitle";
import { USUARIO_TITLE_FIELD } from "../usuario/UsuarioTitle";

export const PedidoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="usuario" source="usuario.id" reference="Usuario">
          <TextField source={USUARIO_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
