import {SwitchProps as RNSwitchProp} from 'react-native';
import {Field} from '../../dynamic-form.type';

export interface SwitchProps extends RNSwitchProp {
  field: Field;
  values: any;
  setFieldValue?: any;
  isError?: boolean;
}
