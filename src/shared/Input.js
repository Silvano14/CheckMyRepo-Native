import { StyleSheet, TextInput, View } from "react-native"

export const Input = ({ placeHolder = '', onChange = () => { } }) => {
    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                onChangeText={onChange}
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