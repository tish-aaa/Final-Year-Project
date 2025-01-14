import { View, Text, Image, TextInputComponent } from "react-native";
import MyButton from "@/app-example/components/MyButton";
import { Link, useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
        source={require("@/assets/images/login_img.jpeg")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />
      <GestureHandlerRootView
        style={{ flex: 1, padding: 20, gap: 20, alignItems: "center" }}
      >
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
        />
        <MyButton title={"Login"} onPress={onLogin} />
      </GestureHandlerRootView>
    </View>
  );
};

export default Login;
