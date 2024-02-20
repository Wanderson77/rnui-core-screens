/*This is an example of React Native Touchable using react-native-platform-touchable*/

import React from 'react';
import { Text, View, Platform } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export default class PlatformExample extends React.Component {

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <Touchable
          onPress={() => console.log('Button Clicked!')}
          style={{
            backgroundColor: '#FF4500',
          }}
          background={Touchable.Ripple('#FFD700')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              padding: 15,
            }}>
            {Platform.OS === 'android'
              ? 'Device: Android \n Touchable Type: TouchableNativeFeedback'
              : 'Device: iOS \n Touchable Type: TouchableOpacity'}
          </Text>
        </Touchable>
      </View>
    );
  }
}