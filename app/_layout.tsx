import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaView } from 'react-native'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1b1b1b' }}>
      <Providers>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Providers>
    </SafeAreaView>
  )
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider value={DarkTheme}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          { children }
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}