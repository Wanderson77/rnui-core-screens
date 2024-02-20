import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function ActivityRead() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanning For Viruses...</Text>
      <ActivityIndicator
        size = "large"
        color = "white"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#623FA0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    margin: 20
  }
});