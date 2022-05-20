import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';

import cars from './cars';
import CarItem from '../carItem';

const CarsList = (props) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
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