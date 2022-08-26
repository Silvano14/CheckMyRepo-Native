import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { DataStore, paths } from "../App"
import { checkData } from "./shared/checkData"
import { textFont } from "./shared/commonStyle"
import { CustomButton } from "./shared/CustomButton"
import { Header } from "./shared/Header"
import { Input } from "./shared/Input"

export const User = ({ navigation }) => {
    const { user } = useContext(DataStore)

    return (
        <View style={styles.container}>
            <Header title={'USER'} />
            <Input
                onChangeText={user.setUser}
                placeHolder={'Type your github username'}
                value={user.value}
            />
            <CustomButton
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