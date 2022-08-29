import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "./shared/components/CustomButton";
import { TextHeader } from "./shared/components/TextHeader";
import { container, fontSizeBody, font } from "./shared/utils/commonStyle";
import { paths } from "./shared/utils/router";

export const Home = ({ navigation }) => {
    return (
        <View style={container}>
            <TextHeader />
            <View style={styles.containerText}>
                <Text style={styles.textStyle}>/</Text>
                <Text style={styles.trasparent}>user</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textStyle}>/</Text>
                <Text style={styles.trasparent}>repo</Text>
            </View>
            <CustomButton
                text="CHECK"
                onPress={() => navigation.navigate(paths.user)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerText: {
        fontSize: fontSizeBody,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    trasparent: {
        ...font,
        fontSize: fontSizeBody,
        color: 'gray',
    },
    textStyle: {
        fontSize: fontSizeBody,
    }
})