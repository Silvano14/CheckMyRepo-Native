import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { fontBold, space, textFont } from "./shared/utils/commonStyle"
import { DataStore } from "./shared/utils/context"
import { NavigationHeader } from "./shared/components/NavigationHeader"
import { Input } from "./shared/components/Input"
import { paths } from "./shared/utils/router"
import { CustomButton } from "./shared/components/CustomButton"

export const User = ({ navigation }) => {
    const { user } = useContext(DataStore)

    return (
        <View style={styles.container}>
            <NavigationHeader navigation={navigation} title={'USER'} />
            <Input
                onChangeText={user.setUser}
                placeHolder={'Type your github username'}
                value={user.value}
            />
            <CustomButton
                text="DONE"
                onPress={() => user.value
                    ? navigation.navigate(paths.repository, { name: paths.repository })
                    : navigation.navigate(paths.badData, { name: paths.badData, pathError: paths.user })
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingLeft: space,
        paddingRight: space,
    },
})