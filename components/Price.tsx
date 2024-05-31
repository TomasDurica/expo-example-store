import { Text, TextProps } from 'react-native'

type PriceProps = TextProps & { price: number }

const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

export function Price({ price, ...rest } : PriceProps) {
  return (
    <Text {...rest}>
      {eur.format(price)}
    </Text>
  )
}