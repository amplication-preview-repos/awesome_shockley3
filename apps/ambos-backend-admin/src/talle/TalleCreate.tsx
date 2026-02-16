import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { PedidoTitle } from "../pedido/PedidoTitle";

export const TalleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="especial" source="especial" />
        <ReferenceArrayInput source="pedidos" reference="Pedido">
          <SelectArrayInput
            optionText={PedidoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="valor" source="valor" />
      </SimpleForm>
    </Create>
  );
};
