import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ürün Kategorileri | Ali Ayar Trading - Mercedes-Benz Yedek Parça",
  description:
    "Mercedes-Benz yedek parça kategorileri: Fren sistemleri, filtreler, contalar, aydınlatma, suspensiyon parçaları ve daha fazlası.",
  keywords:
    "mercedes yedek parça kategorileri, fren diskleri, fren balataları, hava filtresi, yağ filtresi, mercedes parça",
}

export default function KategorilerPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ürün Kategorileri</h1>
          <p className="text-lg text-muted-foreground">
            Mercedes-Benz araçlarınız için ihtiyaç duyduğunuz tüm yedek parça kategorilerine göz atın. Orijinal ve yan
            sanayi ürünler geniş yelpazemizde.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CategoryCard title="Fren Diskleri" href="/kategori/fren-diskleri" icon="disc" />
          <CategoryCard title="Fren Balataları" href="/kategori/fren-balatalari" icon="brake" />
          <CategoryCard title="Hava Filtreleri" href="/kategori/hava-filtreleri" icon="filter" />
          <CategoryCard title="Yağ Filtreleri" href="/kategori/yag-filtreleri" icon="oil" />
          <CategoryCard title="Su Depoları" href="/kategori/su-depolari" icon="water" />
          <CategoryCard title="Contalar" href="/kategori/contalar" icon="gasket" />
          <CategoryCard title="Aydınlatma" href="/kategori/aydinlatma" icon="light" />
          <CategoryCard title="Suspensiyon" href="/kategori/suspensiyon" icon="suspension" />
        </div>
      </div>
    </main>
  )
}
