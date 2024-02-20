import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

const ExampleTwo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        //We are using online image to set background
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')
      >
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            App
          </Text>
          <View style={styles.centerContentStyle}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
              }}
              style={{
                width: 40,
                height: 40,
                marginTop: 90
              }}
            />
            <Text style={styles.TextStyle}>
              AboutReact
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ExampleTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});