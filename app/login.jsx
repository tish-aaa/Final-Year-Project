import { View, Text, Image, TextInput } from 'react-native'
import MyButton from "../components/myButton";
import { Link, useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const onLogin = () => {
    router.navigate("/");
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={require("../assets/images/login_img.jpeg")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />
      <View style={{ flex: 1, padding: 20, gap: 20, alignItems: "center" }}>
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 5,
            width: "100%",
          }}
          onChangeText={(e) => console.log(e)}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 5,
            width: "100%",
          }}
          onChangeText={(e) => console.log(e)}
        />
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;
