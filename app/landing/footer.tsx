import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoreButtonRow from './store-button-row';

const Footer: React.FC = () => {
    return (
        <View style={{ padding: 60, backgroundColor: "#E7ECFF" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.footerMainText}>
                        MyCE
                    </Text>
                    <StoreButtonRow color='#E7ECFF' includeLinkedIn={true} />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerMainText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#37447E',
        paddingBottom: 16

    }
});

export default Footer;