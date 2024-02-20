import React from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const Underline = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Example of{' '}
          <Text style={styles.underlineTextStyle}>Underline Text</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  underlineTextStyle: {
    textDecorationLine: 'underline',
    //line-through is the trick
  },
});

export default Underline;