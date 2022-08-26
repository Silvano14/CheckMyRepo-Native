import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { textFont } from "./shared/commonStyle"
import { Button } from "./shared/Button"
import { Input } from "./shared/Input"

export const User = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Home', { name: 'User' })}>
                    <Image source={require('./assets/images/backArrow.png')} />
                </Pressable>
                <Text style={styles.text}>
                    USER
                </Text>
            </View>
            <Input placeHolder={'Type your github username'} />
            <Button text="CHECK" onPress={() => navigation.navigate('Home', { name: 'User' })} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    header: {
        paddingTop: 30,
        paddingLeft: 30,
        paddingBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        ...textFont,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 20
    }
})