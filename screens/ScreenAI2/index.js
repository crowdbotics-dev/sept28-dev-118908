import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
        <Text style={styles.title}>Welcome to MyApp</Text>
        <Text style={styles.subtitle}>Please enter your login details below:</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});
export default LoginScreen;