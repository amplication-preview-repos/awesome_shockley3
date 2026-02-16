import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const ProductoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
