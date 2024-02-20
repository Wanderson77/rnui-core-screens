import React, { Component } from 'react';

import { Button, View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default class Index extends Component {

    onPressLearnMore(){
    //For generating alert on buttton click
        alert('Hello');
    }
  render() {
    return (
        // enclose all components in this View tag
        <View style={styles.container}>
          {/* View is used here to wrap all component in one */}
          <Text>Button Example</Text>
          {/* Button whith handler function named onPressLearnMore*/}
          <Button
           onPress={this.onPressLearnMore}
           title="Click Me"
           style={styles.button}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
  });
