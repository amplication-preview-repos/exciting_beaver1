import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedOn" source="publishedOn" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
