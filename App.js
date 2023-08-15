import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Title from './components/Title';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
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
