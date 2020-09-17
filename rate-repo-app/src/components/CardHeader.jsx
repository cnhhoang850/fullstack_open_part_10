import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from './Text';

import Python from './logos/python.png';
import TypeScript from './logos/typescript.png';
import Ruby from './logos/ruby.png';

const Styles = StyleSheet.create({
    logo: {
        height: 40,
        width: 40,
        borderRadius: 5
    },
    flexContainer: {
        flexDirection: 'row'
    },
    flex1: {
        flex: 1
    },
    flex5: {
        flex:5
    },
    lang: {
        backgroundColor: '#0366d6',
        padding: 6,
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginLeft: 0,
        marginTop: 6
    },
    langLabel: {
        textAlign: 'center',
        color: '#e1e4e8',
        fontSize: 16
    },
    des: {
        marginTop: 6,
        marginBottom:6
    }
});

const CardHeader = ({name, des, lang}) => {
    let img;
    if (lang === "Python") {
        img = Python;
    } else if (lang === "TypeScript") {
        img = TypeScript;
    } else if (lang === "Ruby") {
        img = Ruby;
    }
    return(
        <View style={Styles.flexContainer}>
            <View style={Styles.flex1}> 
                <Image
                 style={Styles.logo}
                 source={img}
                />
            </View>
            <View style={Styles.flex5}>
                <Text color="primary" style={{fontSize: 22, padding: 2}} fontWeight="bold">{name}</Text>
                <Text style={Styles.des}>{des}</Text>
                <View style={Styles.lang}>
                <Text style={Styles.langLabel}>{lang}</Text>
                </View>
            </View>
        </View>
    );
};

export default CardHeader;