import React from 'react';
import CarsList from './components/carsList';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <CarsList />
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
