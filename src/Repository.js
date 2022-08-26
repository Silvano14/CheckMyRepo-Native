import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { DataStore, paths } from "../App"
import { checkData } from "./shared/checkData"
import { textFont } from "./shared/commonStyle"
import { CustomButton } from "./shared/CustomButton"
import { Header } from "./shared/Header"
import { Input } from "./shared/Input"

export const Repository = ({ navigation }) => {
    const { Repository } = useContext(DataStore)

    return (
        <View style={styles.container}>
            <Header title={'REPOSITORY'} />
            <Input
                onChangeText={Repository.setRepository}
                placeHolder={'Type your repository name'}
                value={Repository.value}
            />
            <CustomButton
                text="CHECK"
                onPress={() => checkData(user.value)
                    ? navigation.navigate(paths.sender, { name: paths.sender })
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