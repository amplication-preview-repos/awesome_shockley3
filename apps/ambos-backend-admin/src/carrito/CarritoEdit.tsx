import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UsuarioTitle } from "../usuario/UsuarioTitle";

export const CarritoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
