import { useContext } from "react"
import { View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { Input } from "./shared/components/Input"
import { NavigationHeader } from "./shared/components/NavigationHeader"
import { container } from "./shared/utils/commonStyle"
import { DataStore } from "./shared/utils/context"
import { paths } from "./shared/utils/router"

export const User = ({ navigation }) => {
    const { user } = useContext(DataStore)

    return (
        <View style={container}>
            <NavigationHeader navigation={navigation} title={'USER'} />
            <Input
                onChangeText={user.setUser}
                placeHolder={'Type your github username'}
                value={user.value}
            />
            <CustomButton
                text="DONE"
                onPress={() => user.value
                    ? navigation.navigate(paths.repository)
                    : navigation.navigate(paths.badData, { pathError: paths.user })
                }
            />
        </View>
    )
}