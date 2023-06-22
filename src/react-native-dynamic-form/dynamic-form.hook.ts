import React from 'react';
// @types
import {Field, InitialValues} from './dynamic-form.type';

export function useDynamicForm(fields: Field[]) {
  const [initialValues, setInitialValues] = React.useState<InitialValues | {}>(
    {},
  );

  React.useEffect(() => {
    if (fields) {
      setInitialValues(() => {
        fields.forEach((field: Field) => {
          if (!field.name) return;
          console.log(field);

          return {
            [field.name]: field.value,
          };
        });
      });
    }
  }, [fields]);

  return {
    initialValues,
  };
}
