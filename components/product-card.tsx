import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Merhaba, ${product.name} (Parça No: ${product.partNumber}) hakkında bilgi alabilir miyim? ${typeof window !== "undefined" ? window.location.origin : ""}/urun/${product.slug}`

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/urun/${product.slug}`}>
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isOem && <Badge className="absolute top-2 right-2 bg-black text-white">OEM</Badge>}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/urun/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">Parça No: {product.partNumber}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-transparent" variant="outline">
          <a
            href={`https://wa.me/905428509217?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiyat Al
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
