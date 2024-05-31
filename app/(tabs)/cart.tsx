import { Image, ScrollView, Text, View } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { useCartProduct, useCartProducts, useCartTotal } from '@/hooks/useCart'
import { Product } from '@/api'
import React from 'react'
import { ThemedButton } from '@/components/ThemedButton'
import { Price } from '@/components/Price'
import { useTheme } from '@/hooks/useTheme'
import { ThemedText } from '@/components/ThemedText'

export default function Cart() {
  const products = useCartProducts()

  if (!products.length) {
    return (
      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText style={{ fontSize: 24 }}>Your cart is empty</ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView style={{ flex: 1, gap: 16, padding: 16 }}>
      <ScrollView style={{ flexBasis: 0 }} contentContainerStyle={{ gap: 16 }}>
        { products.map((product) => <ProductItem key={product.id} product={product}/>) }
      </ScrollView>
      <Total />
    </ThemedView>
  )
}

type ProductProps = {
  product: Product
}

function ProductItem({ product }: ProductProps) {
  const theme = useTheme()
  const { count, add, remove } = useCartProduct(product)

  return (
    <View style={{ borderRadius: 16, overflow: 'hidden', backgroundColor: theme.colors.surfaceContainer, padding: 16, gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View style={{ width: 128, maxWidth: '25%', aspectRatio: 1, borderRadius: 8, backgroundColor: theme.colors.imageBackground, padding: 8 }}>
          <Image style={{ resizeMode: 'contain', aspectRatio: 1 }} source={{ uri: product.image }}></Image>
        </View>
        <ThemedText numberOfLines={2} style={{ flex: 1 }}> { product.title }</ThemedText>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <ThemedButton onPress={ remove } style={{ paddingHorizontal: 0, padding: 8, width: 40, borderRadius: 20 }} title="-" />
          <ThemedText> { count } </ThemedText>
          <ThemedButton onPress={ add } style={{ paddingHorizontal: 0, padding: 8, width: 40, borderRadius: 20 }}  title="+" />
        </View>
        <Price style={{ color: theme.colors.primary, fontSize: 24, textAlign: 'right' }} price={product.price * count} />
      </View>
    </View>
  )
}

function Total() {
  const theme = useTheme()
  const total = useCartTotal()

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 32 }}>
      <ThemedText style={{ fontSize: 24 }}>Total:</ThemedText>
      <Price style={{ color: theme.colors.primary, fontSize: 48, textAlign: 'right' }} price={total} />
    </View>
  )
}
