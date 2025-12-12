"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Search, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/arama?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.jpg" alt="Ali Ayar Trading Logo" width={70} height={70} className="h-16 w-16" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/urunler" className="text-sm font-semibold hover:text-primary transition-colors">
              Ürünler
            </Link>
            <Link href="/kategoriler" className="text-sm font-semibold hover:text-primary transition-colors">
              Kategoriler
            </Link>
            <Link href="/hakkimizda" className="text-sm font-semibold hover:text-primary transition-colors">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-sm font-semibold hover:text-primary transition-colors">
              İletişim
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-[200px] lg:w-[280px] border-2 focus-visible:border-primary"
                />
              </div>
            </form>

            <Button asChild size="lg" className="hidden md:inline-flex">
              <a href="tel:+905428509217">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">0542 850 92 17</span>
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </form>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/urunler"
                className="text-sm font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünler
              </Link>
              <Link
                href="/kategoriler"
                className="text-sm font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategoriler
              </Link>
              <Link
                href="/hakkimizda"
                className="text-sm font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="text-sm font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Button asChild className="w-full justify-start">
                <a href="tel:+905428509217">
                  <Phone className="h-4 w-4 mr-2" />
                  0542 850 92 17
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
