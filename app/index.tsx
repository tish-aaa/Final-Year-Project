import MyButton from "@/app-example/components/MyButton";
import { StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const onLogin = () => {
    router.navigate("/login")
  };
  const onSignup = () => {
    router.navigate("/signup")
  };
  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.titleText}>Hello there, Welcome Back!</Text>
      <MyButton title={"Login"} onPress={onLogin}/>
      <Text style={styles.text}>Not signed up yet? Click below! </Text>
      <MyButton title={"SignUp"} onPress={onSignup}/>
    </View>
  );
}


// STYLING

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 20,
}
});
