import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { fontBold } from "../utils/commonStyle";

// Be careful, this button works only in a background with a 100% height.
// Pay attention about container style

export const CustomButton = ({ text = '', onPress = () => { } }) => {
    var [isPress, setIsPress] = useState(false);

    const touchProps = {
        activeOpacity: 1,
        underlayColor: 'white',
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress,
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight
                {...touchProps}
            >
                <Text style={styles.textButton}>
                    {text}
                </Text>
            </TouchableHighlight>
        </View >
    )
}

const styles = StyleSheet.create({
    textButton: {
        ...fontBold,
        fontSize: 22,
    },
    container: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    btnNormal: {
        borderRadius: 10,
    },
    btnPress: {
        borderColor: 'white',
        borderRadius: 10,
    }
})