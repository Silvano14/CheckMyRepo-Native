import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { DataStore } from "./shared/utils/context"
import { textFont } from "./shared/utils/commonStyle"
import { CustomButton } from "./shared/components/CustomButton"
import { Header } from "./shared/components/Header"
import { Input } from "./shared/components/Input"
import { paths } from "./shared/utils/router"

export const Repository = ({ navigation }) => {
    const { repository, user } = useContext(DataStore)

    const getPathByData = () => {
        if (!user.value)
            return paths.user

        if (!repository.value)
            return paths.badData

        fetch(`https://github.com/${user.value}/${repository.value}`)
            .then((e) => console.log('then', e))
            .catch((e) => console.log('catch', e))
        return paths.badData
    }

    return (
        <View style={styles.container}>
            <Header
                navigBackArrow={paths.user}
                navigation={navigation}
                title={'REPOSITORY'}
            />
            <Input
                onChangeText={repository.setRepository}
                placeHolder={'Type your repository name'}
                value={repository.value}
            />
            <CustomButton
                text="DONE"
                onPress={() => navigation.navigate(getPathByData(), { name: getPathByData() })}
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