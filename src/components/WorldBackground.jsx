import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WorldBackground() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#bg-clouds-near', { x: -250, duration: 55, repeat: -1, ease: 'none' })
      gsap.to('#bg-clouds-mid', { x: -180, duration: 95, repeat: -1, ease: 'none' })
      gsap.to('#bg-clouds-far', { x: -140, duration: 150, repeat: -1, ease: 'none' })
      gsap.to('#bg-rain', { y: 220, duration: 2.5, repeat: -1, ease: 'none' })
      gsap.to('#bg-smoke-1', { y: -160, opacity: 0, duration: 9, repeat: -1, ease: 'none', yoyo: true, repeatRefresh: true })
      gsap.to('#bg-smoke-2', { y: -130, opacity: 0, duration: 12, repeat: -1, ease: 'none', yoyo: true, repeatRefresh: true })
      gsap.to('#bg-turbine', { rotation: 360, duration: 26, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
      gsap.to('#bg-water-line', { strokeDashoffset: -80, duration: 3.5, repeat: -1, ease: 'none' })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Deep background */}
        <rect width="1920" height="1080" fill="#0A0F14" />

        {/* Stars — subtle but present */}
        <g opacity="0.3">
          {[...Array(40)].map((_, i) => (
            <circle key={`s-${i}`}
              cx={40 + i * 48 + (i % 9) * 6} cy={10 + (i % 10) * 14}
              r={0.4 + (i % 4) * 0.35} fill="#fff" opacity={0.1 + (i % 6) * 0.08} />
          ))}
        </g>

        {/* Distant clouds */}
        <g id="bg-clouds-far" opacity="0.06">
          <path d="M 120 280 Q 240 245 360 270 Q 480 255 560 295 Q 540 335 360 320 L 120 320 Z" fill="#39414B" />
          <path d="M 680 260 Q 820 225 960 250 Q 1080 235 1160 275 Q 1140 315 960 300 L 680 300 Z" fill="#39414B" />
          <path d="M 1320 290 Q 1480 260 1600 280 Q 1700 270 1780 310 Q 1760 350 1600 335 L 1320 335 Z" fill="#39414B" />
        </g>
        <g id="bg-clouds-mid" opacity="0.05">
          <path d="M 40 420 Q 180 370 320 400 Q 440 380 520 435 Q 490 485 320 470 L 40 470 Z" fill="#39414B" />
          <path d="M 540 410 Q 700 350 860 395 Q 980 375 1060 430 Q 1020 485 860 465 L 540 465 Z" fill="#39414B" />
          <path d="M 1120 380 Q 1300 320 1480 365 Q 1600 345 1700 400 Q 1660 460 1480 440 L 1120 440 Z" fill="#39414B" />
        </g>
        <g id="bg-clouds-near" opacity="0.04">
          <path d="M 80 580 Q 260 510 440 560 Q 600 540 680 600 Q 640 670 440 645 L 80 645 Z" fill="#39414B" />
          <path d="M 780 550 Q 980 470 1180 535 Q 1360 510 1450 585 Q 1400 660 1180 635 L 780 635 Z" fill="#39414B" />
          <path d="M 1560 600 Q 1780 530 1940 585 Q 2020 580 2080 630 Q 2040 690 1940 670 L 1560 670 Z" fill="#39414B" />
        </g>

        {/* Rain — fade out via scroll driven by opacity change on parent group */}
        <g id="bg-rain" opacity="0.06">
          {[...Array(70)].map((_, i) => (
            <line key={`r-${i}`}
              x1={(i * 28 + (i % 5) * 7) % 1920} y1={(i * 16 + (i % 7) * 5) % 780 - 220}
              x2={(i * 28 + (i % 5) * 7 - 1) % 1920} y2={(i * 16 + (i % 7) * 5 + 8) % 780 - 212}
              stroke="#6CD8FF" strokeWidth="0.4" opacity="0.25" />
          ))}
        </g>

        {/* Continuous pipeline backbone across entire canvas */}
        <g opacity="0.1">
          <rect x="0" y="855" width="1920" height="14" rx="4" fill="#3C434D" stroke="#596270" strokeWidth="0.4" strokeOpacity="0.3" />
          <rect x="4" y="858" width="1912" height="8" rx="2" fill="#252B33" opacity="0.35" />
          <line id="bg-water-line" x1="0" y1="862" x2="1920" y2="862" stroke="#00CFFF" strokeWidth="1.2" strokeDasharray="14 22" strokeOpacity="0.3" />
        </g>

        {/* Vertical connector drops */}
        <g opacity="0.06">
          {[180, 440, 700, 960, 1220, 1480, 1740].map((x, i) => (
            <rect key={`vd-${i}`} x={x} y="869" width="8" height="70" rx="2" fill="#3C434D" stroke="#596270" strokeWidth="0.3" strokeOpacity="0.25" />
          ))}
        </g>

        {/* Mountains — reveal more detail lower down */}
        <g opacity="0.2">
          <path d="M0 935 L160 860 L300 895 L460 835 L600 875 L740 825 L880 885 L1020 845 L1160 880 L1300 830 L1440 890 L1580 855 L1740 910 L1880 870 L1920 900 L1920 1080 L0 1080Z" fill="#171C24" />
          <path d="M0 985 L190 920 L360 955 L520 905 L680 940 L840 895 L980 960 L1120 915 L1280 935 L1420 900 L1580 950 L1740 915 L1900 965 L1920 930 L1920 1080 L0 1080Z" fill="#0D1117" />
        </g>

        {/* Industrial chimneys */}
        <g opacity="0.15">
          <rect x="340" y="890" width="10" height="55" rx="2" fill="#262C34" />
          <rect x="336" y="888" width="18" height="6" rx="1" fill="#596270" />
          <g id="bg-smoke-1" opacity="0.05">
            <ellipse cx="345" cy="0" rx="14" ry="7" fill="#596270" />
            <ellipse cx="345" cy="-25" rx="20" ry="11" fill="#596270" />
            <ellipse cx="345" cy="-55" rx="28" ry="15" fill="#596270" />
          </g>
          <rect x="1520" y="880" width="12" height="45" rx="2" fill="#262C34" />
          <rect x="1516" y="878" width="20" height="5" rx="1" fill="#596270" />
          <g id="bg-smoke-2" opacity="0.04">
            <ellipse cx="1526" cy="0" rx="16" ry="9" fill="#596270" />
            <ellipse cx="1526" cy="-28" rx="24" ry="13" fill="#596270" />
            <ellipse cx="1526" cy="-60" rx="32" ry="17" fill="#596270" />
          </g>
        </g>

        {/* Wind turbine */}
        <g opacity="0.18" transform="translate(240, 845)">
          <line x1="0" y1="0" x2="0" y2="-85" stroke="#3C434D" strokeWidth="2" />
          <g id="bg-turbine" transform="translate(0, -87)">
            <path d="M0 0 L0 -28 L3.5 0Z" fill="#596270" />
            <path d="M0 0 L24.2 -14 L1.5 1.5Z" fill="#596270" />
            <path d="M0 0 L-24.2 -14 L-1.5 1.5Z" fill="#596270" />
            <circle cx="0" cy="0" r="3" fill="#262C34" />
          </g>
        </g>

        {/* Power transmission lines */}
        <g opacity="0.12">
          {[420, 1060, 1680].map((x, i) => (
            <g key={`pt-${i}`}>
              <path d={`M${x - 10} 910 L${x} 860 L${x + 10} 910Z`} fill="#3C434D" />
              <line x1={x} y1="860" x2={[1060, 1680, 420][i]} y2={855 + (i % 2) * 8} stroke="#3C434D" strokeWidth="1.2" />
              <line x1={x} y1="868" x2={[1060, 1680, 420][i]} y2={863 + (i % 2) * 8} stroke="#3C434D" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
          ))}
        </g>

        {/* Haze layers for depth */}
        <ellipse cx="1920" cy="1080" rx="520" ry="210" fill="#252B33" opacity="0.1" />
        <ellipse cx="0" cy="1080" rx="480" ry="200" fill="#252B33" opacity="0.08" />
      </svg>
    </div>
  )
}
