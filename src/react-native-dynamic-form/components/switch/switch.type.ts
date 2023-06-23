import {SwitchProps as RNSwitchProp} from 'react-native';
import {FormSchema} from '../../dynamic-form.type';

export interface SwitchProps extends RNSwitchProp {
  field: FormSchema;
  values: any;
  setFieldValue?: any;
  isError?: boolean;
}
