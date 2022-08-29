import { Pressable, StyleSheet, Text, View } from "react-native"
import { fontBold, textFont } from "../utils/commonStyle"

// Be careful, this button works only in a background with a 100% height
// check the container style

export const CustomButton = ({ text = '', onPress = () => { } }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : 'trasparent'
                    },
                    styles.wrapperCustom
                ]}>
                <Text style={styles.textButton}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    textButton: {
        ...fontBold,
        fontSize: 22,
    },
    container: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
})