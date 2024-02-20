import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class RemoveUnderline extends Component {

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          margin: 10,
        }}>
        <TextInput
          placeholder="https://aboutreact.com"
          placeholderTextColor="#808080"
          //We have to use this to remove underline
          underlineColorAndroid="transparent"
          style={{
            fontSize: 25,
            textAlign: 'center',
            height: 50,
            backgroundColor: '#d6d6d6',
          }}
        />
      </View>
    );
  }
}