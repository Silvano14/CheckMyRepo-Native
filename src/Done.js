import { StyleSheet, Text, View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { container, fontBold } from "./shared/utils/commonStyle"
import { paths } from "./shared/utils/router"

export const Done = ({ navigation }) => {
    return (
        <View style={container}>
            <Text style={styles.title}>
                All done!
                Repository sent.
            </Text>
            <CustomButton
                text="COOL"
                onPress={() => navigation.navigate(paths.home)}
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