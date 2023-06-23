import {TextInputProps} from 'react-native';
import {FormSchema} from '../../dynamic-form.type';

export interface InputCommonProps extends TextInputProps {
  field: FormSchema;
  isError?: boolean;
}
