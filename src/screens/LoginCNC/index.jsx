import React from 'react'

import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './styles';
import logo from '../../assets/logo.png'

export default function LoginCNC() {

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>SEU EMAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    //value={email}
                    //onChangeText={setEmail}
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    //value={techs}
                    //onChangeText={setTechs}
                />
                <TouchableOpacity
                    //onPress={handleSubmit}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
