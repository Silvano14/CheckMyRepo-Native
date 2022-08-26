import { Pressable, StyleSheet, Text, View } from "react-native"
import { textFont } from "./commonStyle"

export const Button = ({ text = '', onPress = () => { } }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Text style={styles.textButton}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    textButton: {
        ...textFont,
        fontWeight: 'bold',
        fontSize: 20,
    },
    container: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
})