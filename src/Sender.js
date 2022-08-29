import axios from "axios"
import { useContext, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { CustomButton } from "./shared/components/CustomButton"
import { TextHeader } from "./shared/components/TextHeader"
import { container, fontSizeBody, space, font, loader } from "./shared/utils/commonStyle"
import { DataStore } from "./shared/utils/context"
import { paths } from "./shared/utils/router"

export const Sender = ({ navigation }) => {
    const { user, repository } = useContext(DataStore)
    const [showLoader, setShowLoader] = useState(false)

    if (showLoader)
        return (
            <View style={loader}>
                <ActivityIndicator
                    size="large"
                    color='black'
                />
                <Text>Sending data...</Text>
            </View>
        )
    return (
        <View style={styles.container}>
            <TextHeader />
            <View style={styles.containerText}>
                <Text style={styles.textStyle}>/</Text>
                <Text style={styles.trasparent}>rightUser</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textStyle}>/</Text>
                <Text style={styles.trasparent}>rightRepo</Text>
            </View>
            <CustomButton
                text="SEND"
                onPress={async () => {
                    setShowLoader(true)
                    const result = await sendData({
                        repoUrl: `https://github.com/${user.value}/${repository.value}`,
                        sender: user.value
                    })

                    if (result)
                        navigation.navigate(paths.done)
                    else
                        navigation.navigate(paths.badConnection)
                    setShowLoader(false)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...container,
        backgroundColor: '#84f9b9',
    },
    containerText: {
        fontSize: fontSizeBody,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    trasparent: {
        ...font,
        fontSize: fontSizeBody,
        color: 'gray',
    },
    textStyle: {
        fontSize: fontSizeBody,
    }
})


const config = {
    url: 'https://pushmore.io/webhook/TkF1Y6Am5zz4vt3kVmwpxHjN',
    method: "post",
};

const sendData = (
    data = { repoUrl: 'https://github.com/Silvano14/CheckMyRepo', sender: 'Silvano14' },
) =>
    axios({ ...config, data: JSON.stringify(data) })
        .then((e) => {
            // You can get fake response, just to be sure I check the body
            if (e.data !== 'OK' || e.status === 404)
                return false
            else
                return true
        })
        .catch(() => false)

