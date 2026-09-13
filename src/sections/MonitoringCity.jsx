import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { PlantPanel, OverlayRail, SceneCaption } from '../components/OverlayPanel'
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
        <OverlayRail eyebrow={data.eyebrow} title={data.title}>
          {data.skills.map((g) => (
            <PlantPanel key={g.name} className="w-full p-4">
              <p className="plant-label mb-2">{g.name}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="plant-chip px-2 py-1 text-[10px]">{s}</span>
                ))}
              </div>
            </PlantPanel>
          ))}
        </OverlayRail>
        <SceneCaption>MONITORING · SKILL UNITS HEALTHY</SceneCaption>
      </div>
    </section>
  )
}
