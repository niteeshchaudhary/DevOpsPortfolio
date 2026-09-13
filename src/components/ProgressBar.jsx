import { useScroll } from '../ScrollContext'

export default function ProgressBar() {
  const { scrollProgress, currentSection, sections } = useScroll()
  const pct = Math.round(scrollProgress * 100)
  const tone = pct >= 80 ? '#2EE66B' : pct >= 30 ? '#F4B740' : '#FF5A5A'
  const status = pct >= 95 ? 'PRODUCTION' : pct >= 80 ? 'DEPLOYING' : pct >= 30 ? 'BUILDING' : 'INIT'

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 select-none">
      <div className="h-1 bg-[#0D1117]">
        <div
          className="h-full"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, #00CFFF, ${sections[currentSection]?.color || '#00CFFF'})`,
            boxShadow: '0 0 8px rgba(0, 207, 255, 0.45)',
          }}
        />
      </div>
      <div
        className="absolute left-4 top-3 flex items-center gap-2 text-[10px] tracking-[0.16em] text-[#596270]"
        style={{ fontFamily: 'JetBrains Mono' }}
      >
        <span>DEPLOY</span>
        <span className="text-[#00CFFF]">{pct}%</span>
        <span>|</span>
        <span className="text-[#E8EDF2]">{sections[currentSection]?.label || 'ARRIVAL'}</span>
      </div>
      <div
        className="absolute right-4 top-3 flex items-center gap-1 text-[10px] tracking-[0.16em] text-[#596270]"
        style={{ fontFamily: 'JetBrains Mono' }}
      >
        <span>STATUS</span>
        <span style={{ color: tone }}>{status}</span>
      </div>
    </div>
  )
}
