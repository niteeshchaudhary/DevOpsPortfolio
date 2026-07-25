import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function ProductionCity() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(10, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#prod-img', { opacity: 0.08, scale: 0.72 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=22% top', scrub: true },
        opacity: 1, scale: 1, ease: 'power2.out',
      })
      gsap.fromTo('#prod-badge', { opacity: 0, y: 60 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=15% bottom', end: 'top+=40% top', scrub: true },
        opacity: 1, y: 0, ease: 'back.out(1.5)',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-production" className="relative w-full overflow-hidden" style={{ height: '200vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="prod-img" src="/scenes/scene-11-production.svg" alt="Production City" className="w-full max-w-[88vw] max-h-[76vh] object-contain" />
        <div id="prod-badge" className="absolute top-[12vh] left-1/2 -translate-x-1/2 flex gap-4" style={{ opacity: 0 }}>
          <div className="bg-[#171C24] px-4 py-2 rounded" style={{ border: '1px solid #2EE66B' }}>
            <p className="text-[#2EE66B] text-lg font-bold" style={{ fontFamily: 'JetBrains Mono' }}>PRODUCTION LIVE</p>
          </div>
        </div>
        <div className="absolute bottom-[8vh] text-center">
          <p className="text-[#2EE66B] text-xs tracking-[0.2em]" style={{ fontFamily: 'JetBrains Mono' }}>PRODUCTION CITY → ALL SYSTEMS OPERATIONAL</p>
        </div>
      </div>
    </section>
  )
}
