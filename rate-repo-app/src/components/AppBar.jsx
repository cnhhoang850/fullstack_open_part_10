import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    appbar: {
        marginTop: Constants.statusBarHeight,
        height: 70,
        backgroundColor: '#24292e',
      },
      text: {
        color: 'white',
        marginTop: 30,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
});

const AppBar = () => {
    return( 
    <View style={styles.appbar}>
      <Text style={styles.text}>Repositories</Text>
    </View>
    );
};

export default AppBar;

