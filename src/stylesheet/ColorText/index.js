import React from 'react';
import { View, Text } from 'react-native';

const Index = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 400,
        padding: 20,
        marginTop: 20,
      }}>
      <View style={{ backgroundColor: 'orange', flex: 0.3 }} />
      <View style={{ backgroundColor: 'yellow', flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default Index;