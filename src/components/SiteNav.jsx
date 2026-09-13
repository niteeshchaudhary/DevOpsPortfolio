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
          className="plant-btn px-2 py-1 text-[9px]"
        >
          {l.label}
        </a>
      ))}
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="plant-btn px-2 py-1 text-[9px]"
      >
        GH
      </a>
    </nav>
  )
}
