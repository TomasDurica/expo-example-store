import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { useTheme } from '@/hooks/useTheme'
import { ThemedText } from '@/components/ThemedText'

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Stack screenOptions={{ }}>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Logo />,
        }} />

      <Stack.Screen
        name="[category]"
        options={{
          headerTitle: CategoryTitle,
          contentStyle: { borderTopWidth: 0},
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: theme.colors.primary,
        }} />
    </Stack>
  );
}

function Logo() {
  const theme = useTheme()

  return (
    <ThemedView style={{ height: 64, gap: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>the</ThemedText>

      <View style={{ width: 80, height: 64, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ position: 'absolute', top: 6, width: 80, height: 56, backgroundColor: theme.colors.primary, transform: [{ rotate: '8deg' }], transformOrigin: 'center' }} />
        <Text style={{ flex: 1, fontSize: 24, color: theme.colors.background, fontWeight: 900, textAlign: 'center' }}>FAKE</Text>
      </View>

      <ThemedText>store</ThemedText>
    </ThemedView>
  );
}

function CategoryTitle() {
  const { category } = useLocalSearchParams();

  return (
    <ThemedText>
      { category?.toString().toUpperCase() }
    </ThemedText>
  )
}