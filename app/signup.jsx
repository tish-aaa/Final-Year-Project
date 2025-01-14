import { View, Text, Image, TextInput, Alert } from 'react-native';
import MyButton from "../components/myButton";
import { useState } from 'react';
import { Link, useRouter } from "expo-router";
import firebase from '../firebaseConfig'; // Firebase initialized here

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const onSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match", 'Please make sure both passwords are the same.');
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      router.navigate("/"); // Navigate to main page after successful sign up
    } catch (error) {
      Alert.alert('Sign Up Error', error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/signup_img.jpg")}
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
        <TextInput
          placeholder="Re-Enter Your Password"
          secureTextEntry
          style={{ borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 5, width: "100%" }}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <MyButton title="Register Now" onPress={onSignUp} />
      </View>
    </View>
  );
};

export default SignUp;
