import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'

export default function DatabaseReservoir() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(7, sectionRef.current) }, [registerSection])

  return (
    <section ref={sectionRef} id="section-database" className="district">
      <SceneArt name="database" id="db-img" />
      <div className="district-stage pointer-events-none">
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex gap-3">
          <img src="/real-devops-tools/original-svgs/postgresql-original.svg" alt="PostgreSQL" className="w-14 h-14 object-contain" />
          <img src="/real-devops-tools/original-svgs/redis-original.svg" alt="Redis" className="w-11 h-11 object-contain" />
          <img src="/real-devops-tools/original-svgs/mongodb-original.svg" alt="MongoDB" className="w-11 h-11 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center w-full">
          <p className="text-[#4FC3F7] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>DATABASE RESERVOIR → PATRONI · REPLICATION · FAILOVER · HIGH AVAILABILITY</p>
        </div>
      </div>
    </section>
  )
}
