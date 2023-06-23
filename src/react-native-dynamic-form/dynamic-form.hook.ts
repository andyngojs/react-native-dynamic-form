import React from 'react';
// @packages
import * as yup from 'yup';
// @types
import {FormSchema, FieldEnum, InitialValues} from './dynamic-form.type';

export function useDynamicForm(formSchema: FormSchema[]) {
  const [initialValues, setInitialValues] = React.useState<InitialValues | {}>(
    {},
  );

  /**
   * @todo Validate Form
   */
  const validationSchema = React.useMemo(() => {
    const configValid: yup.AnyObject = {};
    formSchema.forEach(field => {
      if (field.isRequire) {
        switch (field.type) {
          case FieldEnum.EMAIL:
            configValid[field.name] = yup.string().required().email();
            break;
          case FieldEnum.PASSWORD:
            if (field.minLength && field.maxLength) {
              configValid[field.name] = yup
                .string()
                .required()
                .min(Number(field.minLength))
                .max(Number(field.maxLength));
            }
            configValid[field.name] = yup.string().required().min(8).max(30);
            break;
          case FieldEnum.CONFIRM_PASSWORD:
            configValid[field.name] = yup
              .string()
              .required()
              .test(
                'passwords-match',
                'Confirm password must matches the password',
                function (value) {
                  return this.parent.password === value;
                },
              );
            break;
          default:
            configValid[field.name] = yup.string().required();
        }
      }
    });

    return yup.object().shape(configValid);
  }, [formSchema]);

  React.useEffect(() => {
    if (formSchema) {
      setInitialValues(() => {
        formSchema.forEach((field: FormSchema) => {
          if (!field.name) return;

          return {
            [field.name]: field.value,
          };
        });
      });
    }
  }, [formSchema]);

  return {
    initialValues,
    validationSchema,
  };
}
