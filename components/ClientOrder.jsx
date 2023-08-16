import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const ClientOrder = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Client Order</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },

    title: {
        color: "#fff",
        fontSize: "18px",
        fontWeight: 900
    }

})

export default ClientOrder