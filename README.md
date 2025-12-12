# Ali Ayar Trading LTD - Mercedes-Benz Yedek Parça

Modern ve SEO optimize edilmiş Mercedes-Benz yedek parça e-ticaret web sitesi.

## Özellikler

- ✅ Next.js 16 ile yapılmış modern web uygulaması
- ✅ Responsive (mobil uyumlu) tasarım
- ✅ SEO optimizasyonu (sitemap, robots.txt, meta etiketler)
- ✅ Ürün kategorileri ve detay sayfaları
- ✅ Gelişmiş arama fonksiyonu
- ✅ WhatsApp entegrasyonu
- ✅ Sabit telefon ve WhatsApp butonları
- ✅ Google Maps entegrasyonu
- ✅ TypeScript desteği
- ✅ Tailwind CSS v4 ile styling
- ✅ shadcn/ui bileşenleri

## Kurulum

### Gereksinimler

- Node.js 18.x veya üzeri
- npm veya yarn

### Adımlar

1. **Projeyi indirin** (ZIP'i indirdikten sonra)

\`\`\`bash
cd ali-ayar-trading
\`\`\`

2. **Bağımlılıkları yükleyin**

\`\`\`bash
npm install
\`\`\`

3. **Development sunucusunu başlatın**

\`\`\`bash
npm run dev
\`\`\`

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Deployment (Vercel)

### GitHub ile Deploy

1. Projeyi GitHub'a yükleyin:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [GITHUB_REPO_URL]
git push -u origin main
\`\`\`

2. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
3. "New Project" tıklayın
4. GitHub repository'nizi seçin
5. Deploy butonuna tıklayın

### Direkt Vercel CLI ile Deploy

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Proje Yapısı

\`\`\`
├── app/
│   ├── layout.tsx          # Ana layout (header, footer)
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Global stiller ve tema
│   ├── sitemap.ts          # SEO için sitemap
│   ├── robots.ts           # Robots.txt
│   ├── urunler/            # Tüm ürünler sayfası
│   ├── urun/[slug]/        # Ürün detay sayfaları
│   ├── kategoriler/        # Kategoriler sayfası
│   ├── kategori/[slug]/    # Kategori detay sayfaları
│   ├── arama/              # Arama sonuçları
│   ├── hakkimizda/         # Hakkımızda
│   └── iletisim/           # İletişim sayfası
├── components/
│   ├── header.tsx          # Site başlığı ve navigasyon
│   ├── footer.tsx          # Site alt kısmı
│   ├── hero.tsx            # Ana sayfa hero bölümü
│   ├── product-card.tsx    # Ürün kartı
│   ├── product-grid.tsx    # Ürün listesi
│   ├── category-card.tsx   # Kategori kartı
│   ├── floating-actions.tsx # Sabit WhatsApp ve telefon butonları
│   └── ui/                 # shadcn/ui bileşenleri
├── lib/
│   └── products-data.ts    # Ürün ve kategori verileri
└── public/
    └── images/             # Görseller (logo, ürünler)
\`\`\`

## Ürün ve İçerik Güncelleme

### Ürün Ekleme/Düzenleme

`lib/products-data.ts` dosyasını düzenleyin:

\`\`\`typescript
export const products: Product[] = [
  {
    id: "yeni-urun-id",
    name: "Ürün Adı",
    slug: "urun-adi-slug",
    description: "Ürün açıklaması",
    partNumber: "A1234567890",
    category: "kategori-slug",
    image: "/images/urun-gorseli.jpg",
    isOem: true,
    compatibility: ["Model 1", "Model 2"],
    specifications: {
      "Özellik 1": "Değer 1",
      "Özellik 2": "Değer 2"
    }
  }
]
\`\`\`

### Kategori Ekleme

Aynı dosyada `categories` dizisini güncelleyin.

## İletişim Bilgileri

- **Telefon:** +90 542 850 92 17
- **Adres:** Acıyonca sokak, Zeytinlik kesimi, A/D plaza, No.2A, Girne, Kıbrıs
- **Website:** https://aliayartrading.com

## Lisans

© 2025 Ali Ayar Trading LTD. Tüm hakları saklıdır.
