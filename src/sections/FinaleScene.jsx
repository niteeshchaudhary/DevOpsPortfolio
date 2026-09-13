import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { profile } from '../data/profile'

export default function FinaleScene() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(12, sectionRef.current) }, [registerSection])

  return (
    <section ref={sectionRef} id="section-finale" className="relative w-full overflow-hidden" style={{ height: '56vh', minHeight: 360 }}>
      <SceneArt name="finale" id="finale-img" />
      <div className="district-stage flex flex-col items-center justify-end pb-10">
        <p className="text-center text-[11px] tracking-[0.28em] text-[#00CFFF]" style={{ fontFamily: 'JetBrains Mono' }}>
          {profile.shortName.toUpperCase()} · {profile.handle} · WORLD ONLINE
        </p>
        <a href="#section-hero" className="mt-3 text-[10px] tracking-[0.2em] text-[#596270] hover:text-[#00CFFF]" style={{ fontFamily: 'JetBrains Mono' }}>
          RETURN TO SUMMIT
        </a>
      </div>
    </section>
  )
}
