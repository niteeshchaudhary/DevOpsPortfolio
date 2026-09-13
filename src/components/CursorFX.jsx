import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, label, .plant-btn, .plant-panel, .overlay-card, .plant-chip, .hero-chip'
const SKIP_TAG = /^(HTML|BODY|MAIN|SVG|PATH|G|DEFS|SCRIPT|STYLE|#document)$/i
const SKIP_CLASS = /plant-cursor|plant-rain|atmos-layer|tool-decor|district-stage|hero-hud|hero-grid|hero-root|world-bg/

function isHuge(el) {
  const r = el.getBoundingClientRect()
  return r.width > window.innerWidth * 0.88 && r.height > window.innerHeight * 0.72
}

function classNameOf(el) {
  const c = el.getAttribute?.('class')
  return typeof c === 'string' ? c : ''
}

function pickGlowTarget(el) {
  if (!el || el.nodeType !== 1) return null
  if (el.closest?.('.plant-cursor')) return null

  const block = el.closest?.('.plant-panel, .overlay-card, .plant-btn')
  if (block && !isHuge(block)) return block

  const interactive = el.closest?.(INTERACTIVE)
  if (interactive && !isHuge(interactive)) return interactive

  let n = el
  while (n && n !== document.documentElement) {
    if (SKIP_TAG.test(n.tagName) || SKIP_CLASS.test(classNameOf(n)) || isHuge(n)) {
      n = n.parentElement
      continue
    }
    const r = n.getBoundingClientRect()
    if (r.width >= 10 && r.height >= 8) return n
    n = n.parentElement
  }
  return null
}

export default function CursorFX() {
  const dotRef = useRef(null)
  const trailRef = useRef(null)
  const pos = useRef({ x: -80, y: -80 })
  const trail = useRef(Array.from({ length: 8 }, () => ({ x: -80, y: -80 })))
  const hovering = useRef(false)
  const lit = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine) return
    setEnabled(true)
    document.documentElement.classList.add('has-plant-cursor')

    const light = (el, hot) => {
      const prev = lit.current
      if (prev && prev !== el) {
        prev.classList.remove('plant-lit', 'plant-lit-hot')
      }
      lit.current = el
      if (!el) return
      el.classList.add('plant-lit')
      el.classList.toggle('plant-lit-hot', hot)
    }

    const onMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      const target = pickGlowTarget(e.target)
      hovering.current = Boolean(target?.closest?.(INTERACTIVE))
      light(target, hovering.current)
    }

    window.addEventListener('pointermove', onMove, { passive: true })

    let raf
    const tick = () => {
      const { x, y } = pos.current

      if (dotRef.current) {
        const scale = hovering.current ? 1.35 : 1
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
        dotRef.current.classList.toggle('is-hot', hovering.current)
      }

      if (!reduce && trailRef.current) {
        const pts = trail.current
        pts[0].x += (x - pts[0].x) * 0.45
        pts[0].y += (y - pts[0].y) * 0.45
        for (let i = 1; i < pts.length; i++) {
          pts[i].x += (pts[i - 1].x - pts[i].x) * 0.38
          pts[i].y += (pts[i - 1].y - pts[i].y) * 0.38
        }
        const nodes = trailRef.current.children
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].style.transform = `translate3d(${pts[i].x}px, ${pts[i].y}px, 0)`
        }
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      if (lit.current) lit.current.classList.remove('plant-lit', 'plant-lit-hot')
      document.documentElement.classList.remove('has-plant-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="plant-cursor" aria-hidden>
      <div ref={trailRef} className="plant-cursor-trail">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="plant-cursor-spark" style={{ opacity: 0.28 - i * 0.03 }} />
        ))}
      </div>
      <div ref={dotRef} className="plant-cursor-dot" />
    </div>
  )
}
