import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const Index = () => {
  const window = useWindowDimensions();
  return (
    <>
      <View style={styles.container}>
        <Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>
      </View>
      <View style={styles.containerTwo}>
        <Text style={styles.textTitle}>React Native</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerTwo: {
    flex: 1,
    fontWeight: "bold",
    backgroundColor: "#f1f1f1",
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  textTitle:{
    fontSize: 16,
  }
});

export default Index;