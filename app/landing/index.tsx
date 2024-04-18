import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import TopMenuBar from '@/components/top-menu-bar';
import ContentBlock from '@/components/content-block';
import CustomStack from '@/components/custom-stack';
import StoreButtonRow from '@/components/store-button-row';
import Footer from '@/components/footer';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { textSize } from '@/components/Metrics';


const LandingPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TopMenuBar />
            <ScrollView>
                <CustomStack
                    leftChild={
                        <View style={styles.content}>
                            <Text style={[styles.mainTitle,]}>Your Ultimate Continuing Education Companion</Text>
                            <Text style={styles.mainSubtitle}>Are you a licensed professional looking to streamline your continuing education journey? Look no further than My CE – the all-in-one mobile app designed to simplify the way you manage your continuing education credits.</Text>
                            <View style={{ height: 40 }}></View>
                            <StoreButtonRow />
                        </View>
                    }
                    rightChild={<Image source={require('../../assets/images/school-laptop.png')}
                        style={{ width: widthPercentageToDP(80), height: heightPercentageToDP(60) }} />} />

                <View style={{ height: 169, }}></View>
                <CustomStack
                    leftChild={
                        <ContentBlock title='Effortless Tracking' details='Say goodbye to cumbersome spreadsheets and manual tracking. With My CE, keeping tabs on your continuing education credits has never been easier. Our intuitive interface allows you to input your courses and certifications with just a few taps, so you can focus on what matters most – advancing your career.' />
                    }
                    rightChild={
                        <Image source={require('../../assets/images/Cropped.png')} style={{ borderRadius: 16, width: 400, height: 600 }} />
                    } />
                <View style={{ height: 169 }}></View>
                <View style={styles.alignCenter}>
                    <ContentBlock title='Secure Certificate Storage' details='No more lost or misplaced certificates! My CE offers secure digital storage for all your credentials, allowing you to access them anytime, anywhere. Impress potential employers or clients with your easily accessible professional achievements.' />
                </View>
                <View style={{ height: 172 }}></View>
                <Footer />
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
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainTitle: {
        fontSize: textSize(4.75, 50),
        width: 500,
        color: '#091133',
        marginBottom: 16,
        lineHeight: 66
    },
    mainSubtitle: {
        fontSize: textSize(2, 18),
        color: '#505F98',
        width: 520,
        fontFamily: 'Roboto_Reg',
        lineHeight: 30
    },


});

export default LandingPage;