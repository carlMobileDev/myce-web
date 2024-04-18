import React from 'react';
import { View, StyleSheet } from 'react-native';

interface RowComponentProps {
    leftChild: React.ReactNode;
    rightChild: React.ReactNode;

}

const RowComponent: React.FC<RowComponentProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftChild}>{props.leftChild}</View>
            <View style={styles.rightChild}>{props.rightChild}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
    },
    leftChild: {
        position: 'relative',
        left: 0,
    },
    rightChild: {
        position: 'relative',
        right: 0,
    },
});

export default RowComponent;
