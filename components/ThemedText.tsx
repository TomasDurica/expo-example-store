import { TextProps, Text } from 'react-native'
import { useTheme } from '@/hooks/useTheme'

export function ThemedText({ style, ...otherProps }: TextProps) {
  const theme = useTheme()

  return (
    <Text style={[{ color: theme.colors.onBackground }, style]} {...otherProps} />
  );
}
