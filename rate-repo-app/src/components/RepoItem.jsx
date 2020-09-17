import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardItem from './CardItem';
import CardHeader from './CardHeader';
const styles = StyleSheet.create({
    flexContainer: {
      padding: 14,
      backgroundColor: 'white',
      flexDirection: 'column'
    },
    flexRow: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: 50
      }
});

const Item = ({name, des, lang, stars, forks, revs, rates}) => (
    <View style={styles.flexContainer}>
                <CardHeader name={name} des={des} lang={lang} />
                <View style={styles.flexRow}>
                <CardItem label="Stars" value={stars} />
                <CardItem label="Forks" value={forks} />
                <CardItem label="Reviews" value={revs} />
                <CardItem label="Ratings" value={rates} />
                </View>
                
    </View>
);

const renderItem = ({ item }) => {
    return (
        <Item name={item.fullName} des={item.description} lang={item.language} stars={item.stargazersCount} forks={item.forksCount} revs={item.reviewCount} rates={item.ratingAverage} />
    );
};

export default renderItem;