import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TALLE_TITLE_FIELD } from "../talle/TalleTitle";
import { USUARIO_TITLE_FIELD } from "../usuario/UsuarioTitle";

export const PedidoList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Pedidos"} perPage={50} pagination={<Pagination />}>
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
        <ReferenceField label="usuario" source="usuario.id" reference="Usuario">
          <TextField source={USUARIO_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
