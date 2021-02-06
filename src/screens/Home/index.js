import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from './style';

import Edit from '../../components/ChangeName';
import QrCode from '../../components/QrCode';

export default function Home() {
  const [open, setOpen] = useState(false);
  const {data} = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const doLogout = () => {
    dispatch({type: 'LOGOUT'});
  };

  return (
    <>
      <View style={styled.parent}>
        <View style={styled.title}>
          <Text style={styled.greet}>Hi,</Text>
          <TouchableOpacity onPress={() => doLogout()}>
            <Icon name="logout" size={30} color="maroon" />
          </TouchableOpacity>
        </View>
        {open && <Edit visible={true} />}
        <TouchableOpacity
          onPress={() => setOpen(!open)}
          style={styled.nameWrapper}>
          <Text style={styled.name}>{data.name}</Text>
          <Icon name="pencil" size={25} />
        </TouchableOpacity>
        <View style={styled.qrWrapper}>
          <QrCode value={data.name} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Scan')}
          style={styled.scan}>
          <Icon name="qrcode-scan" size={30} />
          <Text style={styled.scanText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
