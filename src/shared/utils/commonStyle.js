import { StyleSheet } from "react-native";

export const leftSpace = 30;
export const fontSizeBody = 40;

export const textFont = StyleSheet.create({
    fontFamily: 'OpenSans',
})

export const errorView = StyleSheet.create({
    container: {
        paddingLeft: leftSpace,
        paddingTop: 40,
        height: '100%',
        backgroundColor: '#fca9b7',
    }
})