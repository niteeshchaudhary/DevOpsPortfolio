import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SceneTransition({ type }) {
  const transitionRef = useRef(null)

  useEffect(() => {
    if (!transitionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.trans-water', { opacity: 0, x: -30 }, {
        scrollTrigger: { trigger: transitionRef.current, start: 'top 80%', end: 'bottom 20%', scrub: true },
        opacity: 1, x: 0, ease: 'power2.out',
      })
      gsap.fromTo('.trans-belt', { x: -40 }, {
        scrollTrigger: { trigger: transitionRef.current, start: 'top 70%', end: 'bottom 30%', scrub: true },
        x: 0, ease: 'none',
      })
      gsap.fromTo('.trans-rail', { x: -60 }, {
        scrollTrigger: { trigger: transitionRef.current, start: 'top 70%', end: 'bottom 25%', scrub: true },
        x: 0, ease: 'none',
      })
      gsap.fromTo('.trans-bridge', { opacity: 0, scaleX: 0.3, transformOrigin: 'left center' }, {
        scrollTrigger: { trigger: transitionRef.current, start: 'top 75%', end: 'bottom 25%', scrub: true },
        opacity: 1, scaleX: 1, ease: 'power2.out',
      })
      gsap.fromTo('.trans-pulse', { opacity: 0.2 }, {
        scrollTrigger: { trigger: transitionRef.current, start: 'top 60%', end: 'bottom 40%', scrub: true },
        opacity: 0.7, ease: 'power2.out',
      })
      gsap.fromTo('.trans-label', { opacity: 0, y: 15 }, {
        scrollTrigger: { trigger: transitionRef.current, start: 'top 80%', end: 'bottom 50%', scrub: true },
        opacity: 0.8, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  const transitionDefs = {
    pipeline: {
      label: 'CODE WATER → PIPELINE',
      color: '#00CFFF',
      height: '30vh',
    },
    conveyor: {
      label: 'BUILD ARTIFACTS → CONVEYOR',
      color: '#FF8F1F',
      height: '35vh',
    },
    railway: {
      label: 'CONTAINERS → MAGNETIC RAIL',
      color: '#2EE66B',
      height: '40vh',
    },
    bridge: {
      label: 'SERVICES → HARBOR BRIDGE',
      color: '#00CFFF',
      height: '35vh',
    },
  }

  const config = transitionDefs[type] || transitionDefs.pipeline

  return (
    <div ref={transitionRef} className="relative w-full pointer-events-none" style={{ height: config.height }}>
      <svg viewBox="0 0 1920 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="300" fill="#0A0F14" opacity="0.3" />

        {/* Pipeline transition */}
        {type === 'pipeline' && (
          <g>
            <rect className="trans-water" x="200" y="120" width="1520" height="18" rx="6" fill="#262C34" stroke="#596270" strokeWidth="1" strokeOpacity="0.4" />
            <rect className="trans-water" x="204" y="123" width="1512" height="12" rx="4" fill="#171C24" opacity="0.5" />
            <line x1="210" y1="129" x2="1710" y2="129" stroke="#00CFFF" strokeWidth="2" strokeDasharray="20 24" strokeOpacity="0.4" className="trans-water" />
            {[...Array(6)].map((_, i) => (
              <circle key={i} className="trans-pulse"
                cx={300 + i * 250} cy="129" r="4"
                fill="#00CFFF" filter="url(#river-glow)" opacity="0.4" />
            ))}
          </g>
        )}

        {/* Conveyor belt transition */}
        {type === 'conveyor' && (
          <g>
            <rect x="160" y="100" width="1600" height="30" rx="6" fill="#3C434D" stroke="#596270" strokeWidth="1" className="trans-belt" />
            <rect x="164" y="104" width="1592" height="22" rx="3" fill="#262C34" opacity="0.6" className="trans-belt" />
            {/* Rollers */}
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`translate(${250 + i * 200}, 115)`}>
                <circle r="8" fill="#596270" opacity="0.5" className="trans-belt" />
                <circle r="3" fill="#20242A" className="trans-belt" />
              </g>
            ))}
            {/* Packages moving */}
            {[...Array(4)].map((_, i) => (
              <g key={`pkg-${i}`} transform={`translate(${350 + i * 380}, 90)`} className="trans-belt">
                <rect x="-18" y="0" width="36" height="24" rx="4" fill="#39414B" stroke="#596270" strokeWidth="1" />
                <rect x="-14" y="4" width="28" height="8" rx="2" fill="#FF8F1F" opacity="0.4" />
                <text x="0" y="18" textAnchor="middle" fill="#FF8F1F" fontSize="6" fontFamily="JetBrains Mono" opacity="0.6">{['BUILD','TEST','SCAN','PKG'][i]}</text>
              </g>
            ))}
          </g>
        )}

        {/* Railway transition */}
        {type === 'railway' && (
          <g>
            <line x1="160" y1="80" x2="1760" y2="80" stroke="#596270" strokeWidth="3" strokeOpacity="0.4" className="trans-rail" />
            <line x1="160" y1="105" x2="1760" y2="105" stroke="#596270" strokeWidth="3" strokeOpacity="0.4" className="trans-rail" />
            {/* Rail ties */}
            {[...Array(30)].map((_, i) => (
              <line key={i} className="trans-rail"
                x1={160 + i * 55} y1="80" x2={170 + i * 55} y2="105"
                stroke="#3C434D" strokeWidth="2" strokeOpacity="0.3" />
            ))}
            {/* Train silhouette */}
            <g transform="translate(800, 60)" className="trans-rail">
              <rect x="-60" y="0" width="120" height="35" rx="6" fill="#3C434D" stroke="#596270" strokeWidth="1.5" />
              <rect x="-50" y="8" width="25" height="15" rx="3" fill="#171C24" />
              <circle cx="-30" cy="33" r="8" fill="#20242A" stroke="#596270" strokeWidth="1.5" />
              <circle cx="15" cy="33" r="8" fill="#20242A" stroke="#596270" strokeWidth="1.5" />
              <circle cx="50" cy="33" r="8" fill="#20242A" stroke="#596270" strokeWidth="1.5" />
              <g className="trans-pulse">
                <circle cx="-70" cy="12" r="4" fill="#FF8F1F" opacity="0.6" />
                <polygon points="-66,12 -52,-5 -52,29 -66,12" fill="#FF8F1F" opacity="0.12" />
              </g>
            </g>
          </g>
        )}

        {/* Bridge transition */}
        {type === 'bridge' && (
          <g>
            <rect x="300" y="130" width="1320" height="20" rx="4" fill="#262C34" stroke="#596270" strokeWidth="1" className="trans-bridge" />
            <rect x="310" y="134" width="1300" height="6" rx="2" fill="#20242A" opacity="0.6" className="trans-bridge" />
            {/* Support pillars */}
            {[400, 700, 1000, 1300, 1600].map((cx, i) => (
              <g key={i} transform={`translate(${cx}, 150)`} className="trans-bridge" opacity={0.5 + i * 0.1}>
                <rect x="-8" y="0" width="16" height="70" rx="4" fill="#3C434D" stroke="#596270" strokeWidth="0.5" strokeOpacity="0.3" />
                <rect x="-12" y="68" width="24" height="10" rx="3" fill="#262C34" />
              </g>
            ))}
            <line x1="320" y1="140" x2="1600" y2="140" stroke="#2EE66B" strokeWidth="1" strokeDasharray="15 25" strokeOpacity="0.3" />
          </g>
        )}
      </svg>

      {/* Transition label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="trans-label text-[11px] tracking-[0.25em] font-[JetBrains_Mono]" style={{ color: config.color, opacity: 0 }}>
          {config.label}
        </p>
      </div>
    </div>
  )
}
