import React, {useEffect} from 'react';
import {View, Text, TextInput, Keyboard, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styled from './style';

import action from '../../redux/actions';

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
});

export default function Login() {
  const {isLogin} = useSelector((state) => state);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const doLogin = async (data) => {
    Keyboard.dismiss();
    await dispatch(action.login(data));
  };

  useEffect(() => {
    isLogin && navigation.navigate('Home');
  }, [isLogin, navigation]);

  return (
    <View style={styled.parent}>
      <Formik
        initialValues={{name: ''}}
        validationSchema={loginSchema}
        onSubmit={(values) => doLogin(values)}>
        {({handleBlur, handleChange, handleSubmit, errors}) => (
          <>
            <Image
              style={styled.logo}
              source={require('../../assets/logo.jpeg')}
            />
            <TextInput
              style={styled.input}
              placeholder="Insert your name"
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              onSubmitEditing={handleSubmit}
            />
            {errors.name ? (
              <View style={styled.error}>
                <Icon name="alert-triangle" size={16} color="red" />
                <Text style={styled.errorText}>{errors.name}</Text>
              </View>
            ) : null}
            <Button style={styled.btn} block onPress={handleSubmit}>
              <Text style={styled.btnText}>Login</Text>
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}
