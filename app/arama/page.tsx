"use client"

import { useSearchParams } from "next/navigation"
import { products } from "@/lib/products-data"
import { ProductCard } from "@/components/product-card"
import { Search } from "lucide-react"
import { Suspense } from "react"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const searchResults = products.filter((product) => {
    const searchLower = query.toLowerCase()
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.partNumber.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    )
  })

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Arama Sonuçları</h1>
          </div>

          {query && (
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold">&quot;{query}&quot;</span> için {searchResults.length} sonuç bulundu
            </p>
          )}
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              {query ? "Aradığınız kriterlere uygun ürün bulunamadı." : "Lütfen bir arama terimi girin."}
            </p>
            <p className="text-sm text-muted-foreground">
              Farklı anahtar kelimeler veya parça numaraları deneyebilirsiniz.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default function AramaPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-12">
          <p className="text-center">Yükleniyor...</p>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  )
}
