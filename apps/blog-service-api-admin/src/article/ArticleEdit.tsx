import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ArticleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedOn" source="publishedOn" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
