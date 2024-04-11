import TopMenuBar from '@/components/top-menu-bar';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

const PrivacyPolicyComponent: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopMenuBar />
      <ScrollView>
        <View style={styles.container}>
          <View style={{paddingTop: 45}} />
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.text}>
            {'\n\n'}
            <Text style={styles.bold}>PRIVACY POLICY</Text>
            {'\n\n'}
            This Privacy Policy (the “Policy”) describes how carl.mobile.dev
            (the “Company” or “We”) collects, uses, and discloses personal
            information when you use the My CE mobile application (the “App”).
            By installing, accessing, or using the App, you agree to the terms
            of this Policy. If you do not agree with any part of this Policy,
            you must not install or use the App.
            {'\n\n'}
            {'\n\n'}
            <Text style={styles.bold}>1. Information We Collect</Text>
            {'\n\n'}
            1.1 Personal Information We may collect personal information that
            you provide to us when you use the App, such as your name, email
            address, and any other information you voluntarily provide. We only
            collect personal information that is relevant to the purpose for
            which it is being collected.{'\n\n'} 1.2 Non-Personal Information We
            may also collect non-personal information automatically when you use
            the App, such as your device type, operating system, unique device
            identifier, IP address, and usage data. This information is used to
            improve the functionality and performance of the App.
            {'\n\n'}
            <Text style={styles.bold}>2. Use of Information</Text>
            {'\n\n'}
            We may use the collected information for the following purposes: To
            provide and maintain the App and its features. To personalize and
            improve the user experience of the App. To respond to your
            inquiries, comments, or feedback. To send you administrative
            notifications, such as updates, security alerts, and support
            messages. To analyze and monitor the usage of the App for internal
            purposes. To comply with legal obligations and enforce our rights.
            {'\n\n'}
            <Text style={styles.bold}>3. Disclosure of Information</Text>
            {'\n\n'}
            We may disclose your personal information to third parties in the
            following circumstances: To our trusted service providers who assist
            us in providing and maintaining the App. To comply with legal
            requirements, such as responding to court orders or government
            requests. To protect our rights, property, or safety, as well as the
            rights, property, or safety of others. With your consent or at your
            direction. {'\n\n'} We do not sell or rent your personal information
            to third parties for marketing purposes.
            {'\n\n'}
            <Text style={styles.bold}>4. Data Security</Text>
            {'\n\n'}
            We take reasonable measures to protect the security of your personal
            information and maintain its confidentiality. However, please note
            that no method of transmission over the internet or method of
            electronic storage is completely secure, and we cannot guarantee
            absolute security.
            {'\n\n'}
            <Text style={styles.bold}>5. Children’s Privacy</Text>
            {'\n\n'}
            The App is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have collected personal information from a
            child under 13 without parental consent, we will take steps to
            delete that information.
            {'\n\n'}
            <Text style={styles.bold}>6. Your Rights</Text>
            {'\n\n'}
            You may have certain rights regarding your personal information,
            including the right to access, update, correct, or delete your
            information. To exercise these rights, please contact us using the
            contact information provided at the end of this Policy.
            {'\n\n'}
            <Text style={styles.bold}>7. Changes to this Policy</Text>
            {'\n\n'}
            We reserve the right to modify or update this Policy at any time.
            Any changes will be effective when we post the revised Policy on the
            App. Your continued use of the App after the changes indicates your
            acceptance of the revised Policy.
            {'\n\n'}
            <Text style={styles.bold}>8. Contact Us</Text>
            {'\n\n'}
            If you have any questions, comments, or concerns about this Policy
            or our privacy practices, please contact us at myceu.help@gmail.com.
          </Text>
          <View style={{paddingBottom: 45}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyComponent;
