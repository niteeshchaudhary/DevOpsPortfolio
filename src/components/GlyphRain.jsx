import { useEffect, useState } from 'react'

const GLYPHS = '0123456789ABCDEF01'
const COL_GAP = 32

function column(seed, len) {
  return Array.from({ length: len }, (_, j) => GLYPHS[(seed * 11 + j * 17) % GLYPHS.length]).join('\n')
}

function buildCols(width, height) {
  const count = Math.max(8, Math.ceil(width / COL_GAP))
  const line = 12 * 1.28
  const len = Math.max(48, Math.ceil(height / line) + 8)
  return Array.from({ length: count }, (_, i) => {
    const text = column(i + 2, len)
    return {
      left: i * COL_GAP,
      delay: `${-((i * 0.37) % 1) * (10 + (i % 5))}s`,
      duration: `${10 + (i % 5)}s`,
      text,
    }
  })
}

export default function GlyphRain() {
  const [cols, setCols] = useState(() => (
    buildCols(
      typeof window === 'undefined' ? 1280 : window.innerWidth,
      typeof window === 'undefined' ? 800 : window.innerHeight,
    )
  ))

  useEffect(() => {
    let t
    const sync = () => setCols(buildCols(window.innerWidth, window.innerHeight))
    const onResize = () => {
      clearTimeout(t)
      t = setTimeout(sync, 120)
    }
    window.addEventListener('resize', onResize)
    sync()
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="plant-rain" aria-hidden>
      {cols.map((c, i) => (
        <pre
          key={i}
          className="plant-rain-col"
          style={{
            left: c.left,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        >
          {c.text}
          {'\n'}
          {c.text}
        </pre>
      ))}
    </div>
  )
}
