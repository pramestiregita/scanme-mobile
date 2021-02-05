import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from './style';

const editSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
});

export default function ChangeName({visible}) {
  const [open, setOpen] = useState(visible);

  return (
    <Modal onBackdropPress={() => setOpen(false)} isVisible={open}>
      <View style={styled.modal}>
        <Formik
          initialValues={{name: ''}}
          validationSchema={editSchema}
          onSubmit={(values) => {
            setOpen(false);
            console.log(values);
          }}>
          {({handleBlur, handleChange, handleSubmit, errors}) => (
            <>
              <Text style={styled.title}>Change your name</Text>
              <TextInput
                style={styled.input}
                placeholder="Insert your name"
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                onSubmitEditing={handleSubmit}
              />
              {errors.name ? (
                <View style={styled.error}>
                  <Icon name="alert-outline" size={20} color="red" />
                  <Text style={styled.errorText}>{errors.name}</Text>
                </View>
              ) : null}
              <Button style={styled.btn} block onPress={handleSubmit}>
                <Text style={styled.btnText}>save</Text>
              </Button>
            </>
          )}
        </Formik>
      </View>
    </Modal>
  );
}
