import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../assets/img/ModelS.jpeg')}
          style={styles.image}
        >
        <View style={styles.titles}>
          <Text style={styles.title}>
            Model S
          </Text>
          <Text style={styles.subtitle}>
            Starting at $69,420
          </Text>
        </View>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62',
    },
    image: {
        height: '100%',
        weight: '100%',
        resizeMode: 'cover',
    },
});

export default CarItem;