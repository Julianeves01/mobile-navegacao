import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏠 Welcome to the Home Screen!</Text>
            
            <View style={styles.buttonContainer}>
                <Link href="/sobre" asChild>
                    <Button
                        title="Go to About ℹ️"
                    />
                </Link>
            </View>
            
            <View style={styles.buttonContainer}>
                <Link href="/produtos" asChild>
                    <Button
                        title="Go to Products 🛒"
                    />
                </Link>
            </View>
            
            <View style={styles.buttonContainer}>
                <Link href="/contato" asChild>
                    <Button
                        title="Go to Contact ☎️"
                    />
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 8,
        width: '40%',
        borderRadius: 10,
        overflow: 'hidden',
    },
});