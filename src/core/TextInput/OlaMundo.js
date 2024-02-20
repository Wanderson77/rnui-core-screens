import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

const OlaMundo = () => {

  const [nome, setNomme] = useState('React Native');
  const [idade, setIdade] = useState(20);

  const handleNomeChange = val => {};
  const handleIdadeChange = val => {};

  return (
    <View style={styles.container}>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <View>
        <Text>Entrar nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNomeChange}
        />
        <Text>Entrar idade</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={handleIdadeChange}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
});

export default olaMundo;
