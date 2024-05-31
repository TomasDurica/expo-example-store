import { atomFamily } from 'jotai/utils'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { Product } from '@/api'

const productComparer = (a: Product, b: Product) => a.id === b.id

const cartProductCountAtomFamily = atomFamily((productId: Product) => atom(0), productComparer)
const activeProductsAtom = atom<Product[]>([])
const isProductInCartAtom = atomFamily((product: Product) => atom((get) => {
  return get(activeProductsAtom).some(p => p.id === product.id)
}), productComparer)

const cartTotalAtom = atom((get) => {
  const activeProducts = get(activeProductsAtom)

  return activeProducts.reduce((price, product) => {
    const count = get(cartProductCountAtomFamily(product))
    return price + product.price * count
  }, 0)
})

export const useCartProduct = (product: Product) => {
  const [countProduct, setCountProduct] = useAtom(cartProductCountAtomFamily(product))
  const setActiveProducts = useSetAtom(activeProductsAtom)
  const isProductInCart = useAtomValue(isProductInCartAtom(product))

  const setCount = (count: number) => {
    if (count <= 0) {
      setCountProduct(0)
      setActiveProducts((prev) => prev.filter(({ id}) => id !== product.id))
    } else {
      setCountProduct(count)
      if (!isProductInCart) {
        setActiveProducts((prev) => [...prev, product])
      }
    }
  }

  return {
    count: countProduct,
    add: () => setCount(countProduct + 1),
    remove: () => setCount(countProduct - 1),
    setCount
  }
}

export const useCartProducts = () => useAtomValue(activeProductsAtom)
export const useCartTotal = () => useAtomValue(cartTotalAtom)