import { Pressable, StyleSheet, Text, View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { textFont } from "./shared/utils/commonStyle";

export const BadData = ({ navigate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set the repository address</Text>
            <Text style={styles.subTitle}>github.com</Text>
            <View style={styles.containerText}>
                <Text style={{
                    fontSize: fontSizeBody,
                }}>/</Text>
                <Pressable
                    onPress={() => navigation.navigate(paths.user, { name: paths.user })}
                >
                    <Text style={styles.trasparent}>user</Text>
                </Pressable>
            </View>
            <View style={styles.containerText}>
                <Text style={{
                    fontSize: fontSizeBody,
                }}>/</Text>
                <Pressable
                    onPress={() => navigation.navigate(paths.repository, { name: paths.repository })}
                >
                    <Text style={styles.trasparent}>repo</Text>
                </Pressable>
            </View>
            <CustomButton
                text="CHECK"
                onPress={() => navigation.navigate(paths.user, { name: paths.user })}
            />
        </View>
    )
}

const leftSpace = 30;
const fontSizeBody = 40;

const styles = StyleSheet.create({
    container: {
        paddingLeft: leftSpace,
        paddingTop: 40,
        height: '100%',
        backgroundColor: '#fca9b7',
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