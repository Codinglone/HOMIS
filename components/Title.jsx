import { Text, StyleSheet, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HO-MIS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  title: {
    fontSize: 48,
    color: "#fff",
    fontWeight: 900,
    marginTop: 160,
    letterSpacing: 14,
    fontFamily: "verdana",
  },
});
