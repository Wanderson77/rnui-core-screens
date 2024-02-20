import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';

export default class CheckValue extends Component {

  constructor() {
    super();
    this.state = {
      TextInputValue: '',
    };
  }

  CheckValueIsNumberOrNot = () => {
    //Handler called on button click
    if (isNaN(this.state.TextInputValue)) {
      //if input is not a number then here
      Alert.alert('It is not a Number');
    } else {
      //if input is number then here
      Alert.alert('It is a Number');
    }
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter text"
          onChangeText={TextInputValue =>
            this.setState({ TextInputValue: TextInputValue })
          }
          style={styles.TextInputStyle}
        />
        <Button
          title=" Check Value Is Number Or Not "
          onPress={this.CheckValueIsNumberOrNot}
          color="#606070"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },

  TextInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
  },

});