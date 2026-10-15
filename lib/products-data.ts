export interface Product {
  id: string
  name: string
  slug: string
  description: string
  partNumber: string
  category: string
  image: string
  isOem: boolean
  compatibility: string[]
  specifications: Record<string, string>
}

export const products: Product[] = []

export const categories = [
  { name: "Fren Diskleri", slug: "fren-diskleri" },
  { name: "Fren Balataları", slug: "fren-balatalari" },
  { name: "Hava Filtreleri", slug: "hava-filtreleri" },
  { name: "Yağ Filtreleri", slug: "yag-filtreleri" },
  { name: "Su Depoları", slug: "su-depolari" },
  { name: "Contalar", slug: "contalar" },
  { name: "Aydınlatma", slug: "aydinlatma" },
  { name: "Suspensiyon", slug: "suspensiyon" },
]
