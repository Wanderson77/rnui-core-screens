import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Hyperlink from 'react-native-hyperlink';


const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text style={styles.header}>Example of React Native Hyperlink</Text>

              <Text style={styles.sectionTitle}>Without Hyperlink</Text>
              <Text style={styles.sectionDescription}>
                Please click on https://aboutreact.com to check if it can do any
                action
              </Text>

              <Text style={styles.sectionTitle}>
                Hyperlink and Click to open in Browser
              </Text>
              <Hyperlink linkDefault={true}>
                <Text style={styles.sectionDescription}>
                  Please click on https://aboutreact.com to check if it can do
                  any action
                </Text>
              </Hyperlink>

              <Text style={styles.sectionTitle}>
                Hyperlink and Click to get the url in onPress
              </Text>
              <Hyperlink onPress={(url, text) => alert(url + ', ' + text)}>
                <Text style={styles.sectionDescription}>
                  Please click on https://aboutreact.com to check if it can do
                  any action
                </Text>
              </Hyperlink>

              <Text style={styles.sectionTitle}>
                Hyperlink and Custom Styling of Hyperlink
              </Text>
              <Hyperlink
                linkStyle={{ color: '#2980b9', fontSize: 16 }}
                onPress={(url, text) => alert(url + ', ' + text)}>
                <Text style={styles.sectionDescription}>
                  Please click on https://aboutreact.com to check if it can do
                  any action
                </Text>
              </Hyperlink>

              <Text style={styles.sectionTitle}>
                Hyperlink, Custom styling and Replace URL with String
              </Text>
              <Hyperlink
                linkStyle={{ color: '#2980b9', fontSize: 16 }}
                onPress={(url, text) => alert(url + ', ' + text)}
                linkText={url =>
                  url === 'https://aboutreact.com' ? 'AboutReact' : url
                }>
                <Text style={styles.sectionDescription}>
                  Please click on https://aboutreact.com to check if it can do
                  any action
                </Text>
              </Hyperlink>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'white',
  },

  body: {
    backgroundColor: 'white',
  },

  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginTop: 30,
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },

});

export default App;