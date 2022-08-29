import { StyleSheet, Text, View } from "react-native"
import { fontBold, fontSizeBody, font } from "../utils/commonStyle"

export const TextHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set the repository address</Text>
            <Text style={styles.subTitle}>github.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    title: {
        ...fontBold,
        paddingBottom: 30,
        fontSize: 25,
    },
    subTitle: {
        ...font,
        fontSize: fontSizeBody,
    },
})