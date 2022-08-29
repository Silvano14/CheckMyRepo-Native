import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../shared/components/CustomButton";
import { TextHeader } from "../shared/components/TextHeader";
import { errorView, fontBold, fontSizeBody, font } from "../shared/utils/commonStyle";
import { paths } from "../shared/utils/router";

export const BadData = ({ navigation, route }) => {
    const { pathError = paths.user } = route.params;

    return (
        <View style={errorView.container}>
            <TextHeader />
            <View style={styles.containerText}>
                {pathError === paths.user
                    && <>
                        <Text style={{ fontSize: fontSizeBody, }}>/</Text>
                        <Text style={styles.trasparent}>badUser</Text>
                    </>
                }
                {pathError === paths.repository
                    && <>
                        <Text style={{ fontSize: fontSizeBody, }}>/</Text>
                        <Text style={styles.trasparent}>badRepo</Text>
                    </>
                }
            </View>
            <Text style={styles.informationText}>
                Check your
                <Text style={fontBold}>
                    {pathError === paths.user ? ' username ' : ' repository '}
                </Text>
                {pathError === paths.repository && 'name'}
            </Text>
            <CustomButton
                text="CHECK"
                onPress={() => navigation.navigate(pathError)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerText: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    trasparent: {
        ...font,
        fontSize: fontSizeBody,
        color: 'gray',
    },
    informationText: {
        ...font,
        fontSize: 25,
        paddingTop: 10,
    }
})