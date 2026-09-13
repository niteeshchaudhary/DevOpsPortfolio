import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'

gsap.registerPlugin(ScrollTrigger)

export default function ProductionCity() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(10, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#prod-badge', { opacity: 0, y: 60 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 35%', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-production" className="district">
      <SceneArt name="production" id="prod-img" />
      <div className="district-stage pointer-events-none">
        <div id="prod-badge" className="absolute top-[12vh] left-1/2 -translate-x-1/2 flex gap-4" style={{ opacity: 0 }}>
          <div className="bg-[#171C24] px-4 py-2 rounded" style={{ border: '1px solid #2EE66B' }}>
            <p className="text-[#2EE66B] text-lg font-bold" style={{ fontFamily: 'JetBrains Mono' }}>PRODUCTION LIVE</p>
          </div>
        </div>
        <div className="absolute bottom-[8vh] text-center w-full pointer-events-auto">
          <p className="text-[#2EE66B] text-xs tracking-[0.2em]" style={{ fontFamily: 'JetBrains Mono' }}>PRODUCTION LIVE</p>
          <a href="#work" className="mt-3 inline-block text-[10px] tracking-[0.22em] text-[#00CFFF] hover:underline" style={{ fontFamily: 'JetBrains Mono' }}>
            OPEN ARTIFACT REGISTRY ↓
          </a>
        </div>
      </div>
    </section>
  )
}
