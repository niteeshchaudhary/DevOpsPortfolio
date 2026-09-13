import { C, SPINE_X, RAIL_X } from './constants'

export function WorldDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="wd-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B6470" />
          <stop offset="55%" stopColor="#3C434D" />
          <stop offset="100%" stopColor="#262C34" />
        </linearGradient>
        <linearGradient id="wd-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#00B4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00B4FF" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="wd-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00CFFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#006A8A" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="wd-night" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1520" />
          <stop offset="100%" stopColor="#0A0F14" />
        </linearGradient>
        <filter id="wd-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

export function VPipe({ x = SPINE_X, y1 = 0, y2 = 1080, color = C.water, thick = 30 }) {
  const h = y2 - y1
  return (
    <g>
      <rect x={x} y={y1} width={thick} height={h} rx="7" fill="url(#wd-metal)" stroke={C.steelHi} strokeWidth="1" strokeOpacity="0.45" />
      <rect x={x + 5} y={y1} width={thick - 10} height={h} rx="4" fill={C.ink} opacity="0.85" />
      <rect x={x + 6} y={y1} width={6} height={h} rx="2" fill="url(#wd-glass)" />
      <line className="spine-flow" x1={x + thick / 2} y1={y1} x2={x + thick / 2} y2={y2}
        stroke={color} strokeWidth="2.2" strokeDasharray="14 20" strokeOpacity="0.75" />
    </g>
  )
}

export function HPipe({ x, y, w, color = C.water, thick = 18 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={thick} rx="6" fill="url(#wd-metal)" stroke={C.steelHi} strokeWidth="1" strokeOpacity="0.4" />
      <rect x={x} y={y + 4} width={w} height={thick - 8} rx="3" fill={C.ink} opacity="0.8" />
      <line className="spine-flow" x1={x} y1={y + thick / 2} x2={x + w} y2={y + thick / 2}
        stroke={color} strokeWidth="1.8" strokeDasharray="12 16" strokeOpacity="0.7" />
    </g>
  )
}

export function Junction({ x, y, color = C.water, label }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-22" y="-14" width="44" height="28" rx="8" fill={C.steelLo} stroke={C.steelHi} strokeWidth="1.2" />
      <circle r="6" fill={color} filter="url(#wd-glow)" className="spine-pulse" />
      {label && (
        <text y="-20" textAnchor="middle" fill={color} fontSize="9" fontFamily="JetBrains Mono" opacity="0.7">{label}</text>
      )}
    </g>
  )
}

export function Windows({ x, y, cols, rows, gapX = 16, gapY = 20, w = 7, h = 9, color = C.water }) {
  const nodes = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const on = ((r * 5 + c * 3) % 7) !== 0
      nodes.push(
        <rect key={`${r}-${c}`} x={x + c * gapX} y={y + r * gapY} width={w} height={h} rx="1"
          fill={on ? color : C.ink} opacity={on ? 0.45 + ((r + c) % 3) * 0.12 : 0.5} />
      )
    }
  }
  return <g>{nodes}</g>
}

export function Facade({ x, y, w, h, accent = C.water, ridge = true }) {
  const cols = Math.max(2, Math.floor((w - 16) / 16))
  const rows = Math.max(2, Math.floor((h - 28) / 20))
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={C.panel} stroke={C.steel} strokeWidth="1.4" />
      {ridge && <rect x={x} y={y} width={w} height="10" fill={C.steel} />}
      <rect x={x + 3} y={y + 3} width="3" height={h - 6} fill="#ffffff" opacity="0.04" />
      <Windows x={x + 10} y={y + 18} cols={cols} rows={rows} color={accent} />
    </g>
  )
}

export function Stack({ x, y, h = 90, smoke = true }) {
  return (
    <g>
      <rect x={x} y={y - h} width="14" height={h} fill={C.steelLo} stroke={C.steel} />
      <rect x={x - 4} y={y - h - 6} width="22" height="8" rx="1" fill={C.steelHi} />
      {smoke && (
        <g className="world-smoke" opacity="0.35">
          <ellipse cx={x + 7} cy={y - h - 18} rx="10" ry="5" fill={C.steelHi} />
          <ellipse cx={x + 10} cy={y - h - 34} rx="14" ry="7" fill={C.steelHi} opacity="0.7" />
          <ellipse cx={x + 6} cy={y - h - 52} rx="18" ry="9" fill={C.steelHi} opacity="0.4" />
        </g>
      )}
    </g>
  )
}

export function Pine({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-2" y="18" width="4" height="10" fill={C.ink} />
      <polygon points="0,0 12,20 -12,20" fill={C.steelMid} />
      <polygon points="0,-10 10,8 -10,8" fill={C.steel} />
      <polygon points="0,-20 8,-4 -8,-4" fill={C.steelHi} opacity="0.7" />
    </g>
  )
}

export function Cabin({ x, y }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <polygon points="-48,8 0,-36 48,8" fill={C.steel} />
      <rect x="-42" y="8" width="84" height="52" fill={C.panel} stroke={C.steel} />
      <rect x="-10" y="28" width="18" height="32" fill={C.ink} />
      <rect x="-32" y="22" width="14" height="12" fill={C.ci} opacity="0.55" />
      <rect x="16" y="22" width="14" height="12" fill={C.water} opacity="0.45" />
      <rect x="-2" y="-8" width="8" height="16" fill={C.steelLo} />
    </g>
  )
}

export function Crane({ x, y, reach = 220, color = C.ci }) {
  const dir = reach < 0 ? -1 : 1
  const span = Math.abs(reach)
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-10" y="-160" width="20" height="160" fill={C.steelLo} stroke={C.steel} />
      <rect x="-18" y="0" width="36" height="14" fill={C.steel} />
      <rect x={dir < 0 ? -span : 0} y="-150" width={span} height="10" fill={C.steelHi} />
      <circle cx="0" cy="-150" r="6" fill={color} filter="url(#wd-glow)" />
      <g className="mech-trolley" data-dir={dir} data-span={span}>
        <line x1={dir * span * 0.62} y1="-145" x2={dir * span * 0.62} y2="-48" stroke={C.steelHi} strokeWidth="2" />
        <rect x={dir * span * 0.62 - 16} y="-48" width="32" height="22" rx="2" fill={C.metal} stroke={color} />
      </g>
    </g>
  )
}

export function Gear({ x, y, r = 34, teeth = 12, reverse = false, color = C.steelHi }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <g className={reverse ? 'mech-gear-rev' : 'mech-gear'}>
        {Array.from({ length: teeth }).map((_, i) => (
          <rect
            key={i}
            x={-4}
            y={-r - 7}
            width="8"
            height="14"
            rx="1"
            fill={color}
            transform={`rotate(${(360 / teeth) * i})`}
          />
        ))}
        <circle r={r} fill={C.steelLo} stroke={C.steel} strokeWidth="2" />
        <circle r={r * 0.38} fill={C.ink} stroke={color} strokeWidth="1.5" />
        <circle r="4" fill={color} />
      </g>
    </g>
  )
}

export function Piston({ x, y, color = C.ci }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-12" y="0" width="24" height="78" rx="4" fill={C.steelLo} stroke={C.steel} />
      <rect x="-8" y="4" width="16" height="70" rx="2" fill={C.ink} />
      <g className="mech-piston">
        <rect x="-7" y="10" width="14" height="26" rx="2" fill={color} opacity="0.8" />
        <rect x="-3" y="36" width="6" height="18" fill={C.steelHi} />
      </g>
    </g>
  )
}

export function Packet({ x, y, color = C.water, axis = 'x', travel }) {
  const dist = travel ?? (axis === 'y' ? 56 : 72)
  return (
    <circle
      className={axis === 'y' ? 'mech-packet-y' : 'mech-packet-x'}
      cx={x}
      cy={y}
      r="5"
      data-travel={dist}
      style={{ ['--travel']: `${dist}px` }}
      fill={color}
      filter="url(#wd-glow)"
    />
  )
}

export function Tank({ x, y, r = 46, color = C.db, label }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="0" cy={r * 0.85} rx={r} ry={r * 0.28} fill={C.ink} opacity="0.5" />
      <rect x={-r} y={-r * 0.9} width={r * 2} height={r * 1.7} rx={r} fill={C.panel} stroke={C.steelHi} />
      <rect x={-r + 8} y={-r * 0.4} width={r * 2 - 16} height={r * 0.9} rx="8" fill={color} opacity="0.22" />
      <ellipse cx="0" cy={-r * 0.9} rx={r} ry={r * 0.22} fill={C.steel} />
      {label && (
        <text y="8" textAnchor="middle" fill={color} fontSize="11" fontFamily="JetBrains Mono">{label}</text>
      )}
    </g>
  )
}

export function Ship({ x, y, w = 160, color = C.healthy, dir = 1 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <g className="mech-ship" data-dir={dir}>
        <path d={`M0,18 L${w * 0.12},0 L${w * 0.88},0 L${w},18 L${w * 0.92},34 L${w * 0.08},34 Z`} fill={C.steelLo} stroke={C.steelHi} />
        <rect x={w * 0.22} y="-22" width={w * 0.28} height="24" fill={C.panel} stroke={C.steel} />
        <rect x={w * 0.54} y="-14" width={w * 0.2} height="16" fill={C.metal} />
        <rect x={w * 0.3} y="-16" width="12" height="8" fill={color} opacity="0.7" />
        <circle cx={w * 0.08} cy="18" r="3" fill={color} filter="url(#wd-glow)" />
      </g>
    </g>
  )
}

export function Conveyor({ x, y, w = 520 }) {
  const crates = Math.floor(w / 70)
  return (
    <g>
      <rect x={x} y={y} width={w} height="26" rx="6" fill={C.steel} stroke={C.steelHi} />
      <rect x={x + 4} y={y + 5} width={w - 8} height="16" rx="3" fill={C.ink} />
      {Array.from({ length: Math.floor(w / 90) }).map((_, i) => (
        <g key={`roll-${i}`} transform={`translate(${x + 30 + i * 90}, ${y + 13})`}>
          <g className="mech-roller">
            <circle r="8" fill={C.steelHi} />
            <circle r="3" fill={C.ink} />
            <line x1="-8" y1="0" x2="8" y2="0" stroke={C.ink} strokeWidth="1.5" />
          </g>
        </g>
      ))}
      {Array.from({ length: crates }).map((_, i) => (
        <g key={`crate-${i}`} transform={`translate(${x + 18 + i * 70}, ${y - 16})`}>
          <g className="world-belt">
            <rect width="36" height="18" rx="3" fill={C.metal} stroke={C.ci} strokeOpacity="0.6" />
            <rect x="4" y="4" width="28" height="4" rx="1" fill={C.ci} opacity="0.45" />
          </g>
        </g>
      ))}
    </g>
  )
}

export function Antenna({ x, y, h = 140 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <line x1="0" y1="0" x2="0" y2={-h} stroke={C.steelHi} strokeWidth="3" />
      <line x1="0" y1={-h * 0.45} x2="22" y2={-h * 0.7} stroke={C.steel} strokeWidth="2" />
      <line x1="0" y1={-h * 0.45} x2="-22" y2={-h * 0.7} stroke={C.steel} strokeWidth="2" />
      <g transform={`translate(0, ${-h})`}>
        <circle r="5" fill={C.water} filter="url(#wd-glow)" className="spine-pulse" />
        <g className="mech-radar">
          <line x1="0" y1="0" x2="20" y2="-14" stroke={C.water} strokeWidth="1.6" opacity="0.75" />
        </g>
      </g>
    </g>
  )
}

export function ScreenWall({ x, y, w = 280, h = 90 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={C.ink} stroke={C.steel} />
      <polyline points={`${x + 12},${y + h * 0.65} ${x + 40},${y + h * 0.4} ${x + 70},${y + h * 0.5} ${x + 110},${y + h * 0.22} ${x + 150},${y + h * 0.38} ${x + 190},${y + h * 0.18} ${x + 240},${y + h * 0.42} ${x + w - 12},${y + h * 0.3}`}
        fill="none" stroke={C.healthy} strokeWidth="1.6" className="spine-flow" />
      <rect x={x + 12} y={y + 10} width="54" height="10" rx="2" fill={C.logs} opacity="0.35" />
      <rect x={x + 74} y={y + 10} width="40" height="10" rx="2" fill={C.warn} opacity="0.3" />
    </g>
  )
}

export function SpinePair() {
  return (
    <g className="world-spine">
      <VPipe x={SPINE_X} y1={0} y2={1080} color={C.water} />
      <VPipe x={RAIL_X} y1={0} y2={1080} color={C.healthy} thick={22} />
    </g>
  )
}

export function Stars({ n = 28, seed = 0 }) {
  return (
    <g opacity="0.45">
      {Array.from({ length: n }).map((_, i) => (
        <circle key={i}
          cx={(40 + (i * 67 + seed * 13) % 1840)}
          cy={(18 + (i * 29 + seed * 7) % 220)}
          r={0.5 + (i % 4) * 0.35}
          fill="#fff"
          opacity={0.15 + (i % 5) * 0.1} />
      ))}
    </g>
  )
}
