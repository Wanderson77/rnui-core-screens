import React from 'react';
import { Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Index() {
  return (
    <Text style={styles.text}>React Native </Text>
  );
}

const styles = StyleSheet.create({
    text:{
        flex:1,
        borderBottomColor:'#7159c1',
        marginTop: 20,
    },
})
