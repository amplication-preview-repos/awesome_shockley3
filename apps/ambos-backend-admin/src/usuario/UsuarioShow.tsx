import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USUARIO_TITLE_FIELD } from "./UsuarioTitle";
import { TALLE_TITLE_FIELD } from "../talle/TalleTitle";
import { CARRITO_TITLE_FIELD } from "../carrito/CarritoTitle";

export const UsuarioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apellido" source="apellido" />
        <ReferenceField label="carrito" source="carrito.id" reference="Carrito">
          <TextField source={CARRITO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <TextField label="rol" source="rol" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Carrito"
          target="usuarioId"
          label="Carritos"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
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
        <ReferenceManyField
          reference="OrdenDeCompra"
          target="usuarioId"
          label="OrdenDeCompras"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="estado" source="estado" />
            <TextField label="ID" source="id" />
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
        <ReferenceManyField
          reference="Pedido"
          target="usuarioId"
          label="Pedidos"
        >
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
