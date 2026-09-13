import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import ToolDecor from '../components/ToolDecor'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function DatabaseReservoir() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(7, sectionRef.current) }, [registerSection])
  const data = sceneWork.database

  return (
    <section ref={sectionRef} id="section-database" className="district">
      <SceneArt name="database" id="db-img" />
      <ToolDecor district="database" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="right">
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
        </OverlayRail>
        <SceneCaption>DATABASE · NETWORK PAYLOADS</SceneCaption>
      </div>
    </section>
  )
}
