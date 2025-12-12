import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "İletişim | Ali Ayar Trading - Mercedes-Benz Yedek Parça",
  description:
    "Ali Ayar Trading ile iletişime geçin. Adres: Acıyonca sokak, Zeytinlik kesimi, A/D plaza, No.2A, Girne, Kıbrıs. Tel: +90 542 850 92 17",
  keywords: "ali ayar trading iletişim, mercedes yedek parça kıbrıs, girne oto yedek parça",
}

export default function IletisimPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-lg text-muted-foreground">
            Sorularınız için bize ulaşın. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Adresimiz</h3>
                    <p className="text-muted-foreground">
                      Acıyonca sokak, Zeytinlik kesimi
                      <br />
                      A/D plaza, No.2A
                      <br />
                      Girne, Kıbrıs
                    </p>
                    <Button asChild variant="link" className="px-0 mt-2">
                      <a href="https://maps.app.goo.gl/Q44h8g3HgYcD8oVL8" target="_blank" rel="noopener noreferrer">
                        Haritada Görüntüle →
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Telefon</h3>
                    <a href="tel:+905428509217" className="text-lg font-semibold hover:text-primary transition-colors">
                      +90 542 850 92 17
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366] p-1.5 rounded-lg flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <Button asChild variant="outline" className="bg-transparent">
                      <a href="https://wa.me/905428509217" target="_blank" rel="noopener noreferrer">
                        WhatsApp ile Mesaj Gönder
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Harita */}
          <div>
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3065214413986!2d33.28315526957952!3d35.341230692261966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de139afb056d2f%3A0xa8ac0fdd4ec5aad1!2sAli%20Ayar%20Trading%20LTD!5e1!3m2!1str!2s!4v1765528485602!5m2!1str!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ali Ayar Trading Konum"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
