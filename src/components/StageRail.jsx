import { useScroll } from '../ScrollContext'

const STAGES = [
  { label: 'COMMIT', href: '#section-git', from: 1 },
  { label: 'BUILD', href: '#section-pipeline', from: 2 },
  { label: 'TEST', href: '#section-ci', from: 3 },
  { label: 'IMAGE', href: '#section-registry', from: 4 },
  { label: 'SHIP', href: '#section-kubernetes', from: 5 },
  { label: 'WATCH', href: '#section-monitoring', from: 6 },
  { label: 'SERVE', href: '#section-production', from: 10 },
]

export default function StageRail() {
  const { currentSection } = useScroll()
  const active = STAGES.reduce((acc, s, i) => (currentSection >= s.from ? i : acc), -1)

  return (
    <aside className="stage-rail" aria-label="Pipeline stages">
      <span className="stage-rail-pipe" aria-hidden />
      {STAGES.map((s, i) => {
        const state = i < active ? 'done' : i === active ? 'run' : 'wait'
        return (
          <button
            key={s.label}
            type="button"
            className={`stage-rail-node is-${state}`}
            onClick={() => document.querySelector(s.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            <span className="stage-rail-led" />
            <span className="stage-rail-label">{s.label}</span>
          </button>
        )
      })}
    </aside>
  )
}
