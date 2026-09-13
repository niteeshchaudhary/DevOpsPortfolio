import { categoryColor } from '../data/projects'

export function OverlayCard({ project }) {
  if (!project) return null
  const accent = categoryColor[project.category] || '#00CFFF'
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[min(92vw,380px)] border border-[#262C34] bg-[#0D1117]/82 p-4 backdrop-blur-md transition-colors hover:border-[#00CFFF]/60"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[9px] tracking-[0.18em] text-[#596270]" style={{ fontFamily: 'JetBrains Mono' }}>
          {project.slug}
        </span>
        <span className="text-[9px] tracking-wider" style={{ fontFamily: 'JetBrains Mono', color: accent }}>
          {project.featured ? 'FEATURED' : project.category.toUpperCase()}
        </span>
      </div>
      <h3 className="text-[13px] font-semibold text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>
        {project.name}
      </h3>
      <p className="mt-2 text-[12px] leading-relaxed text-[#9AA3AD]" style={{ fontFamily: 'Inter, sans-serif' }}>
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="border border-[#2A313A] px-1.5 py-0.5 text-[9px] text-[#7A8490]" style={{ fontFamily: 'IBM Plex Mono' }}>
            {t}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[10px] tracking-[0.16em]" style={{ fontFamily: 'JetBrains Mono', color: accent }}>
        VIEW SOURCE →
      </p>
    </a>
  )
}

export function OverlayRail({ eyebrow, title, side = 'left', children }) {
  const pos = side === 'right' ? 'right-[3vw] items-end' : 'left-[3vw] items-start'
  return (
    <div className={`pointer-events-auto absolute top-[10%] ${pos} z-20 flex max-h-[78%] flex-col gap-3 overflow-auto`}>
      <div className="mb-1">
        <p className="text-[10px] tracking-[0.28em] text-[#00CFFF]" style={{ fontFamily: 'JetBrains Mono' }}>{eyebrow}</p>
        {title && (
          <p className="mt-1 text-sm text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>{title}</p>
        )}
      </div>
      {children}
    </div>
  )
}

export function SceneCaption({ children }) {
  return (
    <p
      className="pointer-events-none absolute bottom-[4%] left-0 right-0 text-center text-[10px] tracking-[0.18em] text-[#596270]"
      style={{ fontFamily: 'JetBrains Mono' }}
    >
      {children}
    </p>
  )
}
