import React, { Component } from 'react';

import {
  TouchableNativeFeedback,
  TouchableHighlight,TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class App extends Component {

    onPress(){
      //Do what you want
    }

   render() {
      return (
         <View style = {styles.container}>
         {/*Only for android If you trieng to run in IOS please remove
            TouchableNativeFeedback section*/}
          <TouchableNativeFeedback onPress={this.onPress}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text>Touchable Native Feedback(Only Android)</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableHighlight style={styles.button} onPress={this.onPress}>
            <Text>Touchable Highlight</Text>
          </TouchableHighlight>
          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}>
            <Text>Touchable Opacity</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback
              style={styles.button}
              onPress={this.onPress}>
            <View style={styles.button}>
              <Text>Touchable Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback>
         </View>
      )
   }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width:300,
      marginTop:16
    },
});