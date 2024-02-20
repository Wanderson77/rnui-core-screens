import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";

export default class Clock extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }tick() {
    this.setState({
      date: new Date()
    });
  } componentDidMount() {
     this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }  componentWillUnmount() {
      clearInterval(this.timerID);
  }render() {
    return (
        <View style={styles.container}>
          <Text style={styles.clock}>Clock</Text>
          <Text style={styles.clock}>{this.state.date.toLocaleTimeString()}</Text>
        </View>
      )
  }
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
    marginTop: 10
  },
  clock: {
    fontSize: 60,
    color: '#bf740e',
    marginTop: 100,
  }
});
