import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={()=> alert('Login Success')}>
        <Text style={styles.loginButtonTxt}>Login</Text>
      </TouchableOpacity>

      {/* Sign up link */}
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    width: '95%',
    alignSelf: 'center'
  },
  loginButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center'
  },
  loginButtonTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  signupContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signupText: {
    color: '#ff6347',
    fontWeight: '600'
  }
});
