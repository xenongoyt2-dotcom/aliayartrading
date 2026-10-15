import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/categories-data"
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


  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg text-muted-foreground">
            Mercedes-Benz araçlarınız için yüksek kaliteli {category.name.toLowerCase()} ürünleri. Orijinal ve yan
            sanayi seçenekler.
          </p>

        </div>

        <div className="mx-auto max-w-2xl rounded-lg border bg-muted/30 p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Parça ihtiyacınız için bize ulaşın</h2>
          <p className="text-muted-foreground mb-6">
            Aracınızın modelini, şasi numarasını veya aradığınız parçanın numarasını paylaşın;
            uyumluluk, stok ve fiyat bilgisi için yardımcı olalım.
          </p>
          <Button asChild size="lg">
            <a
              href={`https://wa.me/905428509217?text=${encodeURIComponent(`Merhaba, ${category.name} kategorisinde parça bilgisi almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ile Bilgi Al
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
