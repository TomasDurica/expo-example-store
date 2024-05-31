import { FlatList } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/api'
import { ThemedView } from '@/components/ThemedView'
import { Link } from 'expo-router'
import { ThemedButton } from '@/components/ThemedButton'
import { forwardRef } from 'react'

export default function Index() {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => await getCategories(),
  })

  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={data ?? []}
        renderItem={({ item } : { item: string }) => (
          <Link push href={{ pathname: '/[category]', params: { category: item }}} asChild>
            <CategoryButton key={item} title={item.toUpperCase()} />
          </Link>)
        }
        keyExtractor={(item) => item}

        contentContainerStyle={{
          gap: 16,
        }}
      />
    </ThemedView>
  );
}

const CategoryButton = forwardRef((props: Parameters<typeof ThemedButton>[0], _) => {
  return <ThemedButton {...props} />;
});