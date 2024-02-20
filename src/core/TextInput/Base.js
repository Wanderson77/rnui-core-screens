import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, TextInput, SafeAreaView } from 'react-native';

export default function Base() {
  const [value, onChangeText] = React.useState('Digite aqui');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'blue', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
