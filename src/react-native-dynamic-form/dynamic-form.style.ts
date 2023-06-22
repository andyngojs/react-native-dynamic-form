import {StyleSheet} from 'react-native';

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
    color: '#fff',
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
  disableButton: {
    backgroundColor: '#ccc',
  }
});
