import { View, type ViewProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme'

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const theme = useTheme()

  return (
    <View style={[{ backgroundColor: theme.colors.background}, style]} {...otherProps} />
  );
}
