import React, { Fragment } from 'react';
import { View, SafeAreaView, Text, Platform, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Index() {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: 'yellow'}} />

      <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          {/* <Text style={styles.instructions}>{instructions}</Text> */}
        </View>
      </SafeAreaView>

    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: '#FFFFFF',
  },
  instructions: {
    fontSize: 30,
    backgroundColor: '#F1F1F1',
  },
});
