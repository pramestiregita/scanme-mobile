import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  btn: {
    marginTop: 10,
    backgroundColor: 'skyblue',
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
