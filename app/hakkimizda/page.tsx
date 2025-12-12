import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, MapPin, Phone, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda | Ali Ayar Trading - Mercedes-Benz Yedek Parça Uzmanı",
  description:
    "Ali Ayar Trading, Kıbrıs'ta Mercedes-Benz orijinal ve yan sanayi yedek parçaları konusunda 20 yılı aşkın tecrübesiyle hizmet vermektedir.",
  keywords: "ali ayar trading, mercedes yedek parça kıbrıs, girne mercedes parça, kıbrıs oto yedek parça",
}

export default function HakkimizdaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ali Ayar Trading</h1>
            <p className="text-xl text-muted-foreground">Mercedes-Benz Yedek Parça Uzmanı</p>
          </div>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tecrübe ve Güvenilirlik</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Ali Ayar Trading, Kıbrıs'ta Mercedes-Benz orijinal ve yan sanayi yedek parçaları konusunda güvenilir
                çözüm ortağınızdır. Yılların getirdiği tecrübe ve uzmanlıkla, Mercedes-Benz araç sahiplerine kaliteli
                hizmet sunmaktayız.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Geniş ürün yelpazemiz, uzman kadromuz ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde öncü
                konumdayız. Her model Mercedes-Benz için ihtiyaç duyduğunuz parçayı hızlı ve güvenilir şekilde temin
                ediyoruz.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Orijinal ve yan sanayi ürün seçenekleri</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Hızlı teslimat ve güvenilir hizmet</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Uzman kadro ve teknik destek</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Rekabetçi fiyatlar ve kalite garantisi</span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/titlebar.jpg" alt="Ali Ayar Trading Mağaza" fill className="object-cover" />
            </div>
          </div>

          {/* İletişim Kartları */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Adresimiz</h3>
                <p className="text-sm text-muted-foreground">
                  Acıyonca sokak, Zeytinlik kesimi, A/D plaza, No.2A, Girne, Kıbrıs
                </p>
                <Button asChild variant="link" className="px-0 mt-2">
                  <a href="https://maps.app.goo.gl/Q44h8g3HgYcD8oVL8" target="_blank" rel="noopener noreferrer">
                    Haritada Görüntüle →
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Telefonumuz</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Ürünlerimiz ve hizmetlerimiz hakkında bilgi almak için bizi arayın
                </p>
                <a href="tel:+905428509217" className="font-semibold text-lg">
                  +90 542 850 92 17
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Çalışma Saatleri</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p>Cumartesi: 09:00 - 14:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">İhtiyacınız olan parçayı bulamadınız mı?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Bizimle iletişime geçin, aradığınız her parçayı sizin için bulalım.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/iletisim">İletişime Geç</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
