import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ali Ayar Trading LTD - Mercedes-Benz Yedek Parça | Kıbrıs",
  description:
    "Kıbrıs'ta Mercedes-Benz orijinal ve yan sanayi yedek parçaları. Fren sistemleri, filtreler, motor parçaları, aydınlatma ve daha fazlası. Girne'de güvenilir hizmet.",
  keywords:
    "mercedes yedek parça, mercedes parça kıbrıs, girne mercedes parça, ali ayar trading, kıbrıs oto yedek parça, mercedes fren diski, mercedes filtre",
  authors: [{ name: "Ali Ayar Trading LTD" }],
  creator: "Ali Ayar Trading LTD",
  publisher: "Ali Ayar Trading LTD",
  metadataBase: new URL("https://aliayartrading.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://aliayartrading.com",
    siteName: "Ali Ayar Trading LTD",
    title: "Ali Ayar Trading - Mercedes-Benz Yedek Parça Uzmanı | Kıbrıs",
    description: "Mercedes-Benz orijinal ve yan sanayi yedek parçaları. Kıbrıs'ta güvenilir hizmet.",
    images: [
      {
        url: "/images/titlebar.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Ayar Trading Mercedes-Benz Yedek Parça",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Ayar Trading - Mercedes-Benz Yedek Parça",
    description: "Mercedes-Benz orijinal ve yan sanayi yedek parçaları. Kıbrıs'ta güvenilir hizmet.",
    images: ["/images/titlebar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/images/logo.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
    ],
    apple: "/images/logo.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  )
}
