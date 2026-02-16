import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ColorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <NumberInput
          step={1}
          label="numeroReferencia"
          source="numeroReferencia"
        />
      </SimpleForm>
    </Edit>
  );
};
