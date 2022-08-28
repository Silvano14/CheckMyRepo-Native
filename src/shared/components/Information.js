import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../shared/components/CustomButton";
import { errorView, fontSizeBody, textFont } from "../shared/utils/commonStyle";
import { DataStore } from "../shared/utils/context";
import { paths } from "../shared/utils/router";
import { fontBold } from "../utils/commonStyle";

export const Information = ({ firstText, secondText }) => {
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
                        <Text style={fontBold}>/</Text>
                        <Text style={styles.trasparent}>badRepo</Text>
                    </>
                }
            </View>
            <Text style={styles.information}>Check your
                <Text style={fontBold}>
                    {targetButton === paths.user ? ' username ' : ' repository '}
                </Text>
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
        ...fontBold,
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