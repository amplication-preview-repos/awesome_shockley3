import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CarritoTitle } from "../carrito/CarritoTitle";
import { OrdenDeCompraTitle } from "../ordenDeCompra/OrdenDeCompraTitle";
import { PedidoTitle } from "../pedido/PedidoTitle";

export const UsuarioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apellido" source="apellido" />
        <ReferenceInput source="carrito.id" reference="Carrito" label="carrito">
          <SelectInput optionText={CarritoTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="carritos" reference="Carrito">
          <SelectArrayInput
            optionText={CarritoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nombre" source="nombre" />
        <ReferenceArrayInput source="ordenDeCompras" reference="OrdenDeCompra">
          <SelectArrayInput
            optionText={OrdenDeCompraTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="pedidos" reference="Pedido">
          <SelectArrayInput
            optionText={PedidoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="rol"
          label="rol"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
