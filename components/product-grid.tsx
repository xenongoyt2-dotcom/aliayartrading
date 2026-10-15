import { ProductCard } from "./product-card"
import { products } from "@/lib/products-data"

interface ProductGridProps {
  limit?: number
  category?: string
}

export function ProductGrid({ limit, category }: ProductGridProps) {
  let filteredProducts = products

  if (category) {
    filteredProducts = products.filter((p) => p.category === category)
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit)
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-muted-foreground">Henüz ürün eklenmemiştir.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
