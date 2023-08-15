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
        fontSize: "48px",
        color: "#fff",
        fontWeight: "900",
        marginTop: "160px",
        letterSpacing: "14px",
        fontFamily: "verdana"
      },

   
})