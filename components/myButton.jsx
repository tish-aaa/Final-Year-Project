import { StyleSheet, Text, TouchableOpacity } from "react-native"

const myButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8} 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{ title }</Text>
        </TouchableOpacity>
    )
}

export default myButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "teal",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 5,
        width: 200,
    },
    text: {
        fontSize: 16, color: "white", fontWeight: 600, textAlign: "center"
    }
})