import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {Link} from 'react-router-native';

const styles = StyleSheet.create({
    appbar: {
        marginTop: Constants.statusBarHeight,
        height: 70,
        backgroundColor: '#24292e',
        borderBottomEndRadius: 30, 
        flexDirection: 'row',
    },
      text: {
        color: 'white',
        marginTop: 20,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#0366d6',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 5
      },
      tab: {
      }
});

const AppBar = () => {
    return( 
    <View style={styles.appbar}>
      <ScrollView horizontal>
      <Link style={styles.tab} to="/" component={TouchableOpacity} activeOpacity={0.8}>
      <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link style={styles.tab} to="/signin" component={TouchableOpacity} activeOpacity={0.8}>
      <Text style={styles.text}>Sign in</Text>
      </Link>
      </ScrollView>
    </View>
    );
};

export default AppBar;

