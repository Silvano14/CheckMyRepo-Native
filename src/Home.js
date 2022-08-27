import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "./shared/components/CustomButton";
import { fontSizeBody, leftSpace, textFont } from "./shared/utils/commonStyle";
import { paths } from "./shared/utils/router";

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set the repository address</Text>
            <Text style={styles.subTitle}>github.com</Text>
            <View style={styles.containerText}>
                <Text style={{
                    fontSize: fontSizeBody,
                }}>/</Text>
                <Text style={styles.trasparent}>user</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={{
                    fontSize: fontSizeBody,
                }}>/</Text>
                <Text style={styles.trasparent}>repo</Text>
            </View>
            <CustomButton
                text="CHECK"
                onPress={() => navigation.navigate(paths.user, { name: paths.user })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: leftSpace,
        paddingTop: 40,
        height: '100%',
    },
    title: {
        ...textFont,
        fontWeight: 'bold',
        paddingBottom: 30,
        fontSize: 20,
    },
    subTitle: {
        ...textFont,
        fontSize: fontSizeBody,
    },
    containerText: {
        fontSize: fontSizeBody,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    trasparent: {
        ...textFont,
        fontSize: fontSizeBody,
        color: 'gray',
    },
})