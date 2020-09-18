import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username contains more than 3 characters')
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});
const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
    button: {
        height: 60,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 4,
      }
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View syle={styles.container}>
      <FormikTextInput placeholder="Username" name="username" />
      <FormikTextInput placeholder="Password" name="password" secureTextEntry={true} />
      <Button label="Sign in" onSubmit={onSubmit}/>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = ({username, password}) => {
    if (username && password) {
        Alert.alert('Logged in');
    }
  };

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;