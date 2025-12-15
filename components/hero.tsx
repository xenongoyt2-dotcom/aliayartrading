import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen md:h-screen bg-linear-to-br from-slate-900 to-slate-700">
      <Image
        src="/images/aliayararka.jpg"
        alt="Ali Ayar Trading Mercedes-Benz Yedek Parça"
        fill
        className="object-cover opacity-40"
        priority
      />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Mercedes-Benz Yedek Parça Uzmanı
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 text-pretty leading-relaxed">
            Orijinal ve yan sanayi yedek parçaları ile aracınız için ihtiyaç duyduğunuz her türlü parçayı güvenle temin
            edin. Kaliteli hizmet, uygun fiyatlar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base font-semibold">
              <Link href="/urunler">Ürünleri İncele</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent text-base font-semibold"
            >
              <Link href="/iletisim">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
