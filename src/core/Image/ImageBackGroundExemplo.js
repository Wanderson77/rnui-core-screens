import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native';

export default class ImageBackGroundExemplo extends React.Component {

  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
        >
        <View style={styles.MainContainer}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
            }}
            style={{ width: 40, height: 40, marginTop: 90 }}
          />
          <Text style={styles.TextStyle}>https://aboutreact.com</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },

  TextStyle: {
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },

});