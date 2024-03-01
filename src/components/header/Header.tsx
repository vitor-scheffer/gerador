import { View, Text, StyleSheet } from "react-native";

interface Props {
    title: String;
}

export function Header({ title }: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#392DE9',
        justifyContent: 'flex-end',
        padding: 16
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffff'
    }
})