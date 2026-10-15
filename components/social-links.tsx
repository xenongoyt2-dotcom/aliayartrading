import { Facebook, Instagram } from "lucide-react"

const accounts = [
  { name: "Instagram", label: "@aliayarltd", href: "https://www.instagram.com/aliayarltd/", icon: Instagram },
  { name: "Facebook", label: "Ali Ayar Trading LTD.", href: "https://www.facebook.com/profile.php?id=61577349766109", icon: Facebook },
]

export function SocialLinks({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <div className={`flex ${compact ? "items-center gap-2" : "flex-col gap-3"} ${className}`}>
      {accounts.map(({ name, label, href, icon: Icon }) => {
        const content = <><Icon aria-hidden="true" className="h-5 w-5 shrink-0" />{!compact && <span>{label}</span>}</>
        const styles = `inline-flex items-center gap-3 rounded-md transition-colors ${compact ? "p-2" : "text-sm"} ${href ? "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4" : ""}`
        return href ? (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${label}`} title={`${name}: ${label}`} className={styles}>{content}</a>
        ) : (
          <span key={name} title={`${name}: ${label}`} aria-label={`${name}: ${label}`} className={styles}>{content}</span>
        )
      })}
    </div>
  )
}
