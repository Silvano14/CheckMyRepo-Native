import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { Input } from "./shared/components/Input"
import { NavigationHeader } from "./shared/components/NavigationHeader"
import { space } from "./shared/utils/commonStyle"
import { DataStore } from "./shared/utils/context"
import { paths } from "./shared/utils/router"

export const Repository = ({ navigation }) => {
    const { repository, user } = useContext(DataStore)

    const navigateByData = () => {
        if (!repository.value) {
            navigation.navigate(paths.badData, { name: paths.badData, pathError: paths.repository })
            return
        }

        const origin = `https://github.com`
        // I know, it's dangerous. But it's the best way to make a real control if the problem is user or repository
        // Shoulb be better if we put a loader when user press check button
        fetch(origin)
            .then((e) => {
                if (e.status === 404) {
                    navigation.navigate(paths.badConnection)
                } else
                    fetch(`${origin}/${user.value}`)
                        .then((e) => {
                            if (e.status === 404)
                                navigation.navigate(paths.badData, {
                                    name: paths.badData,
                                    pathError: paths.user,
                                })
                            else
                                fetch(`${origin}/${user.value}/${repository.value}`)
                                    .then((e) => {
                                        if (e.status === 404)
                                            navigation.navigate(paths.badData, {
                                                name: paths.badData,
                                                pathError: paths.repository,
                                            })
                                        else
                                            navigation.navigate(paths.sender)
                                    })
                                    .catch((e) => console.log('catch', e))
                        })
                        .catch((e) => console.log('catch', e))
            })
            .catch((e) => console.log('catch', e))
    }

    return (
        <View style={styles.container}>
            <NavigationHeader
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
                onPress={() => navigateByData()}
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