import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerStyle: { backgroundColor: "#d38c9d"},
                headerTintColor: "white",
                headerTitleStyle: { fontWeight: "bold" },
            }}
        />
    );
}