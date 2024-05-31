// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { useEffect, useMemo } from 'react'
import { Animated, Pressable, PressableProps, ViewProps, Text } from 'react-native'
import { useTheme } from '@/hooks/useTheme'

type ThemedButtonProps = PressableProps & {
  style?: ViewProps['style'],
  title?: string,
}

export function ThemedButton({ children, title, style, ...rest }: ThemedButtonProps) {
  const theme = useTheme()
  const animation = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    return () => {
      animation.stopAnimation()
    }
  }, [])

  const pressDown = () => {
    Animated.timing(animation, {
      toValue: 0.1,
      duration: 40,
      useNativeDriver: true,
    }).start();
  }

  const pressUp = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 80,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Pressable
      onPressIn={pressDown}
      onPressOut={pressUp}
      style={[
        {
          paddingHorizontal: 24,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          overflow : 'hidden',
          backgroundColor: theme.colors.primary,
          minHeight: 40
        },
        style
      ]}
      {...rest}
    >
      <Animated.View
        style={{ opacity: animation, backgroundColor: theme.colors.onPrimary, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
      </Animated.View>
      {
        children
          ? <>{children}</>
          : <Text style={{ color: theme.colors.onPrimary }}>{title}</Text>
      }
    </Pressable>
  )
}
