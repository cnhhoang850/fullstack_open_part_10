import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';

const Styles = StyleSheet.create({
    value: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 1
    },
    label: {
        fontSize: 14,
        textAlign: 'center',
        padding: 1
    },

});

const CardItem = ({label, value}) => {
    if (value.toString().length > 3) {
      value = Math.round(value / 100) / 10;
      value = value + "k";
    }
    return(
        <View>
            <Text style={Styles.value}>{value}</Text>
            <Text style={Styles.label} color="textSecondary">{label}</Text>
        </View>
    );
};

export default CardItem;