import React from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const Botton = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerMain}>
      <View style={styles.topView}>
          <Text style={styles.textStyle}>Top View</Text>
        </View>
        <Text> Main Content Here</Text>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Bottom View</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  topView: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    top: 20, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Botton;