import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import action from '../../redux/actions';

export default function Scan() {
  const [active, setActive] = useState(false);
  const {isSaved} = useSelector((state) => state);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSuccess = (e) => {
    dispatch(action.save(e.data));
  };

  const goHome = () => {
    dispatch({type: 'CLEAR'});
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (isSaved) {
      navigation.navigate('FriendName');
      setActive(true);
    }
  }, [isSaved, navigation]);

  return (
    <View style={styles.parent}>
      <QRCodeScanner
        reactivate={active}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker={true}
        markerStyle={styles.marker}
        topContent={
          <View>
            <Text style={styles.centerText}>Scan your friend QR Code!</Text>
          </View>
        }
        topViewStyle={styles.topStyles}
        bottomContent={
          <TouchableOpacity
            onPress={() => goHome()}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        }
        cameraTimeout={15000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  marker: {
    borderColor: '#fff',
    borderRadius: 10,
  },
  topStyles: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    color: '#588bae',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 21,
    color: '#588bae',
  },
  buttonTouchable: {
    padding: 16,
  },
});
