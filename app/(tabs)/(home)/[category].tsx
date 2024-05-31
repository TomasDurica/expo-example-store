import { FlatList, Image, TextInput, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { getProducts, Product } from '@/api'
import { ThemedView } from '@/components/ThemedView'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ThemedButton } from '@/components/ThemedButton'
import { useCartProduct } from '@/hooks/useCart'
import { Price } from '@/components/Price'
import { useTheme } from '@/hooks/useTheme'
import { ThemedText } from '@/components/ThemedText'

export default function Category() {
  const { category } = useLocalSearchParams()

  const { data } = useQuery({
    queryKey: ['products', category?.toString() ?? ''],
    queryFn: async () => await getProducts(category?.toString() ?? ''),
  })

  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <FlatList
        automaticallyAdjustKeyboardInsets
        contentContainerStyle={{ gap: 16 }}
        data={data ?? []}
        renderItem={({ item }) => <ProductItem product={item}/>}
      />
    </ThemedView>
  );
}

type ProductProps = {
  product: Product
}

function ProductItem({ product }: ProductProps) {
  const theme = useTheme()

  return (
    <View style={{ flex: 1, borderRadius: 16, overflow: 'hidden', backgroundColor: theme.colors.surfaceContainer }}>
      <View style={{ backgroundColor: theme.colors.imageBackground, padding: 16, justifyContent: 'center' }}>
        <Image style={{ flex: 1, aspectRatio: 1, resizeMode: 'contain', maxHeight: 128, marginHorizontal: 'auto' }} source={{ uri: product.image }}></Image>
      </View>
      <View style={{ padding: 16, gap: 8  }}>
        <ThemedText numberOfLines={1} style={{ color: theme.colors.onSurface }}>
          { product.title }
        </ThemedText>
        <Price
          numberOfLines={1}
          style={{ padding: 8, fontSize: 24, color: theme.colors.primary, textAlign: 'center' }}
          price={product.price}
        />
        <AddToCartButton product={product} />
      </View>
    </View>
  )
}

function AddToCartButton({ product }: ProductProps) {
  const theme = useTheme()

  const { count, add, remove, setCount } = useCartProduct(product)
  const [countText, setCountText] = useState(count.toString())

  useEffect(() => {
    setCountText(count.toString())
  }, [count, setCountText])

  if (count === 0) {
    return (
      <ThemedButton onPress={ add } title="Add to cart" />
    )
  }

  return (
    <>
      <View style={{ flexDirection: 'row', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
        <ThemedButton onPress={ remove } title="-" />
        <TextInput
          style={{ flex: 1, borderColor: theme.colors.secondary, borderWidth: 1, color: theme.colors.secondary, borderRadius: 8, textAlign: 'center', height: 40 }}
          keyboardType="numeric"
          value={countText}
          onChangeText={setCountText}
          onEndEditing={() => { setCount(parseInt(countText, 10) || 0) }}
        />
        <ThemedButton onPress={ add } title="+" />
      </View>
    </>
  )
}