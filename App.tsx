import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://2292b3138ea83933a76d4bac6a9a89d9@o4511188898807808.ingest.us.sentry.io/4511188908900352',
  sendDefaultPii: true,
  enableLogs: true,
});

export default Sentry.wrap(function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Repro: iOS 26 + A18 Pro crash</Text>
        <Text style={styles.subtitle}>Testing with: Sentry</Text>
        <Text style={styles.info}>SDK 56 canary • RN 0.85 • Hermes V1</Text>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  info: {
    fontSize: 12,
    color: '#999',
  },
});
