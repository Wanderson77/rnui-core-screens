import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native';

const IsEmpty = () => {
  const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    //Check for the Email TextInput
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={
            (value) => setTextInputName(value)
          }
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={
            (value) => setTextInputEmail(value)
          }
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <View style={{marginTop: 15}}>
          <Button
            title="Submit"
            onPress={checkTextInput}
            color="#606070"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});

export default IsEmpty;