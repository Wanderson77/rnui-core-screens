import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

const month = () => {

  const [meses, setMes] = useState([
    { name: "Janeiro", key: "1"},
    { name: "Fevereiro", key: "2"},
    { name: "Março", key: "3"},
    { name: "Abril", key: "4"},
    { name: "Maio", key: "5"},
    { name: "Junho", key: "6"},
    { name: "Julho", key: "7"},
    { name: "Agosto", key: "8"},
    { name: "Setembro", key: "9"},
    { name: "Outubro", key: "10"},
    { name: "Novembro", key: "11"},
    { name: "Dezembro", key: "12"}

  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meses no ano</Text>
        {meses.map(mes => {
          return (
            <View key={mes.key}>
              <Text style={styles.text}>{mes.name}</Text>
            </View>
          );
        })}
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    margin: 20,
  }
});


export default month;
