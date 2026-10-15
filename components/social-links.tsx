import { Facebook, Instagram } from "lucide-react"

const accounts = [
  {
    name: "Instagram",
    label: "@aliayarltd",
    href: "https://www.instagram.com/aliayarltd/",
    icon: Instagram,
    background: "bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4]",
  },
  {
    name: "Facebook",
    label: "Ali Ayar Trading LTD.",
    href: "https://www.facebook.com/profile.php?id=61577349766109",
    icon: Facebook,
    background: "bg-[#1877F2]",
  },
]

export function SocialLinks({
  compact = false,
  floating = false,
  className = "",
}: {
  compact?: boolean
  floating?: boolean
  className?: string
}) {
  const iconOnly = compact || floating

  return (
    <div className={`${floating ? "contents" : `flex ${compact ? "items-center gap-2" : "flex-col gap-3"}`} ${className}`}>
      {accounts.map(({ name, label, href, icon: Icon, background }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}: ${label}`}
          title={`${name}: ${label}`}
          className={`inline-flex items-center gap-3 rounded-full transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 ${iconOnly ? "justify-center shrink-0 text-white shadow-lg " + background + (floating ? " h-12 w-12 sm:h-14 sm:w-14" : " h-10 w-10") : "text-sm"}`}
        >
          {iconOnly ? (
            <Icon aria-hidden="true" className={floating ? "h-6 w-6" : "h-5 w-5"} />
          ) : (
            <>
              <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${background}`}>
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span>{label}</span>
            </>
          )}
        </a>
      ))}
    </div>
  )
}
