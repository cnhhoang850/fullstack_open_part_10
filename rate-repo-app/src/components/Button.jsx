import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#0366d6',
        height: 60,
        borderRadius: 4,
        marginBottom: 15,
        marginHorizontal: 15,
        marginTop: 10
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        display: 'flex'
    }
});

const Button = ({onSubmit, label}) => {
    return (
        <View style={styles.button}>
        <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.label}>{label}</Text>
        </TouchableWithoutFeedback>
        </View>
    );
};

export default Button;
  