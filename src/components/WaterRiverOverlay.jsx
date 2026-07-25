import { useEffect } from 'react'
import gsap from 'gsap'

export default function WaterRiverOverlay() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.river-particle', {
        x: () => 20 + Math.random() * 40,
        y: () => 200 + Math.random() * 600,
        duration: () => 3 + Math.random() * 5,
        repeat: -1,
        ease: 'none',
        stagger: { each: 0.3, from: 'random' },
      })
      gsap.to('.river-flow-line', {
        strokeDashoffset: -60,
        duration: 3,
        repeat: -1,
        ease: 'none',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      <svg width="100%" height="100vh" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Main pipeline spine running vertically */}
        <defs>
          <linearGradient id="river-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5B6470"/>
            <stop offset="50%" stopColor="#3C434D"/>
            <stop offset="100%" stopColor="#262C34"/>
          </linearGradient>
          <linearGradient id="river-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2"/>
            <stop offset="50%" stopColor="#00B4FF" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#00B4FF" stopOpacity="0.1"/>
          </linearGradient>
          <filter id="river-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Central vertical pipeline bundle */}
        <g opacity="0.15">
          {/* Main pipe */}
          <rect x="945" y="0" width="30" height="800" rx="6" fill="url(#river-metal)" stroke="#596270" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="949" y="2" width="22" height="796" rx="4" fill="url(#river-glass)" />

          {/* Branch pipes to left and right */}
          {[120, 320, 520, 720].map((y, i) => (
            <g key={i}>
              <rect x="935" y={y} width="10" height="160" rx="3" fill="#3C434D" stroke="#596270" strokeWidth="0.5" strokeOpacity="0.3" />
              <rect x="975" y={y + 40} width="10" height="120" rx="3" fill="#3C434D" stroke="#596270" strokeWidth="0.5" strokeOpacity="0.3" />
            </g>
          ))}

          {/* Water particles flowing down the main pipe */}
          <g filter="url(#river-glow)" opacity="0.6">
            {[...Array(20)].map((_, i) => (
              <circle key={i} className="river-particle"
                cx="960" cy={20 + i * 40} r="2.5"
                fill={i % 3 === 0 ? '#00CFFF' : i % 3 === 1 ? '#2EE66B' : '#B388FF'}
                opacity="0.8" />
            ))}
          </g>

          {/* Flow indicator lines inside pipe */}
          <line className="river-flow-line" x1="952" y1="0" x2="952" y2="800" stroke="#00CFFF" strokeWidth="1.5" strokeDasharray="14 20" strokeOpacity="0.4" />
          <line className="river-flow-line" x1="968" y1="20" x2="968" y2="820" stroke="#2EE66B" strokeWidth="1" strokeDasharray="10 30" strokeOpacity="0.3" />

          {/* Junction nodes */}
          {[100, 280, 460, 640].map((y, i) => (
            <g key={`junc-${i}`} transform={`translate(960, ${y})`}>
              <rect x="-20" y="-6" width="40" height="12" rx="6" fill="#262C34" stroke="#596270" strokeWidth="1" strokeOpacity="0.4" />
              <circle cx="0" cy="0" r="4" fill={i % 2 ? '#2EE66B' : '#00CFFF'} filter="url(#river-glow)" opacity="0.5" />
            </g>
          ))}
        </g>

        {/* Horizontal connector pipes at key section boundaries */}
        <g opacity="0.08">
          {/* Arrival → Source Control (connecting river from mountain to dam) */}
          <rect x="480" y="220" width="480" height="12" rx="4" fill="#3C434D" stroke="#596270" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="490" y1="226" x2="950" y2="226" stroke="#00CFFF" strokeWidth="1" strokeDasharray="10 14" strokeOpacity="0.3" />

          {/* Source Control → Pipeline Network */}
          <rect x="480" y="420" width="480" height="14" rx="4" fill="#3C434D" stroke="#596270" strokeWidth="0.5" strokeOpacity="0.25" />
          <line x1="490" y1="427" x2="950" y2="427" stroke="#2EE66B" strokeWidth="1" strokeDasharray="8 16" strokeOpacity="0.25" />

          {/* Pipeline → CI Factory */}
          <rect x="480" y="620" width="480" height="12" rx="4" fill="#3C434D" stroke="#596270" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1="490" y1="626" x2="950" y2="626" stroke="#FF8F1F" strokeWidth="1" strokeDasharray="9 15" strokeOpacity="0.3" />
        </g>
      </svg>
    </div>
  )
}
