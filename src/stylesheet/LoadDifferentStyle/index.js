import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';

const Index = () => {
  const [defaultStyle, setDefaultStyle] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text
          //Here we are setting the style on the basis of state
          style={defaultStyle ? styles.style1 : styles.style2}>
          About RN
        </Text>
        <Button
          title="Change Default Style"
          onPress={() => setDefaultStyle(!defaultStyle)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  style1: {
    fontSize: 20,
  },
  style2: {
    fontSize: 60,
    color: 'red',
  },
});

export default Index;