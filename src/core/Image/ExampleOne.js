import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

const ExampleOne = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Elements</Text>
      <Text style={styles.text}>in Front of</Text>
      <Text style={styles.text}>Background</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
  },
});

export default ExampleOne;