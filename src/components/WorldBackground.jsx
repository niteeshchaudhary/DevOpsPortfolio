export default function WorldBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect width="1920" height="1080" fill="#0A0F14" />
        <g opacity="0.28">
          {Array.from({ length: 50 }).map((_, i) => (
            <circle key={i}
              cx={30 + i * 38 + (i % 7) * 9}
              cy={12 + (i % 11) * 16}
              r={0.4 + (i % 4) * 0.3}
              fill="#fff"
              opacity={0.12 + (i % 5) * 0.08} />
          ))}
        </g>
      </svg>
    </div>
  )
}
