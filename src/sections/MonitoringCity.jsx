import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'

gsap.registerPlugin(ScrollTrigger)

export default function MonitoringCity() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(6, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#mon-badge', { opacity: 0, y: -30 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 35%', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-monitoring" className="district">
      <SceneArt name="monitor" id="mon-img" />
      <div className="district-stage pointer-events-none">
        <div id="mon-badge" className="absolute top-[12vh] left-[10vw] flex flex-col gap-2" style={{ opacity: 0 }}>
          <img src="/real-devops-tools/original-svgs/prometheus-original.svg" alt="Prometheus" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/grafana.svg" alt="Grafana" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/elasticsearch-original.svg" alt="Elasticsearch" className="w-10 h-10 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center w-full">
          <p className="text-[#B388FF] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>MONITORING CITY → PROMETHEUS · GRAFANA · ELK · ALERTMANAGER</p>
        </div>
      </div>
    </section>
  )
}
