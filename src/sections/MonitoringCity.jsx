import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function MonitoringCity() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(6, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#mon-img', { opacity: 0.1, scale: 0.75 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=25% top', scrub: true },
        opacity: 1, scale: 1, ease: 'power2.out',
      })
      gsap.fromTo('#mon-badge', { opacity: 0, y: -30 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=15% bottom', end: 'top+=38% top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-monitoring" className="relative w-full overflow-hidden" style={{ height: '190vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="mon-img" src="/scenes/scene-07-monitoring.svg" alt="Monitoring City" className="w-full max-w-[85vw] max-h-[72vh] object-contain" />
        <div id="mon-badge" className="absolute top-[12vh] left-[10vw] flex flex-col gap-2" style={{ opacity: 0 }}>
          <img src="/real-devops-tools/original-svgs/prometheus-original.svg" alt="Prometheus" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/grafana.svg" alt="Grafana" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/elasticsearch-original.svg" alt="Elasticsearch" className="w-10 h-10 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center">
          <p className="text-[#B388FF] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>MONITORING CITY → PROMETHEUS · GRAFANA · ELK · ALERTMANAGER</p>
        </div>
      </div>
    </section>
  )
}
