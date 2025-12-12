import Link from "next/link"
import { Disc, CircleDot, Wind, Droplet, Cylinder, Box, Lightbulb, Settings } from "lucide-react"

interface CategoryCardProps {
  title: string
  href: string
  icon: string
}

const iconMap = {
  disc: Disc,
  brake: CircleDot,
  filter: Wind,
  oil: Droplet,
  water: Cylinder,
  gasket: Box,
  light: Lightbulb,
  suspension: Settings,
}

export function CategoryCard({ title, href, icon }: CategoryCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Box

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
      </div>
    </Link>
  )
}
