/*This is an Example of React Native Add Items to ScrollView using Loop*/

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
}from 'react-native';


export default class ItemsEx extends Component {

  constructor() {
    super();
    //Array of Item to add
    this.items = [
      'Goa',
      'Gujrat',
      'Madhya Pradesh',
      'Assam',
      'Gujrat',
      'Karnataka',
      'Jharkhand',
      'Himachal Pradesh',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Uttarakhand',
      'West Bengal',
      'Tamil Nadu ',
      'Punjab',
      'Rajasthan',
      'Bihar',
      'Andhra Pradesh',
      'Arunachal Pradesh',
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/*Loop of JS which is like foreach loop*/}
          {this.items.map((item, key) => (
            //key is the index of the array
            //item is the single item of the array
            <View key={key} style={styles.item}>
              <Text style={styles.text}>{key}. {item}</Text>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 30,
  },

  separator: {
    height: 1,
    backgroundColor: '#707080',
    width: '100%',
  },

  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },

});
