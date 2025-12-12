import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { products } from "@/lib/products-data"
import { Check, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
    }
  }

  return {
    title: `${product.name} | Ali Ayar Trading`,
    description: `${product.description} Parça No: ${product.partNumber}. Kıbrıs'ta Mercedes-Benz yedek parça.`,
    keywords: `${product.name}, ${product.partNumber}, mercedes yedek parça, ${product.category}`,
    openGraph: {
      title: `${product.name} | Ali Ayar Trading`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const whatsappMessage = `Merhaba, ${product.name} (Parça No: ${product.partNumber}) hakkında bilgi alabilir miyim? ${typeof window !== "undefined" ? (typeof window !== "undefined" ? window.location.origin : "") : ""}${typeof window !== "undefined" ? (typeof window !== "undefined" ? window.location.pathname : "") : ""}`

  // Benzer ürünler (aynı kategoriden)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            Ana Sayfa
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/urunler" className="hover:text-foreground">
            Ürünler
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Ürün Görseli */}
          <div>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-[400px] md:h-[500px] bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                  />
                  {product.isOem && (
                    <Badge className="absolute top-4 right-4 bg-black text-white text-sm px-3 py-1">OEM Kalite</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ürün Bilgileri */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Parça Numarası:</span>
                <Badge variant="outline" className="text-base px-3 py-1">
                  {product.partNumber}
                </Badge>
              </div>

              {product.isOem && (
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>OEM Kalite Ürün</span>
                </div>
              )}
            </div>

            <Separator className="my-8" />

            {/* Uyumluluk */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Uyumlu Modeller</h3>
              <div className="flex flex-wrap gap-2">
                {product.compatibility.map((model) => (
                  <Badge key={model} variant="secondary" className="px-3 py-1">
                    {model}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Teknik Özellikler */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Teknik Özellikler</h3>
              <Card>
                <CardContent className="p-0">
                  <dl className="divide-y">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="px-4 py-3 flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                        <dd className="text-sm font-semibold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </div>

            {/* Fiyat Al Butonu */}
            <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg h-14">
              <a
                href={`https://wa.me/905428509217?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp ile Fiyat Al
              </a>
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Fiyat bilgisi için WhatsApp üzerinden bize ulaşın
            </p>
          </div>
        </div>

        {/* Benzer Ürünler */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Benzer Ürünler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/urun/${relatedProduct.slug}`}>
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  <CardContent className="p-4">
                    <Link href={`/urun/${relatedProduct.slug}`}>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">Parça No: {relatedProduct.partNumber}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
