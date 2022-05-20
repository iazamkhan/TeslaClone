import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';


const Header = () => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/img/logo.png')}
            />
            <Image
                style={styles.menu}
                source={require('../../assets/img/menu.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        height: 25,
        width: 25,
    }
});

export default Header;