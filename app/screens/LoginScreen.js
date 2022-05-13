import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";


import colors from "../config/colors";

function LoginScreen({navigation}) {
  return (

    
    <ImageBackground
      style={styles.backgound}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.logoText}>Park.Davidson</Text>
      </View>
      <TextInput
        placeholder="Email:"
        placeholderTextColor={colors.secondary}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Password:"
        secureTextEntry
        placeholderTextColor={colors.secondary}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Map Screen')}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Map Screen')}
      style={styles.registerButton}>
        
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgound: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    bottom: 250,
    color: colors.secondary,
    backgroundColor: colors.primary,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButton: {
    width: "100%",
    height: 90,
    backgroundColor: colors.primary,
    marginBottom: 10,
  },
  loginText: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 25,
    color: colors.secondary,
  },
  registerText: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 25,
    color: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoText: {
    fontSize: 20,
    position: "absolute",
    top: 170,
    color: "black",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 90,
    backgroundColor: colors.secondary,
  },
});

export default LoginScreen;
