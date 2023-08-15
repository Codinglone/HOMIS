import { StyleSheet, Text, SafeAreaView, View, TextInput } from "react-native";
const Login = () => {
  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <View>
        <Text style={styles.labels}>Username</Text>
        <TextInput style={styles.field} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 500,
        fontSize: "32px",
        color: "#fff",
        paddingVertical: "30px",
        letterSpacing: "10px",
        fontFamily: "verdana"
    },
    labels: {
        color: "#fff",
        fontWeight: "550",
        fontSize: "18px"

    }
    ,
    field: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: "#fff",
        color: "#fff",
        fontWeight: "500",
        fontSize: "18px"

    }
});

export default Login;
