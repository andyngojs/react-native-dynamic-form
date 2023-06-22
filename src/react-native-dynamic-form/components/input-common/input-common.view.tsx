import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './input-common.style';
import {InputCommonProps} from './input-common.type';

const _InputCommon: React.FC<InputCommonProps> = ({
  field,
  onChangeText,
  onBlur,
  isError,
  ...params
}) => {
  const stateColorStyle = React.useMemo(() => {
    if (isError) {
      return {borderColor: 'red', borderWidth: 1};
    }
  }, [field, isError]);

  return (
    <View style={styles.col}>
      <Text style={styles.label}>{field.label}</Text>
      <TextInput
        style={[styles.input, stateColorStyle]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={field.placeholder}
        {...params}
      />
    </View>
  );
};

export const InputCommon = React.memo(_InputCommon);
