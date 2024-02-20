//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {
  View,
  Text,
  SafeAreaView,
  TextInput
} from 'react-native';

import styles from './styles';

const App = () => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Insert any text in below input</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'UserName'}
          style={styles.input}
        />
        <Text style={{color: 'blue'}}>{userName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;