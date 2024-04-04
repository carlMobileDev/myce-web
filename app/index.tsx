import Colors from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

const LandingPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/images/logo.png')} style={{ width: 50, height: 50 }} />
                    <View >
                        <Text style={styles.logoText}>My CE</Text>
                    </View>
                </View>
                <View style={styles.optionsRow}>
                    <View>
                        <Text style={styles.pageText}>Home</Text>
                    </View>
                    <View>
                        <Text style={styles.pageText}>About</Text>
                    </View>
                    <View>
                        <Text style={styles.pageText}>Contact</Text>
                    </View>
                </View>
                <View style={styles.signInButton}>
                    <Text style={styles.signInText}>Log In</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={[styles.mainTitle,]}>Your Ultimate Continuing Education Companion</Text>
                    <Text style={styles.mainSubtitle}>Are you a licensed professional looking to streamline your continuing education journey? Look no further than My CE – the all-in-one mobile app designed to simplify the way you manage your continuing education credits.</Text>
                </View>
                <View style={{ height: 569 }}></View>
                <View style={styles.content}>
                    <Text style={[styles.title,]}>Effortless Tracking</Text>
                    <Text style={styles.subtitle}>Say goodbye to cumbersome spreadsheets and manual tracking. With My CE, keeping tabs on your continuing education credits has never been easier. Our intuitive interface allows you to input your courses and certifications with just a few taps, so you can focus on what matters most – advancing your career.</Text>
                </View>
                <View style={{ height: 569 }}></View>
                <View style={[styles.content, styles.alignRight]}>
                    <Text style={styles.title}>Secure Certificate Storage</Text>
                    <Text style={styles.subtitle}>No more lost or misplaced certificates! My CE offers secure digital storage for all your credentials, allowing you to access them anytime, anywhere. Impress potential employers or clients with your easily accessible professional achievements.</Text>
                </View>
                <View style={{ height: 172 }}></View>
                <View style={{ padding: 60, backgroundColor: "#E7ECFF" }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>@c</Text>
                        <Text>
                            MyCE
                        </Text>
                        <Text>Log In</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    alignRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
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
        borderRadius: 2,
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
    content: {
        flex: 1,
        paddingTop: 240,
        paddingHorizontal: 160
    },
    mainTitle: {
        fontSize: 50,
        width: 500,
        color: '#091133',
        marginBottom: 16,
        lineHeight: 66
    },
    mainSubtitle: {
        fontSize: 18,
        color: '#505F98',
        width: 520,
        fontFamily: 'Roboto_Reg',
        lineHeight: 30
    },
    title: {
        fontSize: 36,
        width: 517,
        color: '#091133',
        marginBottom: 12,
        lineHeight: 48
    },
    subtitle: {
        fontSize: 16,
        color: '#6F7CB2',
        width: 517,
        fontFamily: 'Roboto_Reg',
        marginBottom: 10,
        lineHeight: 26
    },
});

export default LandingPage;