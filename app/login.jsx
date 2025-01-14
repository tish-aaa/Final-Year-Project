import { View, Text, Image, TextInput, Alert } from 'react-native';
import MyButton from "../components/myButton";
import { Link, useRouter } from "expo-router";
import { useState } from 'react';
import firebase from '../firebaseConfig'; // Firebase initialized here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.navigate("/"); // Navigate to the main page after login
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  const onForgotPassword = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Password Reset', 'Check your email for instructions to reset your password.');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/login_img.jpeg")}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />
      <View style={{ flex: 1, padding: 20, gap: 20, alignItems: "center" }}>
        <TextInput
          placeholder="Enter Your Email"
          style={{ borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 5, width: "100%" }}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Enter Your Password"
          secureTextEntry
          style={{ borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 5, width: "100%" }}
          value={password}
          onChangeText={setPassword}
        />
        <MyButton title="Login" onPress={onLogin} />
        <Link href="#" onPress={onForgotPassword}>
          <Text style={{ color: 'blue', marginTop: 10 }}>Forgot Password?</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
