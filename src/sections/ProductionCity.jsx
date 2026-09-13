import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import ToolDecor from '../components/ToolDecor'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function ProductionCity() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(10, sectionRef.current) }, [registerSection])
  const data = sceneWork.production

  return (
    <section ref={sectionRef} id="section-production" className="district">
      <SceneArt name="production" id="prod-img" />
      <ToolDecor district="production" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="left">
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
        </OverlayRail>
        <SceneCaption>PRODUCTION · FEATURED ARTIFACTS LIVE</SceneCaption>
      </div>
    </section>
  )
}
