import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function MonitoringCity() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(6, sectionRef.current) }, [registerSection])
  const data = sceneWork.monitor

  return (
    <section ref={sectionRef} id="section-monitoring" className="district">
      <SceneArt name="monitor" id="mon-img" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="left">
          {data.skills.map((g) => (
            <div key={g.name} className="overlay-focus overlay-card relative w-full border border-[#00CFFF]/25 bg-[#0D1117]/88 p-4 backdrop-blur-md">
              <p className="mb-2 text-[10px] tracking-[0.2em] text-[#B388FF]" style={{ fontFamily: 'JetBrains Mono' }}>{g.name.toUpperCase()}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="border border-[#00CFFF]/25 px-2 py-1 text-[10px] text-[#C5EEFF]" style={{ fontFamily: 'IBM Plex Mono' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </OverlayRail>
        <SceneCaption>MONITORING · SKILL UNITS HEALTHY</SceneCaption>
      </div>
    </section>
  )
}
