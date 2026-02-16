import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UsuarioTitle } from "../usuario/UsuarioTitle";

export const OrdenDeCompraEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
