import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default function Index() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }}>
          Example of SafeArea in Recat Native
        </Text>
        <Text style={{ fontSize: 20 }}>
          In publishing and graphic design, lorem ipsum is a placeholder text
          commonly used to demonstrate the visual... please add more content..
        </Text>
      </View>
    </SafeAreaView>
  );
}