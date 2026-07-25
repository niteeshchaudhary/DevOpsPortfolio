import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AtmosphereLayer() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.to('#atmos-rain', {
        scrollTrigger: { trigger: document.body, start: 'top top', end: '20% top', scrub: true },
        opacity: 0, ease: 'power2.out',
      })
      gsap.to('#atmos-fog', {
        scrollTrigger: { trigger: document.body, start: 'top top', end: '20% top', scrub: true },
        opacity: 0.06, ease: 'none',
      })
      gsap.to('#atmos-mist', {
        scrollTrigger: { trigger: document.body, start: '15% top', end: '35% top', scrub: true },
        opacity: 0.08, ease: 'power2.out',
      })
      gsap.to('#atmos-sea-fog', {
        scrollTrigger: { trigger: document.body, start: '35% top', end: '50% bottom', scrub: true },
        opacity: 0.07, ease: 'power2.out',
      })
      gsap.to('#atmos-clear', {
        scrollTrigger: { trigger: document.body, start: '50% top', end: '65% top', scrub: true },
        opacity: 0.02, ease: 'power2.out',
      })
      gsap.to('#atmos-security', {
        scrollTrigger: { trigger: document.body, start: '65% top', end: '80% top', scrub: true },
        opacity: 0.06, ease: 'power2.out',
      })
      gsap.to('#atmos-sunrise', {
        scrollTrigger: { trigger: document.body, start: '80% top', end: '100% top', scrub: true },
        opacity: 0.15, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-[2]">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Rain overlay — heavy in Arrival/Source Control, fades */}
        <g id="atmos-rain" opacity="0.08">
          {[...Array(80)].map((_, i) => {
            const x = (i * 24 + (i % 7) * 8) % 1920
            const y1 = (i * 14 + (i % 5) * 9) % 1080
            return <line key={i} x1={x} y1={y1} x2={x - 1} y2={y1 + 9} stroke="#6CD8FF" strokeWidth="0.5" opacity="0.35" />
          })}
        </g>

        {/* Mountain fog — Arrival valley mist */}
        <g id="atmos-fog" opacity="0">
          <ellipse cx="400" cy="700" rx="300" ry="80" fill="#596270" opacity="0.25" />
          <ellipse cx="800" cy="800" rx="400" ry="60" fill="#596270" opacity="0.2" />
          <ellipse cx="1400" cy="750" rx="280" ry="70" fill="#596270" opacity="0.22" />
        </g>

        {/* Industrial mist — Pipeline/Factory valley */}
        <g id="atmos-mist" opacity="0">
          <ellipse cx="600" cy="500" rx="350" ry="100" fill="#596270" opacity="0.18" />
          <ellipse cx="1200" cy="550" rx="400" ry="90" fill="#596270" opacity="0.15" />
          <ellipse cx="960" cy="350" rx="600" ry="120" fill="#596270" opacity="0.1" />
        </g>

        {/* Sea fog — Harbor approach */}
        <g id="atmos-sea-fog" opacity="0">
          <ellipse cx="300" cy="600" rx="500" ry="140" fill="#596270" opacity="0.15" />
          <ellipse cx="1500" cy="650" rx="450" ry="130" fill="#596270" opacity="0.13" />
          {/* Water reflection */}
          <rect x="0" y="680" width="1920" height="400" fill="#00CFFF" opacity="0.04" />
        </g>

        {/* Clear night — Monitoring/Cloud sections */}
        <g id="atmos-clear" opacity="0">
          <ellipse cx="960" cy="540" rx="960" ry="540" fill="#00CFFF" opacity="0.03" />
        </g>

        {/* Security perimeter lighting — reddish glow */}
        <g id="atmos-security" opacity="0">
          <ellipse cx="1200" cy="600" rx="600" ry="300" fill="#FF5A5A" opacity="0.06" />
          <ellipse cx="400" cy="500" rx="400" ry="200" fill="#FF5A5A" opacity="0.04" />
        </g>

        {/* Golden sunrise — Production/Finale */}
        <g id="atmos-sunrise" opacity="0">
          <rect x="0" y="0" width="1920" height="1080" fill="url(#sunrise-grad)" opacity="0.15" />
          <ellipse cx="960" cy="1060" rx="800" ry="200" fill="#F4B740" opacity="0.15" />
          <ellipse cx="960" cy="1080" rx="600" ry="100" fill="#FF8F1F" opacity="0.1" />
        </g>

        <defs>
          <radialGradient id="sunrise-grad" cx="50%" cy="100%" r="70%">
            <stop offset="0%" stopColor="#F4B740" stopOpacity="0.15"/>
            <stop offset="50%" stopColor="#FF8F1F" stopOpacity="0.06"/>
            <stop offset="100%" stopColor="#0A0F14" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
