import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AsciiPortrait from './AsciiPortrait'

gsap.registerPlugin(ScrollTrigger)

const BOOT_LINES = [
  { text: '> booting portfolio.git ...', color: '#596270' },
  { text: '> mounting scenes ............ ok', color: '#2EE66B' },
  { text: '> loading assets [████████] 100%', color: '#00CFFF' },
  { text: '> resolving fonts ........... ok', color: '#2EE66B' },
  { text: '> starting pipeline .......... ok', color: '#F4B740' },
  { text: '> READY', color: '#2EE66B' },
]

// Full-screen preloader that hides the flash of unstyled content (fonts/CSS
// settling after first paint) until the page is actually ready.
export default function Loader() {
  const [removed, setRemoved] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)
  const overlayRef = useRef(null)

  // Start at the top and lock scroll so a mid-page refresh can't land in
  // half-loaded content while the loader is up.
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = '' }
  }, [])

  // Reveal boot lines one by one for the terminal-boot feel.
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= BOOT_LINES.length) { clearInterval(interval); return prev }
        return prev + 1
      })
    }, 160)
    return () => clearInterval(interval)
  }, [])

  // Wait for fonts + window load, then fade out. A safety timeout guarantees
  // the loader never hangs the page if a resource stalls.
  useEffect(() => {
    if (removed) return
    let finished = false
    const overlay = overlayRef.current
    const fadeOut = () => {
      if (finished || !overlay) return
      finished = true
      document.documentElement.style.overflow = ''
      gsap.to(overlay, {
        opacity: 0, duration: 0.6, ease: 'power2.out',
        onComplete: () => {
          ScrollTrigger.refresh()
          setRemoved(true)
        },
      })
    }
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve()
    const loadReady = new Promise((res) => {
      if (document.readyState === 'complete') res()
      else window.addEventListener('load', res, { once: true })
    })
    Promise.all([fontsReady, loadReady]).then(() => setTimeout(fadeOut, 250))
    const safety = setTimeout(fadeOut, 5000)
    return () => clearTimeout(safety)
  }, [removed])

  if (removed) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-[#0A0F14] flex flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="overflow-hidden max-w-full" style={{ fontSize: '6px', lineHeight: '1' }}>
          <AsciiPortrait color="#00CFFF" />
        </div>

        <div className="bg-[#0D1117] border border-[#262C34] rounded-md px-4 py-3 w-[300px] max-w-full" style={{ fontFamily: 'IBM Plex Mono' }}>
          <div className="flex items-center gap-2 mb-2 border-b border-[#171C24] pb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5A5A] opacity-70" />
            <span className="w-2 h-2 rounded-full bg-[#F4B740] opacity-70" />
            <span className="w-2 h-2 rounded-full bg-[#2EE66B] opacity-70" />
            <span className="text-[9px] text-[#596270] ml-1 tracking-wider">init — portfolio</span>
          </div>
          <div className="text-[10px] leading-tight space-y-0.5">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} style={{ color: line.color }}>
                {line.text}
                {i === visibleLines - 1 && i < BOOT_LINES.length - 1 && (
                  <span className="inline-block w-1.5 h-2.5 bg-[#00CFFF] ml-1 align-middle animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
