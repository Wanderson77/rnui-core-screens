import React from 'react';

import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';

const OnlyNumeric = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Numeric Values Only"
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'numeric'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textInputStyle: {
    width: 250,
    backgroundColor: '#dde8c9',
    padding: 16,
  },
});

export default OnlyNumeric;