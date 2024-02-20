import React from 'react';
import {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const size = 50;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

const App = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text>Current Pixel Ratio is:</Text>
      <Text style={styles.value}>{PixelRatio.get()}</Text>
    </View>
    <View style={styles.container}>
      <Text>Current Font Scale is:</Text>
      <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
    </View>
    <View style={styles.container}>
      <Text>On this device images with a layout width of</Text>
      <Text style={styles.value}>{size} px</Text>
      <Image source={cat} />
    </View>
    <View style={styles.container}>
      <Text>require images with a pixel width of</Text>
      <Text style={styles.value}>
        {PixelRatio.getPixelSizeForLayoutSize(size)} px
      </Text>
      <Image
        source={cat}
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(size),
          height: PixelRatio.getPixelSizeForLayoutSize(size),
        }}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: 40,
  },
  container: {
    // margin: 20,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: 300,
    height: 160,
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;