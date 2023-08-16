import { StyleSheet, Text, SafeAreaView, View, TextInput, Button } from "react-native";
const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View  style={styles.inputGroup}>
        <Text style={styles.labels}>Username</Text>
        <TextInput style={styles.field} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.labels}>Password</Text>
        <TextInput style={styles.field} />
      </View>

      <View style={styles.inputGroup}>
        <Button title="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },
    title: {
        fontWeight: 500,
        fontSize: 32,
        color: "#fff",
        paddingVertical: 50,
        letterSpacing: 10,
        fontFamily: "verdana"
    },
    labels: {
        color: "#fff",
        fontWeight: 550,
        fontSize: 18,
        letterSpacing: 4,
        paddingBottom: 4,

    }
    ,
    field: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: "#fff",
        color: "#fff",
        fontWeight: 500,
        fontSize: 18

    },
    inputGroup: {
        paddingVertical: 20
    },
    button: {
        paddingVertical: 16,
        color: "#fff",
        backgroundColor: "000"
    }
});

export default Login;
