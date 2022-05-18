import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Pressable,
} from 'react-native';

const StyledButton = (props) => {

    const { content, onPress, type } = props;
    const backgroundColor = type === 'primary' ? '#474747' : '#F7F8F8';
    const textColor = type === 'primary' ? '#F7F8F8' : '#474747';

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={[styles.button, { backgroundColor: backgroundColor }]}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});

export default StyledButton;