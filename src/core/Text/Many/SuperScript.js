import React from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const SuperScript = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*View to wrap multiple text*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start'
          }}>
          {/*View to wrap multiple text*/}
          <Text style={{fontSize: 20, lineHeight: 30}}>
            Time is 10
          </Text>
          {/*Superscript*/}
          <Text style={{fontSize: 15, lineHeight: 18}}>
            am
          </Text>
          <Text style={{fontSize: 20, lineHeight: 30}}>
            {' '}
            and I am late or the class
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 30,
          }}>
          {/*View to wrap multiple text*/}
          <Text style={{fontSize: 20, lineHeight: 30}}>
            Time is 10
          </Text>
          {/*Subscript*/}
          <Text style={{fontSize: 15, lineHeight: 37}}>
            am
          </Text>
          <Text style={{fontSize: 20, lineHeight: 30}}>
            {' '}
            and I am late or the class
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default SuperScript;