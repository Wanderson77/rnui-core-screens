import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, TextInput, SafeAreaView } from 'react-native';

export default function Novo() {
  const [myValue, setMyValue] = React.useState("Teste");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput                
        style={styles.input}
        value={myValue}
        onChangeText={setMyValue}
        placeholder='My Value'
        placeholderTextColor={"green"}
        multiline={true}
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
  input: {
    borderBottomColor:"green",
    borderBottomWidth: 2,
    alignSelf: "stretch",
    margin: 16,
    padding: 8,
    fontSize: 20

  }
});
