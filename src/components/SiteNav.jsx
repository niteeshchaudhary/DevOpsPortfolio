import { profile } from '../data/profile'

const links = [
  { href: '#section-hero', label: 'START' },
  { href: '#section-pipeline', label: 'WORK' },
  { href: '#section-git', label: 'LOG' },
  { href: '#section-finale', label: 'COMMS' },
]

export default function SiteNav() {
  return (
    <nav className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex" aria-label="Site">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className="border border-[#262C34] bg-[#0D1117]/90 px-2 py-1 text-[9px] tracking-[0.2em] text-[#596270] hover:border-[#00CFFF] hover:text-[#00CFFF]"
          style={{ fontFamily: 'JetBrains Mono' }}
        >
          {l.label}
        </a>
      ))}
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#262C34] bg-[#0D1117]/90 px-2 py-1 text-[9px] tracking-[0.2em] text-[#B388FF] hover:border-[#B388FF]"
        style={{ fontFamily: 'JetBrains Mono' }}
      >
        GH
      </a>
    </nav>
  )
}
