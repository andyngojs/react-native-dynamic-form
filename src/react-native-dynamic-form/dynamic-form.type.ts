import {FormikHelpers, FormikValues} from 'formik';
import {TextStyle, ViewStyle} from 'react-native';

export interface DynamicFormProps {
  formSchema: FormSchema[];
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>,
  ) => void | Promise<any>;
  buttonTitle?: string;
  buttonContainerStyle?: ViewStyle;
  buttonTitleStyle?: TextStyle;
}

export type FormSchema = {
  label: string;
  placeholder?: string;
  type?: FieldEnum | string;
  name: string;
  value: string | boolean;
  numberOfLines?: number;
  isRequire?: boolean | string;
  minLength?: number | string;
  maxLength?: number | string;
};

type getInitialValues = {
  
};

export type InitialValues = {
  name: string;
  password: string;
  confirmPassword: string;
  agreeTerm: boolean;
};

export enum FieldEnum {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirm_password',
  TEXTAREA = 'textarea',
  CHECKBOX = 'checkbox',
  SWITCH = 'switch',
}
