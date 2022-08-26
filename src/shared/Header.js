import { textFont } from './commonStyle'
import { View, Pressable, Image, StyleSheet, Text } from 'react-native'
import { paths } from './routerUtils'

export const Header = ({ title = '', navigBackArrow = paths.home }) =>
    <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate(navigBackArrow, { name: navigBackArrow })}>
            <Image source={require('../assets/images/backArrow.png')} />
        </Pressable>
        <Text style={styles.text}>
            {title}
        </Text>
    </View>

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        paddingLeft: 30,
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