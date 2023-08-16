import { Text, StyleSheet } from "react-native";

export default function Title(){
    return (
        <Text
        style={styles.title}
      >HO-MIS</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        color: "#fff",
        fontWeight: 900,
        marginTop: 160,
        letterSpacing: 14,
        fontFamily: "verdana"
      },

   
})