/*This is an Example to conver any value into MD5*/
import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import md5 from 'md5';

export default class ConvertMD5 extends React.Component {

  constructor(props) {
    super(props);
    //initial value of Text
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.text == ''
            ? 'Please insert any value to convert in md5'
            : md5(this.state.text) //<-----Here is the trick
          }
        </Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setState({ text })}
          placeholder="Enter Any Value"
          value={this.state.text}
        />
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

  inputStyle: {
    height: 40,
    width: 200,
    marginTop: 16,
    textAlign: 'center',
    borderColor: 'gray',
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
  },
  
});