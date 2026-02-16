import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { PedidoTitle } from "../pedido/PedidoTitle";

export const TalleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
