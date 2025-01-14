import { View, Text, Image, TextInput } from 'react-native'
import MyButton from "../components/myButton";
import { Link, useRouter } from "expo-router";

const SignUp = () => {
    const router = useRouter();
    const onSignUp = () => {
        router.navigate("/");
    }
    return (
        <View
            style={{
                flex: 1
            }}>
            <Image source={require("../assets/images/signup_img.jpg")} style={{
                width: "100%", height: 400,
            }}
                resizeMode='cover'
            />
            <View style={{ flex: 1, padding: 20, gap: 20, alignItems: "center" }}>
                <TextInput placeholder="Enter Your Email"
                    style={{ borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 5, width: "100%" }}
                    onChangeText={(e) => console.log(e)}
                />
                <TextInput placeholder="Enter Your Email"
                    style={{ borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 5, width: "100%" }}
                    onChangeText={(e) => console.log(e)}
                />
                <TextInput placeholder="Enter Your Password"
                    style={{ borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 5, width: "100%" }}
                    onChangeText={(e) => console.log(e)}
                />
                <TextInput placeholder="Re-Enter Your Password"
                    style={{ borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 5, width: "100%" }}
                    onChangeText={(e) => console.log(e)}
                />
                <MyButton title={"Register Now"} onPress={onSignUp} />
            </View>
        </View>
    )
}

export default SignUp;