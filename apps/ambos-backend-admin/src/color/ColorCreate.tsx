import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ColorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <NumberInput
          step={1}
          label="numeroReferencia"
          source="numeroReferencia"
        />
      </SimpleForm>
    </Create>
  );
};
