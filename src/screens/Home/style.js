import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greet: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#588bae',
    marginRight: 10,
  },
  pencil: {
    alignContent: 'flex-start',
  },
  qrWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    marginVertical: 20,
  },
  qr: {
    width: 300,
    height: 300,
  },
  scan: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
});
