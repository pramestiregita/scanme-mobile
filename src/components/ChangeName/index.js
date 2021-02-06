/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from './style';

import action from '../../redux/actions';

const editSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
});

export default function ChangeName({visible}) {
  const [open, setOpen] = useState(visible);
  const {data, isChange} = useSelector((state) => state);

  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(action.get(data.id));
  };

  const saveChange = async (v) => {
    await dispatch(action.update(data.id, v));
  };

  useEffect(() => {
    isChange && getData();
  }, [isChange]);

  return (
    <Modal onBackdropPress={() => setOpen(false)} isVisible={open}>
      <View style={styled.modal}>
        <Formik
          initialValues={{name: data.name}}
          validationSchema={editSchema}
          onSubmit={(values) => {
            // setOpen(false);
            saveChange(values);
          }}>
          {({handleBlur, handleChange, handleSubmit, values, errors}) => (
            <>
              <Text style={styled.title}>Change your name</Text>
              <TextInput
                style={styled.input}
                placeholder="Insert your name"
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                onSubmitEditing={handleSubmit}
                value={values.name}
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
