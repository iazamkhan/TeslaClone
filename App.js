import React from 'react';
import CarItem from './components/carItem'
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <CarItem
      name={"Model 3"}
      tagline={"Order Online for"}
      taglineCTA={"Touchless Delivery"}
      image={require('./assets/img/Model3.jpeg')}
      />
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
});

export default App;
