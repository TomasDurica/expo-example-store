import { Stack } from "expo-router";
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { useTheme } from '@/hooks/useTheme'

const queryClient = new QueryClient()

export default function RootLayout() {
  const theme = useTheme()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
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
    <SafeAreaProvider>
      <ThemeProvider value={DarkTheme}>
        <QueryClientProvider client={queryClient}>
          <Provider>
            { children }
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}