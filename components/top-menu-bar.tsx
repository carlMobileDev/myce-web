import Colors from "@/constants/Colors"
import { Link } from "expo-router"
import { Image, StyleSheet, Text, View } from "react-native"

const TopMenuBar: React.FC = () => {
    return <View style={styles.topBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/images/logo.png')} style={{ width: 50, height: 50 }} />
            <View >
                <Text style={styles.logoText}>My CE</Text>
            </View>
        </View>
        <View style={styles.optionsRow}>
            <View>
                <Link href='/landing/' children=
                    {
                        <Text style={styles.pageText}>Home</Text>
                    } />
            </View>
            <View>
                <Link href='/terms/' children=
                    {
                        <Text style={styles.pageText}>About</Text>
                    } />
            </View>
            <View>
                <Text style={styles.pageText}>Contact</Text>
            </View>
        </View>
        <View style={styles.signInButton}>
            <Text style={styles.signInText}>Log In</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    topBar: {
        height: 50,
        paddingHorizontal: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    logoText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#37447E',
        paddingLeft: 16
    },
    optionsRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signInButton: {
        width: 160,
        padding: 8,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: Colors.primary.text,
        color: 'white',
    },
    signInText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Roboto'
    },
    pageText: {
        fontSize: 14,
        paddingHorizontal: 40,
        color: '#505F98'
    },
})
export default TopMenuBar;