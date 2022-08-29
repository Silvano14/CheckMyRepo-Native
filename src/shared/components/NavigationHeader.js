import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { leftSpace, font } from '../utils/commonStyle'

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
        paddingLeft: leftSpace,
        paddingBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        ...font,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 20
    }
})