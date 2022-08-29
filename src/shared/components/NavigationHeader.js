import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { leftSpace, textFont } from '../utils/commonStyle'

export const NavigationHeader = ({ title = '', navigation = {} }) =>
    <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/backArrow.png')} />
        </Pressable>
        <Text style={styles.text}>
            {title}
        </Text>
    </View>

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        paddingLeft: leftSpace,
        paddingBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        ...textFont,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 20
    }
})