/*This is an Example to Generate SHA256 Encoded Hash in React Native*/

import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { sha256 } from 'react-native-sha256';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    //initial value of Text
    this.state = {
      inputText: '',
      text: '',
    };
  }

  convertSHA(){
    //Encode SHA256 
    sha256(this.state.text).then(hash => {
      this.setState({ text:hash })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{this.state.text}</Text>
        <Text>'Please insert any value to convert in SHA 256'</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={inputText => this.setState({ inputText })}
          placeholder="Enter Any Value"
          value={this.state.inputText}
        />
        <TouchableOpacity
          style={styles.button}
          title="Conver sh5"
          onPress={this.convertSHA.bind(this)}>
          <Text>Conver to SHA 256</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
  },

  textStyle: {
    padding: 10,
    textAlign: 'center',
    marginBottom: 30
  },

  inputStyle: {
    height: 40,
    width: 300,
    marginTop: 16,
    textAlign: 'center',
    borderColor: 'gray',
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  
});