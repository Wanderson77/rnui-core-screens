import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnotrerereABC0123456789';

export default function Index() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(15);

  function generatePass(){
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/app-logo.png')}
      />
      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height:50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={ (valor) => setSize(valor.toFixed(0)) }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password}>{password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7
  },
  button:{
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }
});
