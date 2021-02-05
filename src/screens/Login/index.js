import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styled from './style';

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
});

export default function Login() {
  return (
    <View style={styled.parent}>
      <Formik
        initialValues={{name: ''}}
        validationSchema={loginSchema}
        onSubmit={(values) => console.log(values)}>
        {({handleBlur, handleChange, handleSubmit, errors}) => (
          <>
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