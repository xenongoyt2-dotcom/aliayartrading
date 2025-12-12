import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Hakkımızda */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Ali Ayar Trading Logo"
                width={50}
                height={50}
                className="h-12 w-12 bg-white rounded-full p-1"
              />
              <div>
                <div className="font-bold text-lg">Ali Ayar Trading</div>
                <div className="text-xs text-primary-foreground/80">Mercedes-Benz Uzmanı</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Kıbrıs'ta Mercedes-Benz orijinal ve yan sanayi yedek parçaları konusunda güvenilir çözüm ortağınız.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hızlı Linkler</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/urunler"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Ürünler
              </Link>
              <Link
                href="/kategoriler"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Kategoriler
              </Link>
              <Link
                href="/hakkimizda"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                İletişim
              </Link>
            </nav>
          </div>

          {/* Kategoriler */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kategoriler</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/kategori/fren-diskleri"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Fren Diskleri
              </Link>
              <Link
                href="/kategori/fren-balatalari"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Fren Balataları
              </Link>
              <Link
                href="/kategori/hava-filtreleri"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Hava Filtreleri
              </Link>
              <Link
                href="/kategori/yag-filtreleri"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Yağ Filtreleri
              </Link>
              <Link
                href="/kategori/su-depolari"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Su Depoları
              </Link>
            </nav>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="font-bold text-lg mb-4">İletişim</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:+905428509217"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+90 542 850 92 17</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>
                  Acıyonca sokak, Zeytinlik kesimi,
                  <br />
                  A/D plaza, No.2A
                  <br />
                  Girne, Kıbrıs
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/Q44h8g3HgYcD8oVL8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Haritada Görüntüle →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ali Ayar Trading LTD. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
