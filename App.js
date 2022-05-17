import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';


function App() {

  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground source={require('./assets/img/ModelS.jpeg')}>
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
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});

export default App;
