import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { TalleTitle } from "../talle/TalleTitle";
import { UsuarioTitle } from "../usuario/UsuarioTitle";

export const PedidoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="adeuda" source="adeuda" />
        <div />
        <TextInput label="descripcion" multiline source="descripcion" />
        <SelectInput
          source="estado"
          label="estado"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="metodoDePago"
          label="metodoDePago"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="restoPagado" source="restoPagado" />
        <NumberInput label="seña" source="seA" />
        <ReferenceInput source="talle.id" reference="Talle" label="talle">
          <SelectInput optionText={TalleTitle} />
        </ReferenceInput>
        <ReferenceInput source="usuario.id" reference="Usuario" label="usuario">
          <SelectInput optionText={UsuarioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
