import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const ClientOrder = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Client Order Form</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },

    title: {
        color: "#fff",
        fontSize: "24px",
        fontWeight: 900,
        textTransform: "uppercase",
        paddingVertical: "60px"
    }

})

export default ClientOrder