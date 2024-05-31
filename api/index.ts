import { z, ZodTypeAny } from 'zod'

const baseUrl = 'https://fakestoreapi.com'

export const getCategories = async () => await fetchData('products/categories', z.array(z.string()))

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  description: z.string(),
  image: z.string(),
})

export type Product = z.infer<typeof productSchema>

export const getProducts = async (category: string) => await fetchData(`products/category/${category}`, z.array(productSchema))

const fetchData = async <TSchema extends ZodTypeAny>(relativeUrl: string, schema: TSchema) => {
  const response = await fetch(`${baseUrl}/${relativeUrl}`)
  const data = await response.json()
  return schema.parse(data)
}