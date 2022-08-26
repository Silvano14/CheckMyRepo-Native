import { Pressable, StyleSheet, Text, View } from "react-native";
import { textFont } from "./shared/commonStyle";

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set the repository address</Text>
            <Text style={styles.subTitle}>github.com</Text>
            <View style={styles.containerText}>
                <Text style={{
                    fontSize: fontSizeBody,
                }}>/</Text>
                <Pressable
                    onPress={() => navigation.navigate('User', { name: 'User' })}>
                    <Text style={styles.trasparent}>user</Text>
                </Pressable>
            </View>
            <View style={styles.containerText}>
                <Text style={{
                    fontSize: fontSizeBody,
                }}>/</Text>
                <Pressable>
                    <Text style={styles.trasparent}>repo</Text>
                </Pressable>
            </View>
        </View>
    )
}

const leftSpace = 30;
const fontSizeBody = 40;

const styles = StyleSheet.create({
    container: {
        paddingLeft: leftSpace,
        paddingTop: 40,
    },
    title: {
        ...textFont.font,
        fontWeight: 'bold',
        paddingBottom: 30,
        fontSize: 20,
    },
    subTitle: {
        ...textFont.font,
        fontSize: fontSizeBody,
    },
    containerText: {
        fontSize: fontSizeBody,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    trasparent: {
        ...textFont.font,
        fontSize: fontSizeBody,
        color: 'gray',
    },
})