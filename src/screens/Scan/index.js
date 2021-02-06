import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import styled from './style';

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
    <View style={styled.parent}>
      <QRCodeScanner
        reactivate={active}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker={true}
        markerStyle={styled.marker}
        topContent={
          <View>
            <Text style={styled.centerText}>Scan your friend QR Code!</Text>
          </View>
        }
        topViewStyle={styled.topStyles}
        bottomContent={
          <TouchableOpacity
            onPress={() => goHome()}
            style={styled.buttonTouchable}>
            <Text style={styled.buttonText}>Cancel</Text>
          </TouchableOpacity>
        }
        cameraTimeout={15000}
      />
    </View>
  );
}
