import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../shared/components/CustomButton";
import { errorView, fontSizeBody, textFont } from "../shared/utils/commonStyle";
import { DataStore } from "../shared/utils/context";
import { paths } from "../shared/utils/router";

export const BadData = ({ navigation }) => {
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
            <Text style={styles.title}>Set the repository address</Text>
            <Text style={styles.subTitle}>github.com</Text>
            <View style={styles.containerText}>
                {targetButton === paths.user
                    && <>
                        <Text style={{
                            fontSize: fontSizeBody,
                        }}>/</Text>
                        <Text style={styles.trasparent}>badUser</Text>
                    </>
                }
                {targetButton === paths.repository
                    && <>
                        <Text style={{
                            fontSize: fontSizeBody,
                        }}>/</Text>
                        <Text style={styles.trasparent}>badRepo</Text>
                    </>
                }
            </View>
            <Text style={styles.information}>Check your
                <Text style={{ fontWeight: 'bold' }}>{targetButton === paths.user ? ' username ' : ' repository '}</Text>
                {targetButton === paths.repository && 'name'}
            </Text>
            <CustomButton
                text="CHECK"
                onPress={() => navigation.navigate(targetButton, { name: targetButton })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        ...textFont,
        fontWeight: 'bold',
        paddingBottom: 30,
        fontSize: 25,
    },
    subTitle: {
        ...textFont,
        fontSize: fontSizeBody,
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingVertical: 10,
    },
    trasparent: {
        ...textFont,
        fontSize: fontSizeBody,
        color: 'gray',
    },
    information: {
        ...textFont,
        fontSize: 25
    }
})