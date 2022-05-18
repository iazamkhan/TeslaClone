import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';

import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            >
                <View style={styles.titles}>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {tagline}
                        {' '}
                        <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <StyledButton
                        type="primary"
                        content={"Custom Order"}
                        onPress={() => {
                            console.warn("Custom Order was pressed");
                        }}
                    />
                    <StyledButton
                        type="secondary"
                        content={"Existing Inventory"}
                        onPress={() => {
                            console.warn("Existing Inventory was pressed");
                        }}
                    />
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
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    image: {
        height: '100%',
        weight: '100%',
        resizeMode: 'cover',
    },
    buttonsContainer: {
        marginTop: '80%',
    }
});

export default CarItem;