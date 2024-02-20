import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text style={{fontSize: 20, lineHeight: 30}}>Temperatura: 25</Text>
          <Text style={{fontSize: 15, lineHeight: 18}}>o </Text>
          <Text style={{fontSize: 20, lineHeight: 30}}>C</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 30,}}>
          <Text style={{fontSize: 20, lineHeight: 30}}>Reunião Marcada: 10</Text>
          <Text style={{fontSize: 15, lineHeight: 37}}>am </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});