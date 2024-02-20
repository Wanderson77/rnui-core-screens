import React from 'react';
import { View, TextInput } from 'react-native';

export function EventoExemplo() {
  return (
    <div className='App'>
      <View>
        <TextInput 
          onChangeText={text => console.log(text)}
          onFocus={event => console.log(event)}
        />
      </View>
    </div>
  );
}