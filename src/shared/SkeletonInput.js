import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { paths } from "../App"
import { Button } from "./shared/Button"
import { checkData } from "./shared/checkData"
import { textFont } from "./shared/commonStyle"
import { Input } from "./shared/Input"

const SkeletonInput = ({ titleHeader, onChangeValue = () => { }, buttonText = '' }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate(paths.home, { name: paths.home })}>
                    <Image source={require('./assets/images/backArrow.png')} />
                </Pressable>
                <Text style={styles.text}>
                    {titleHeader}
                </Text>
            </View>
            <Input
                onChangeText={user.setUser}
                placeHolder={'Type your github username'}
                value={user.value}
            />
            <Button
                text="CHECK"
                onPress={() => checkData(user.value)
                    ? navigation.navigate(paths.repository, { name: paths.repository })
                    : navigation.navigate(paths.badData, { name: paths.badData })}
            />
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