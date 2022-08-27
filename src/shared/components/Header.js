import { leftSpace, textFont } from '../utils/commonStyle'
import { View, Pressable, Image, StyleSheet, Text } from 'react-native'
import { paths } from '../utils/router'

export const Header = ({ title = '', navigBackArrow = paths.home, navigation = {} }) =>
    <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate(navigBackArrow, { name: navigBackArrow })}>
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