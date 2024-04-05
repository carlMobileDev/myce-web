import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { Image } from "react-native";

interface StoreButtonRowProps {
    color: string
}

const StoreButtonRow: React.FC<StoreButtonRowProps> = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: props.color }}>
            <Link
                href={'https://play.google.com/store/apps/details?id=com.carlMobileDev.myceu_flutter'}
                children={<Image source={require('../../assets/images/Google-Play.svg')} />
                } />
            <View style={{ width: 30, backgroundColor: props.color }}></View>
            <Link
                href={'https://apps.apple.com/app/my-ce/1661831705'}
                children={
                    <Image source={require('../../assets/images/Apple.svg')} />
                } />
        </View>
    );
}

export default StoreButtonRow