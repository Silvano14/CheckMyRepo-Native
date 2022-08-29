import { StyleSheet } from "react-native";

export const space = 30;
export const fontSizeBody = 40;

export const textFont = StyleSheet.create({
    fontFamily: 'OpenSans',
})

export const errorView = StyleSheet.create({
    container: {
        paddingLeft: space,
        paddingRight: space,
        paddingTop: 60,
        height: '100%',
        backgroundColor: '#fca9b7',
    }
})

export const container = StyleSheet.create({
    paddingLeft: space,
    paddingRight: space,
    paddingTop: 60,
    height: '100%',
})

export const fontBold = StyleSheet.create({
    ...textFont,
    fontWeight: 'bold'
})