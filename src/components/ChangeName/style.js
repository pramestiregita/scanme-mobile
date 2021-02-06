import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    fontStyle: 'italic',
    color: 'red',
    fontSize: 16,
    marginLeft: 5,
  },
});
