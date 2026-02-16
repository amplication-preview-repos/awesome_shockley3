import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const ProductoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="colorPrincipal" source="colorPrincipal" />
        <BooleanInput label="esLiso" source="esLiso" />
        <SelectInput
          source="genero"
          label="genero"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="nombre" source="nombre" />
        <NumberInput label="precio" source="precio" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="subColorVivo" source="subColorVivo" />
        <SelectInput
          source="tipo"
          label="tipo"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
