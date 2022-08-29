import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../shared/components/CustomButton";
import { TextHeader } from "../shared/components/TextHeader";
import { errorView, fontBold, fontSizeBody, font } from "../shared/utils/commonStyle";
import { DataStore } from "../shared/utils/context";
import { paths } from "../shared/utils/router";

export const BadConnection = ({ navigation }) => {
    const { user } = useContext(DataStore)
    const [targetButton, setTargetButton] = useState()

    useEffect(() => {
        if (!user.value)
            setTargetButton(paths.user)
        else
            setTargetButton(paths.repository)
    }, [user.value])

    return (
        <View style={errorView.container}>
            <TextHeader />
            <View style={styles.containerText}>
                <View style={styles.rowAlignment}>
                    <Text style={{ fontSize: fontSizeBody, }}>/</Text>
                    <Text style={styles.trasparent}>rightUser</Text>
                </View>
                <View style={styles.rowAlignment}>
                    <Text style={{ fontSize: fontSizeBody, }}>/</Text>
                    <Text style={styles.trasparent}>rightRepo</Text>
                </View>
            </View>
            <Text style={styles.informationText}>Check your
                <Text style={fontBold}> internet connection</Text>
            </Text>
            <CustomButton
                text="CHECK"
                onPress={() => navigation.navigate(targetButton)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerText: {
        paddingVertical: 10,
    },
    rowAlignment: {
        flexDirection: 'row',
    },
    trasparent: {
        ...font,
        fontSize: fontSizeBody,
        color: 'gray',
    },
    informationText: {
        ...font,
        fontSize: 25
    },
    test: {
        ...fontBold,
        fontSize: 25,
    }
})