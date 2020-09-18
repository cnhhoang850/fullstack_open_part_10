import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 22,
    color: '#d73a4a'
  },
  input: {
    height: 60,
    backgroundColor: 'white',
    borderColor: '#e1e4e8',
    borderWidth: 1.5,
    borderRadius: 4,
    margin: 15,
    marginBottom: 5
  },
  invalidInput: {
    height: 60,
    backgroundColor: 'white',
    borderColor: '#d73a4a',
    borderWidth: 1.5,
    borderRadius: 4,
    margin: 15,
    marginBottom: 15
  },
  text: {
    display: 'flex',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
    color: 'black'
  },
  untouchedText: {
    display: 'flex',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
    color: 'gray'
  }

});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={[showError ? styles.invalidInput : styles.input]}>
      <TextInput
        style={[meta.value ? styles.text : styles.untouchedText]}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;