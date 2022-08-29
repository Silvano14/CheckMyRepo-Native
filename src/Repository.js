import { useContext, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { Input } from "./shared/components/Input"
import { NavigationHeader } from "./shared/components/NavigationHeader"
import { container } from "./shared/utils/commonStyle"
import { DataStore } from "./shared/utils/context"
import { paths } from "./shared/utils/router"
import axios from "axios"

export const Repository = ({ navigation }) => {
    const { repository, user } = useContext(DataStore)
    const [showLoader, setShowLoader] = useState(false)

    const navigateByData = async () => {
        if (!repository.value) {
            navigation.navigate(paths.badData, { pathError: paths.repository })
            return
        }
        setShowLoader(true)

        const origin = `https://github.com`
        let error = false
        // I don't like it so much, but for me is the best way to be sure which data is wrong
        await axios.get(origin)
            .then(() => { })
            .catch(() => { navigation.navigate(paths.badConnection); error = true })

        // If you don't stop the flow the next error overwrite the current page  
        if (error) {
            setShowLoader(false)
            return
        }

        await axios.get(`${origin}/${user.value}`)
            .then(() => { })
            .catch(() => {
                navigation.navigate(paths.badData, {
                    pathError: paths.user,
                })
                error = true
            })

        // If you don't stop the flow the next error overwrite all  
        if (error) {
            setShowLoader(false)
            return
        }

        await axios.get(`${origin}/${user.value}/${repository.value}`)
            .then(() => navigation.navigate(paths.sender))
            .catch(() => navigation.navigate(paths.badData, { pathError: paths.repository }))
            .finally(() => setShowLoader(false))
    }

    if (showLoader)
        return (
            <View style={styles.loader}>
                <ActivityIndicator
                    size="large"
                    color='black'
                />
                <Text>Checking data...</Text>
            </View>
        )

    return (
        <View style={container}>
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
                onPress={navigateByData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})