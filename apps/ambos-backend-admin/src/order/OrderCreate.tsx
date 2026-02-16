import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ModelTitle } from "../model/ModelTitle";
import { OrderStatusTitle } from "../orderStatus/OrderStatusTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="model.id" reference="Model" label="Model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="orderStatus.id"
          reference="OrderStatus"
          label="OrderStatus"
        >
          <SelectInput optionText={OrderStatusTitle} />
        </ReferenceInput>
        <TextInput label="tallaCasaca" source="tallaCasaca" />
        <TextInput label="tallaPantalon" source="tallaPantalon" />
        <NumberInput label="total" source="total" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
