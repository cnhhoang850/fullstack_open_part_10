import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        display: 'flex',
        marginTop: 20,
        marginLeft: 10,
        fontSize: 16,
        color: 'grey'
    }
});

const TextInput = ({ style, error, ...props }) => {
 
  return <NativeTextInput  style={style ? style : styles.text } {...props} />;
};

export default TextInput;