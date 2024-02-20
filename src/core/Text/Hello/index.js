import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Hello = () => {
  return (
    // enclose all components in this View tag
    <SafeAreaView>
      <View>
        {/* View is used here to wrap all component in one */}
        <Text>All the very best</Text>
        {/* Text is used same as a tag in HTML */}
        <Text>This is your first App.</Text>
        <Text>Enjoy react native coding.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Hello;