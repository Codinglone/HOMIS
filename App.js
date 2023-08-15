import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >HOMIS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: "64px",
    color: "#fff",
    fontWeight: "900",
    marginTop: "60px"
  }
});
