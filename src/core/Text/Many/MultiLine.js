import React from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const MultiLine = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Hello This is an example of
          {'\n'}
          multiline text
        </Text>
        <Text style={styles.paragraph}>
          {`Here is an other way to
          set multiline text.`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MultiLine;