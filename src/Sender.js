import { StyleSheet, Text, View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { TextHeader } from "./shared/components/TextHeader"
import { container, fontSizeBody, space, textFont } from "./shared/utils/commonStyle"
import { paths } from "./shared/utils/router"

export const Sender = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TextHeader />
            <View style={styles.containerText}>
                <Text style={styles.textStyle}>/</Text>
                <Text style={styles.trasparent}>rightUser</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textStyle}>/</Text>
                <Text style={styles.trasparent}>rightRepo</Text>
            </View>
            <CustomButton
                text="SEND"
                onPress={() => navigation.navigate(paths.done)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...container,
        backgroundColor: '#84f9b9',
    },
    containerText: {
        fontSize: fontSizeBody,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    trasparent: {
        ...textFont,
        fontSize: fontSizeBody,
        color: 'gray',
    },
    textStyle: {
        fontSize: fontSizeBody,
    }
})