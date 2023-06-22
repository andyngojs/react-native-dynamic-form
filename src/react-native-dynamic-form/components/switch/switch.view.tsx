import React from 'react';
import {Switch as RNSwitch, Text, View} from 'react-native';
import {SwitchProps} from './switch.type';
import {styles} from './switch.style';

const _Switch: React.FC<SwitchProps> = ({
  field,
  values,
  setFieldValue,
  ...params
}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{field.label}</Text>
        <RNSwitch
          style={styles.switch}
          value={values[field.name]}
          onValueChange={value => setFieldValue(field.name, value)}
          {...params}
        />
      </View>
    </View>
  );
};

export const Switch = React.memo(_Switch);
