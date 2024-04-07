import TopMenuBar from '@/components/top-menu-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';



const LargeTextComponent: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TopMenuBar />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ paddingTop: 45 }} />
                    <Text style={styles.title}>Terms and Conditions</Text>
                    <Text style={styles.text}>
                        {'\n\n'}
                        <Text style={styles.bold}>END USER LICENSE AGREEMENT (EULA) – WITH IN-APP SUBSCRIPTIONS</Text>
                        {'\n\n'}
                        This End User License Agreement (the “Agreement”) is a legal agreement between you (the “User” or “You”) and carl.mobile.dev (the “Company” or “We”) governing your use of the My CE mobile application (the “App”) and any associated in-app subscriptions.

                        By installing, accessing, or using the App, you agree to be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, you must not install or use the App.                        {'\n\n'}
                        {'\n\n'}
                        <Text style={styles.bold}>1. License Grant</Text>
                        {'\n\n'}
                        Subject to the terms of this Agreement, the Company grants you a limited, non-exclusive, non-transferable, revocable license to install and use the App for your personal, non-commercial use on a mobile device that you own or control. This license includes the use of any in-app subscriptions that you purchase or subscribe to.
                        {'\n\n'}
                        <Text style={styles.bold}>2. In-App Subscriptions and Auto-Renewal</Text>
                        {'\n\n'}
                        The App may offer in-app subscriptions that provide access to additional features, content, or services. By purchasing or subscribing to an in-app subscription, you agree to pay the applicable fees and any taxes imposed on such fees. The subscription will automatically renew at the end of the subscription period, unless you cancel the subscription before the renewal date. The renewal fee will be charged to your account within 24 hours prior to the end of the current subscription period.
                        {'\n\n'}
                        <Text style={styles.bold}>3. Payment and Refunds</Text>
                        {'\n\n'}
                        All payments for in-app subscriptions are processed through the relevant app store (e.g., Apple App Store, Google Play Store). You agree to comply with the terms and conditions of the app store when making payments. The Company does not process or store any payment information provided by you.

                        Refunds for in-app subscriptions are subject to the policies of the app store. The Company is not responsible for processing refunds and cannot guarantee refunds for any in-app subscriptions.
                        {'\n\n'}
                        <Text style={styles.bold}>4. Termination</Text>
                        {'\n\n'}
                        The Company may terminate or suspend your access to the App, including any in-app subscriptions, at any time and for any reason without prior notice. Upon termination, all licenses and rights granted to you under this Agreement will immediately cease.
                        {'\n\n'}
                        <Text style={styles.bold}>5. Disclaimer of Warranty</Text>
                        {'\n\n'}
                        The App and any in-app subscriptions are provided on an “as is” basis, without warranty of any kind, either express or implied. The Company disclaims all warranties, including but not limited to, the warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        {'\n\n'}
                        <Text style={styles.bold}>6. Limitation of Liability</Text>
                        {'\n\n'}
                        In no event shall the Company be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, damages for loss of profits, goodwill, data, or other intangible losses, arising out of or in connection with your use of the App or any in-app subscriptions.                        {/* More terms and conditions here */}
                        {'\n\n'}
                        <Text style={styles.bold}>7. Governing Law</Text>
                        {'\n\n'}
                        This Agreement shall be governed by and construed in accordance with the laws of the United States of America. Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in the United States of America.
                    </Text>
                    <View style={{ paddingBottom: 45 }} />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    bold: {
        fontWeight: 'bold',
    },
})

export default LargeTextComponent;