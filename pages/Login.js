import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Text>Login do usuário</Text>
      <TextInput
        autoCompleteType="off"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={e => setEmail(e)}
        style={styles.textInput}
      />
      <TextInput
        autoCompleteType="off"
        autoCapitalize="none"
        keyboardType="default"
        value={pass}
        onChangeText={e => setPass(e)}
        style={styles.textInput}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    alignSelf: 'stretch',
    margin: 10,
    borderColor: '#efefef',
    borderWidth: 1,
    height: 50,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1.6,
    shadowRadius: 20,
    padding: 15,
    textAlign: 'left'
  }
});

export default Login;
