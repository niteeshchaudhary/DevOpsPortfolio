import { C, SPINE_X, RAIL_X } from '../world/constants'

export default function SceneTransition({ type }) {
  const defs = {
    pipeline: { label: 'PIPELINE COMPLETE · OPENING REGISTRY', color: C.water },
    conveyor: { label: 'ARTIFACTS ON THE LINE', color: C.ci },
    railway: { label: 'IMAGES ON THE RAIL', color: C.healthy },
    bridge: { label: 'SERVICES CROSS THE SPAN', color: C.water },
  }
  const config = defs[type] || defs.pipeline
  const flow = type === 'conveyor' ? C.ci : type === 'railway' ? C.healthy : C.water

  return (
    <div className="relative w-full pointer-events-none overflow-hidden" style={{ height: '10vh', minHeight: 72 }}>
      <svg viewBox="0 0 1920 240" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="wd-metal-t" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5B6470" />
            <stop offset="100%" stopColor="#262C34" />
          </linearGradient>
        </defs>
        <rect width="1920" height="240" fill="#0A0F14" />
        <rect x={SPINE_X} y="0" width="30" height="240" rx="7" fill="url(#wd-metal-t)" stroke={C.steelHi} strokeOpacity="0.4" />
        <rect x={SPINE_X + 5} y="0" width="20" height="240" rx="4" fill="#070A0E" />
        <line className="spine-flow" x1={SPINE_X + 15} y1="0" x2={SPINE_X + 15} y2="240" stroke={flow} strokeWidth="2.2" strokeDasharray="14 18" />
        <rect x={RAIL_X} y="0" width="22" height="240" rx="6" fill="url(#wd-metal-t)" stroke={C.steelHi} strokeOpacity="0.4" />
        <rect x={RAIL_X + 4} y="0" width="14" height="240" rx="3" fill="#070A0E" />
        <line className="spine-flow" x1={RAIL_X + 11} y1="0" x2={RAIL_X + 11} y2="240" stroke={C.healthy} strokeWidth="1.8" strokeDasharray="10 16" />
        <rect x={SPINE_X + 30} y="108" width={RAIL_X - SPINE_X - 30} height="16" rx="5" fill="#262C34" stroke={C.steelHi} strokeOpacity="0.35" />
        <line className="spine-flow" x1={SPINE_X + 36} y1="116" x2={RAIL_X - 4} y2="116" stroke={flow} strokeWidth="1.6" strokeDasharray="12 16" strokeOpacity="0.7" />
        {type === 'conveyor' && [0, 1, 2, 3, 4].map((i) => (
          <rect key={i} className="world-belt" x={320 + i * 280} y="92" width="40" height="18" rx="3" fill="#252B33" stroke={C.ci} strokeOpacity="0.5" />
        ))}
        {type === 'railway' && (
          <g transform="translate(240, 70)">
            <g className="mech-train">
              <rect x="0" y="0" width="120" height="32" rx="5" fill="#3C434D" stroke="#596270" />
              <rect x="12" y="8" width="28" height="12" rx="2" fill="#171C24" />
              <circle cx="28" cy="34" r="7" fill="#20242A" stroke="#596270" />
              <circle cx="88" cy="34" r="7" fill="#20242A" stroke="#596270" />
              <circle cx="-8" cy="10" r="4" fill={C.ci} />
              <rect x="128" y="6" width="70" height="26" rx="4" fill="#252B33" stroke={C.healthy} />
              <rect x="206" y="6" width="70" height="26" rx="4" fill="#252B33" stroke={C.healthy} />
            </g>
          </g>
        )}
        {type === 'bridge' && [400, 700, 1000, 1300, 1600].map((x) => (
          <rect key={x} x={x} y="124" width="10" height="80" fill="#3C434D" />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-[11px] tracking-[0.28em]" style={{ color: config.color, fontFamily: 'JetBrains Mono' }}>
          {config.label}
        </p>
      </div>
    </div>
  )
}
