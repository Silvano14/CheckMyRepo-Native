import { Pressable, StyleSheet, Text, View } from "react-native"
import { textFont } from "../utils/commonStyle"

// Be careful, this button works only in a background with a 100% height
// check the container style

export const CustomButton = ({ text = '', onPress = () => { } }) => {
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