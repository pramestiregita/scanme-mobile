import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import IconMa from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from './style';

export default function FriendName() {
  const {friend} = useSelector((state) => state);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goHome = () => {
    dispatch({type: 'CLEAR'});
    navigation.navigate('Home');
  };

  return (
    <View style={styled.parent}>
      <View style={styled.title}>
        <Icon name="check-circle" size={60} color="green" />
        <Text style={styled.titleText}>Success</Text>
      </View>
      <View style={styled.content}>
        <Text style={styled.subTitle}>Your beloved friend name is</Text>
        <Text style={styled.name}>{friend}</Text>
      </View>
      <TouchableOpacity onPress={() => goHome()}>
        <IconMa name="home" size={50} />
      </TouchableOpacity>
    </View>
  );
}
