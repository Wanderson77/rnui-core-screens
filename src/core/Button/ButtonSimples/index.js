/** Simple comp */

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


const ButtonSimples = () => {
  <View style={styles.container}>
    <Text>Hello World!</Text>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        title="Click"
        color="black"
        onPress={() => alert("Você clicou no botão")}
      />
    </View>
  </View>
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer:{
    marginVertical: 20
  }
});


export default ButtonSimples;
