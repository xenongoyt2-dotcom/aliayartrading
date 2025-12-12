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

export const products: Product[] = [
  {
    id: "1",
    name: "Fren Diski Ön - W204 C Serisi",
    slug: "fren-diski-on-w204-c-serisi",
    description: "Mercedes-Benz W204 C Serisi için yüksek kaliteli ön fren diski. Üstün fren performansı ve uzun ömür.",
    partNumber: "A2044210912",
    category: "fren-diskleri",
    image: "/mercedes-brake-disc.jpg",
    isOem: true,
    compatibility: ["W204 C180", "W204 C200", "W204 C220", "W204 C250"],
    specifications: {
      Çap: "300mm",
      Kalınlık: "26mm",
      "Delik Sayısı": "5",
      "Merkez Deliği": "66.6mm",
    },
  },
  {
    id: "2",
    name: "Fren Balatası Ön - W212 E Serisi",
    slug: "fren-balatasi-on-w212-e-serisi",
    description: "W212 E Serisi için sessiz çalışma ve yüksek fren gücü sağlayan ön fren balatası seti.",
    partNumber: "A0044205420",
    category: "fren-balatalari",
    image: "/mercedes-brake-pads.jpg",
    isOem: false,
    compatibility: ["W212 E200", "W212 E220", "W212 E250", "W212 E300"],
    specifications: {
      "Balata Uzunluğu": "156.3mm",
      "Balata Genişliği": "63.8mm",
      "Balata Kalınlığı": "17.5mm",
      Adet: "4 Parça (Set)",
    },
  },
  {
    id: "3",
    name: "Hava Filtresi - W221 S Serisi",
    slug: "hava-filtresi-w221-s-serisi",
    description: "W221 S Serisi motor hava filtresi. Motor performansını optimize eder ve korur.",
    partNumber: "A2780940004",
    category: "hava-filtreleri",
    image: "/mercedes-air-filter.jpg",
    isOem: true,
    compatibility: ["W221 S320", "W221 S350", "W221 S400", "W221 S450"],
    specifications: {
      Uzunluk: "370mm",
      Genişlik: "145mm",
      Yükseklik: "60mm",
      Materyal: "Selüloz",
    },
  },
  {
    id: "4",
    name: "Yağ Filtresi - OM651 Motor",
    slug: "yag-filtresi-om651-motor",
    description: "OM651 dizel motorlar için yüksek filtreleme kapasiteli yağ filtresi.",
    partNumber: "A6511800009",
    category: "yag-filtreleri",
    image: "/mercedes-oil-filter.jpg",
    isOem: false,
    compatibility: ["C220 CDI", "E220 CDI", "E250 CDI", "Sprinter 316 CDI"],
    specifications: {
      Çap: "93mm",
      Yükseklik: "142mm",
      "Dış Diş": "M16x1.5",
      Filtrasyon: "10 micron",
    },
  },
  {
    id: "5",
    name: "Genleşme Tankı (Su Deposu) - W204",
    slug: "genlese-tanki-su-deposu-w204",
    description: "W204 C Serisi soğutma sistemi genleşme tankı. Yüksek ısıya dayanıklı plastik malzeme.",
    partNumber: "A2045000549",
    category: "su-depolari",
    image: "/mercedes-coolant-tank.jpg",
    isOem: true,
    compatibility: ["W204 C180", "W204 C200", "W204 C220", "W204 C250", "W204 C300"],
    specifications: {
      Kapasite: "1.5L",
      Malzeme: "Poliamid",
      Renk: "Siyah",
      "Sensör Yuvası": "Var",
    },
  },
  {
    id: "6",
    name: "Silindir Kapak Contası - M271 Motor",
    slug: "silindir-kapak-contasi-m271-motor",
    description: "M271 benzinli motorlar için OEM kalitesinde silindir kapak contası seti.",
    partNumber: "A2710161320",
    category: "contalar",
    image: "/mercedes-head-gasket.jpg",
    isOem: true,
    compatibility: ["C180 Kompressor", "C200 Kompressor", "E200 Kompressor", "SLK200 Kompressor"],
    specifications: {
      "Motor Tipi": "M271",
      "Silindir Sayısı": "4",
      "Set İçeriği": "Tam Set",
      Malzeme: "Çok Katmanlı Çelik",
    },
  },
  {
    id: "7",
    name: "Xenon Far Ampulü - D1S",
    slug: "xenon-far-ampulu-d1s",
    description: "Yüksek performanslı D1S Xenon far ampulü. Daha parlak ve uzun ömürlü aydınlatma.",
    partNumber: "A0028202526",
    category: "aydinlatma",
    image: "/xenon-headlight-bulb.jpg",
    isOem: false,
    compatibility: ["W204", "W212", "W221", "W207", "W166"],
    specifications: {
      Tip: "D1S",
      Voltaj: "85V",
      Güç: "35W",
      "Renk Sıcaklığı": "4300K",
    },
  },
  {
    id: "8",
    name: "Ön Amortisör Takozu - W204",
    slug: "on-amortisor-takozu-w204",
    description: "W204 C Serisi ön amortisör üst takozu. Sessiz ve konforlu sürüş için.",
    partNumber: "A2043230520",
    category: "suspensiyon",
    image: "/mercedes-shock-mount.jpg",
    isOem: true,
    compatibility: ["W204 C180", "W204 C200", "W204 C220", "W204 C250"],
    specifications: {
      Konum: "Ön",
      Adet: "1 Adet",
      Rulman: "Dahil",
      Montaj: "Direk Montaj",
    },
  },
]

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
