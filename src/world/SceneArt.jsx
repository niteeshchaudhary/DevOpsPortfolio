import { DISTRICTS } from './districts'

function LocalDefs() {
  return (
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
  )
}

export default function SceneArt({ name, id }) {
  const District = DISTRICTS[name]
  if (!District) return null
  return (
    <svg
      id={id}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden
    >
      <LocalDefs />
      <District />
    </svg>
  )
}
