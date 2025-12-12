import Link from "next/link"
import Image from "next/image"
import { ProductGrid } from "@/components/product-grid"
import { CategoryCard } from "@/components/category-card"
import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Kategoriler Bölümü */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ürün Kategorileri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Öne Çıkan Ürünler</h2>
          <ProductGrid limit={8} />
          <div className="text-center mt-8">
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Tüm Ürünleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımızda Kısa Bilgi */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mercedes-Benz Yedek Parça Uzmanı</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Ali Ayar Trading, Kıbrıs'ta Mercedes-Benz orijinal ve yan sanayi yedek parçaları konusunda güvenilir
                çözüm ortağınızdır. Geniş ürün yelpazemiz ve uzman kadromuzla aracınız için ihtiyaç duyduğunuz her türlü
                parçayı temin ediyoruz.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Kaliteli ürünler, uygun fiyatlar ve hızlı teslimat garantisiyle hizmetinizdeyiz.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/titlebar.jpg" alt="Ali Ayar Trading Mağaza" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
