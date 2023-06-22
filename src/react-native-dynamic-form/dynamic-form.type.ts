import {TextStyle, ViewStyle} from 'react-native';
import {AnyObject} from 'yup';

export interface DynamicFormProps {
  fields: Field[];
  validationSchema: AnyObject;
  onSubmit: any;
  buttonTitle?: string;
  buttonContainerStyle?: ViewStyle;
  buttonTitleStyle?: TextStyle;
}

export type Field = {
  label: string;
  placeholder?: string;
  type?: FieldEnum | string;
  name: string;
  value: string | boolean;
  numberOfLines?: number;
};

export type InitialValues = {
  name: string;
  password: string;
  confirmPassword: string;
  agreeTerm: boolean;
};

export enum FieldEnum {
  CHECKBOX = 'checkbox',
  PASSWORD = 'password',
  TEXTAREA = 'textarea',
  EMAIL = 'email',
  SWITCH = 'switch',
}
