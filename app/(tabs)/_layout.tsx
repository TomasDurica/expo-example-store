import { Tabs } from "expo-router";
import { TabBarIcon } from '@/components/TabBarIcon'
import React from 'react'
import { useTheme } from '@/hooks/useTheme'

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 8,
          height: 64,
          backgroundColor: theme.colors.surface,
          borderTopWidth: 0
        },
        tabBarLabelStyle: {
          paddingBottom: 8,
        }
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
