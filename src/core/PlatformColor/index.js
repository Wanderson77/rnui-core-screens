import React from 'react';

import {
  Platform,
  PlatformColor,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default ExPlatColor = () => (
  <>
    <View><Text style={styles.textNew}>Testando</Text></View>
    <View>
      <Text style={styles.labelCell}>I am a special label color!</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  labelCell: {
    flex: 1,
    alignItems: 'stretch',
    ...Platform.select({
      ios: { color: PlatformColor('label') },
      android: {
        color: PlatformColor('?attr/colorControlNormal'),
      },
      default: { color: 'blue' },
    }),
  },
  textNew:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 40,
  }
});