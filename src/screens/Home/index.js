import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from './style';

import Edit from '../../components/ChangeName';
import QrCode from '../../components/QrCode';

export default function Home() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch({type: 'LOGOUT'});
  };

  return (
    <>
      {open && <Edit visible={true} />}

      <View style={styled.parent}>
        <View style={styled.title}>
          <Text style={styled.greet}>Hi,</Text>
          <TouchableOpacity onPress={() => doLogout()}>
            <Icon name="logout" size={30} color="maroon" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setOpen(!open)}
          style={styled.nameWrapper}>
          <Text style={styled.name}>Pramesti</Text>
          <Icon name="pencil" size={25} />
        </TouchableOpacity>
        <View style={styled.qrWrapper}>
          <QrCode value={'Pramesti'} />
        </View>
        <TouchableOpacity style={styled.scan}>
          <Icon name="qrcode-scan" size={30} />
          <Text style={styled.scanText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
