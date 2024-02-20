/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import MeuModal from './components/MeuModal';

// criar components
const index = () => {
  <View style={styles.container}>
    <Text style={styles.text}>Hello World!</Text>
    <TouchableOpacity style={styles.button}>
        <Text>Open Modal</Text>
    </TouchableOpacity>

    <MeuModal />

    <MeuModalAnimated
      show={modal}
      close={() => setModal(false)}
    />

  </View>
};

// style settings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'blue'
  },title: {
    color: '#fff',
    fontSize: 22
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20
  }
});


export default index;
