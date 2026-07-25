import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function DatabaseReservoir() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(7, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#db-img', { opacity: 0.12, y: 45 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=28% top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-database" className="relative w-full overflow-hidden" style={{ height: '190vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="db-img" src="/scenes/scene-08-database.svg" alt="Database Reservoir" className="w-full max-w-[82vw] max-h-[70vh] object-contain" />
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex gap-3">
          <img src="/real-devops-tools/original-svgs/postgresql-original.svg" alt="PostgreSQL" className="w-14 h-14 object-contain" />
          <img src="/real-devops-tools/original-svgs/redis-original.svg" alt="Redis" className="w-11 h-11 object-contain" />
          <img src="/real-devops-tools/original-svgs/mongodb-original.svg" alt="MongoDB" className="w-11 h-11 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center">
          <p className="text-[#4FC3F7] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>DATABASE RESERVOIR → PATRONI · REPLICATION · FAILOVER · HIGH AVAILABILITY</p>
        </div>
      </div>
    </section>
  )
}
