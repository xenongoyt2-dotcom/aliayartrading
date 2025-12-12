import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sayfa Bulunamadı</h2>
        <p className="text-lg text-muted-foreground mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Ana Sayfaya Dön
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent">
            <Link href="/urunler">
              <Search className="mr-2 h-5 w-5" />
              Ürünleri İncele
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
