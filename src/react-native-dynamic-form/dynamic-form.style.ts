import {StyleSheet} from 'react-native';
import {COLORS} from './constants'

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnTitle: {
    fontSize: 25,
    color: COLORS.white,
  },
  error: {
    fontSize: 12,
    color: COLORS.error,
    marginTop: 10,
    marginBottom: 10,
  },
  disableButton: {
    backgroundColor: COLORS.disable,
  }
});
