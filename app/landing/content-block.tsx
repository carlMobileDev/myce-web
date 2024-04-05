import { StyleSheet, Text, View } from "react-native"

interface ContentBlockProps {
    title: string;
    details: string;
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
    return (
        <View style={styles.content}>
            <Text style={[styles.title,]}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.details}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 100
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
})


export default ContentBlock;