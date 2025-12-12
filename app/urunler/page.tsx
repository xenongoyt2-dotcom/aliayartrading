import { ProductGrid } from "@/components/product-grid"
import { products } from "@/lib/products-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tüm Ürünler | Ali Ayar Trading - Mercedes-Benz Yedek Parça",
  description:
    "Mercedes-Benz orijinal ve yan sanayi yedek parçaları. Fren sistemleri, filtreler, aydınlatma, suspensiyon ve motor parçaları.",
  keywords: "mercedes yedek parça, mercedes parça fiyatları, kıbrıs mercedes parça, orijinal parça, yan sanayi parça",
}

export default function UrunlerPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tüm Ürünler</h1>
          <p className="text-lg text-muted-foreground">
            Mercedes-Benz araçlarınız için geniş yedek parça yelpazemize göz atın. Orijinal ve yan sanayi ürünler.
          </p>
          <div className="mt-6">
            <span className="text-sm text-muted-foreground">{products.length} ürün listeleniyor</span>
          </div>
        </div>

        <ProductGrid />
      </div>
    </main>
  )
}
