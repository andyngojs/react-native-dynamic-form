import {TextInputProps} from 'react-native';
import {Field} from '../../dynamic-form.type';

export interface InputCommonProps extends TextInputProps {
  field: Field;
  isError?: boolean;
}
