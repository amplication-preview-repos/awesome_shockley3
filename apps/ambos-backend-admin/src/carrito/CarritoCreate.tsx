import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UsuarioTitle } from "../usuario/UsuarioTitle";

export const CarritoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="usuario.id" reference="Usuario" label="usuario">
          <SelectInput optionText={UsuarioTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="usuarios" reference="Usuario">
          <SelectArrayInput
            optionText={UsuarioTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
