import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';

import cars from './cars';
import CarItem from '../carItem';

const CarsList = (props) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                decelerationRate={'fast'}
                snapToAlignment={'start'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});

export default CarsList;