import { StyleSheet, TextInput, View } from "react-native"

export const Input = ({ placeHolder = '', onChangeText = () => { } }) => {
    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={placeHolder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        // marginTop: 40,
    },
    input: {
        borderBottomWidth: 3,
    }
})