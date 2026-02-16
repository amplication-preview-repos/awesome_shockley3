import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UsuarioTitle } from "../usuario/UsuarioTitle";

export const OrdenDeCompraCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="estado"
          label="estado"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="usuario.id" reference="Usuario" label="usuario">
          <SelectInput optionText={UsuarioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
