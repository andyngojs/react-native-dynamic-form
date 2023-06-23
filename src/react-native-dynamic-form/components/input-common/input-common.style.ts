import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  col: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 15,
    marginVertical: 10,
  },
  input: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: COLORS.backgroundInput,
  },
});
