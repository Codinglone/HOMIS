import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Title from './components/Title';
import Login from './components/Login';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <Login />
      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    // justifyContent: 'center',
  },

});
