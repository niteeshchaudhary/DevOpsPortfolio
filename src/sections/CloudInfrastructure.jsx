import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import ToolDecor from '../components/ToolDecor'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function CloudInfrastructure() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(8, sectionRef.current) }, [registerSection])
  const data = sceneWork.cloud

  return (
    <section ref={sectionRef} id="section-cloud" className="district">
      <SceneArt name="cloud" id="cloud-img" />
      <ToolDecor district="cloud" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="left">
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
        </OverlayRail>
        <SceneCaption>CLOUD · MORE BUILDS ON THE GRID</SceneCaption>
      </div>
    </section>
  )
}
