import React from 'react';
import { View } from 'react-native';

interface CustomStackProps {
    foregroundChildren: React.ReactNode,
    backgroundChildren: React.ReactNode
}

const CustomStack: React.FC<CustomStackProps> = ({ foregroundChildren, backgroundChildren }) => {
    return (
        <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
            <View>
                {foregroundChildren}
            </View>
            <View style={{ alignSelf: 'flex-end', }}>
                {backgroundChildren}
            </View>
        </View>
    );
};
export default CustomStack;