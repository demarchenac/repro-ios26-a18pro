import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// keyboard-controller removed for testing
import 'react-native-reanimated';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://2292b3138ea83933a76d4bac6a9a89d9@o4511188898807808.ingest.us.sentry.io/4511188908900352',
  sendDefaultPii: true,
  enableLogs: true,
});

export default Sentry.wrap(function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold mb-2">Repro: iOS 26 + A18 Pro</Text>
        <Text className="text-base text-gray-500 mb-4">Testing: ALL native deps (no keyboard)</Text>
        <Text className="text-xs text-gray-400">SDK 56 • RN 0.85 • Sentry • NativeWind</Text>
        <Text className="text-xs text-gray-400">contacts • location • image-picker</Text>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
});
