import React from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const StrikeTrought = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Example of{' '}
          <Text style={styles.strikeThroughtextStyle}>
            Strike through
          </Text> Text
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  strikeThroughtextStyle: {
    textDecorationLine: 'line-through',
    //line-through is the trick
  },
});

export default StrikeTrought;