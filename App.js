import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>App teste</Text>

      <ScrollView>
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
          <MeuComponente />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b3a3a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20
  },
});
