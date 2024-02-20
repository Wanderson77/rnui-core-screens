/** Simple comp */

import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

// import { Container } from './styles';

export default function index() {
  return (
    <View>
        <SafeAreaView style={{flex: 1, backgroundColor: '#333' }}>
            <View style={{flex: 1}}>
                <Text>Mobile Marketing Content goes here...</Text>
            </View>
        </SafeAreaView>
    </View>
  );
}
