import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

const IsEnableEx = () => {
  const [isEditable, setIsEditable] = useState(false);

  const updateState = () => {
    //Handler to enable of disable TextInput
    //Make TextInput Enable/Disable
    setIsEditable(!isEditable);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder={
            isEditable ?
            'Please Insert value' :
            'Input Disabled'
          }
          underlineColorAndroid="transparent"
          style={[
            styles.textInputStyle,
            {
              borderColor: isEditable ?
              'black' : 'red',
              backgroundColor: isEditable ?
              'white' : '#d8d8d8',
            },
          ]}
          //To make TextInput enable/disable
          editable={isEditable}
        />
        <Button
          title={
            isEditable
              ? 'Click to Disable TextInput'
              : 'Click to Enable TextInput'
          }
          onPress={updateState}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default IsEnableEx;