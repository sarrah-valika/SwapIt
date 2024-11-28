import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Ensure this is installed

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      alert("Please fill in both username and password!");
    } else {
      alert("Login successful!");
      navigation.navigate("SkillRecommendationPage"); // Navigate to the next screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.png")} // Replace with your logo file path
            style={styles.logo}
          />
          {/* <Text style={styles.logoText}>SwapIt</Text> */}
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome to SwapIt!</Text>

        {/* Username Input */}
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password Input */}
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign-Up Redirect */}
        <Text style={styles.signUpText}>
          Not a member?{" "}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate("SignUpPage")}
          >
            Sign up now!
          </Text>
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#335c67",
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#335c67",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#335c67",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: "#335c67",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#FFB343",
    width: "90%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    fontSize: 14,
    color: "#6B6B6B",
    marginTop: 15,
  },
  signUpLink: {
    color: "#FFB343",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#335c67",
  },

});

export default LoginPage;
