/*This is an example of React Native Enable Disable TextInput Programmatically*/
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default class IsEnable extends React.Component {

  constructor() {
    super();
    this.state = {
      isEditable: false,
      buttonLabel: 'Enable TextInput',
    };
  }

  _clickhandler(){
    //Handler to enable of disable TextInput
      this.setState({ isEditable: !this.state.isEditable });
      //Make TextInput Enable/Disable
      this.setState({
            buttonLabel: this.state.isEditable ? 'Enable TextInput':'Disable TextInput'
           //updating the label of the button
      });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Password"
          underlineColorAndroid="transparent"
          style={[
            styles.TextInput,
            {
              borderColor: this.state.isEditable ? 'red' : 'blue',
              //updating the border color on enable/disable
            },
          ]}
          //editable is used to make TextInput enable/disable
          editable={this.state.isEditable}
        />
        <Button title={this.state.buttonLabel} onPress={this._clickhandler.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    margin: 10,
    marginTop:30,
    padding:30,
  },

  TextInput: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },

});