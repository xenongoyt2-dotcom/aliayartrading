import { notFound } from "next/navigation"
import { ProductGrid } from "@/components/product-grid"
import { categories, products } from "@/lib/products-data"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: "Kategori Bulunamadı",
    }
  }

  return {
    title: `${category.name} | Ali Ayar Trading - Mercedes-Benz Yedek Parça`,
    description: `Mercedes-Benz ${category.name.toLowerCase()} - Orijinal ve yan sanayi ürünler. Kıbrıs'ta güvenilir hizmet.`,
    keywords: `mercedes ${category.name.toLowerCase()}, ${category.slug}, mercedes yedek parça, kıbrıs`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.category === slug)

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg text-muted-foreground">
            Mercedes-Benz araçlarınız için yüksek kaliteli {category.name.toLowerCase()} ürünleri. Orijinal ve yan
            sanayi seçenekler.
          </p>
          <div className="mt-6">
            <span className="text-sm text-muted-foreground">{categoryProducts.length} ürün bulundu</span>
          </div>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid category={slug} />
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Bu kategoride henüz ürün bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </main>
  )
}
