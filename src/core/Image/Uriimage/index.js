import React from 'react';

import {
  View,
  SafeAreaView,
  Image
} from 'react-native';

import styles from './styles';

const UriImage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
          }}
          style={{ width: 400, height: 400, margin: 20 }}
        />
        {/* If you want to show image from local directory
          <Image
            source={require('./your-img.png')}
            style={{width: 400, height: 400}}
          />
        */}
        <Image
          style={{ width: 66, height: 58 }}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default UriImage;