import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native'

export default function NotFound() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Not Found.</Text>
    </View>
  );
}
