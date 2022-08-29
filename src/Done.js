import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { container, fontBold } from "./shared/utils/commonStyle"
import { DataStore } from "./shared/utils/context"
import { paths } from "./shared/utils/router"

export const Done = ({ navigation }) => {
    const { repository, user } = useContext(DataStore)

    return (
        <View style={container}>
            <Text style={styles.title}>
                All done!
                Repository sent.
            </Text>
            <CustomButton
                text="COOL"
                onPress={() => {
                    //Cleaning data 
                    repository.setRepository('')
                    user.setUser('')

                    navigation.navigate(paths.home)
                }}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    title: {
        ...fontBold,
        fontSize: 50,
        textAlign: 'center',
    }
})