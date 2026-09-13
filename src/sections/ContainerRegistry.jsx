import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function ContainerRegistry() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(4, sectionRef.current) }, [registerSection])
  const data = sceneWork.registry

  return (
    <section ref={sectionRef} id="section-registry" className="district">
      <SceneArt name="registry" id="reg-img" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="left">
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
        </OverlayRail>
        <SceneCaption>REGISTRY · WEB & GAME IMAGES</SceneCaption>
      </div>
    </section>
  )
}
