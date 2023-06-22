import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
  },
  switch: {
    marginVertical: 10,
  },
  error: {
    padding: 2,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 10,
    color: 'red',
  },
});
