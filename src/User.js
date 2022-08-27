import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { textFont } from "./shared/utils/commonStyle"
import { DataStore } from "./shared/utils/context"
import { Header } from "./shared/components/Header"
import { Input } from "./shared/components/Input"
import { paths } from "./shared/utils/router"
import { CustomButton } from "./shared/components/CustomButton"

export const User = ({ navigation }) => {
    const { user } = useContext(DataStore)

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={'USER'} />
            <Input
                onChangeText={user.setUser}
                placeHolder={'Type your github username'}
                value={user.value}
            />
            <CustomButton
                text="CHECK"
                onPress={() => user.value
                    ? navigation.navigate(paths.repository, { name: paths.repository })
                    : navigation.navigate(paths.badData, { name: paths.badData })
                }
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