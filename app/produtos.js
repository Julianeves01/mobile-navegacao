import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> 🛒 About This Products</Text>
            <Link href="/" asChild>
                <Button
                    title=" ↩️Back to Home"
                />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});