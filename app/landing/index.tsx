import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import TopMenuBar from './top-menu-bar';
import ContentBlock from './content-block';
import CustomStack from './custom-stack';
import { Link } from 'expo-router';
import StoreButtonRow from './store-button-row';


const LandingPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TopMenuBar />
            <ScrollView>
                <CustomStack
                    foregroundChildren={
                        <View style={styles.content}>
                            <Text style={[styles.mainTitle,]}>Your Ultimate Continuing Education Companion</Text>
                            <Text style={styles.mainSubtitle}>Are you a licensed professional looking to streamline your continuing education journey? Look no further than My CE – the all-in-one mobile app designed to simplify the way you manage your continuing education credits.</Text>
                            <View style={{ height: 40 }}></View>
                            <StoreButtonRow color='#fff' />
                        </View>
                    }
                    backgroundChildren={<Image source={require('../../assets/images/school-laptop.png')} style={{ width: 800, height: 600, }} />} />

                <View style={{ height: 169 }}></View>
                <ContentBlock title='Effortless Tracking' details='Say goodbye to cumbersome spreadsheets and manual tracking. With My CE, keeping tabs on your continuing education credits has never been easier. Our intuitive interface allows you to input your courses and certifications with just a few taps, so you can focus on what matters most – advancing your career.' />
                <View style={{ height: 169 }}></View>
                <View style={styles.alignRight}>
                    <ContentBlock title='Secure Certificate Storage' details='No more lost or misplaced certificates! My CE offers secure digital storage for all your credentials, allowing you to access them anytime, anywhere. Impress potential employers or clients with your easily accessible professional achievements.' />
                </View>
                <View style={{ height: 172 }}></View>
                <View style={{ padding: 60, backgroundColor: "#E7ECFF" }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>@c</Text>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text>
                                MyCE
                            </Text>
                            <StoreButtonRow color='#E7ECFF' />
                        </View>
                        <Text>Log In</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingTop: 140,
        paddingLeft: 100
    },
    alignRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
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

});

export default LandingPage;