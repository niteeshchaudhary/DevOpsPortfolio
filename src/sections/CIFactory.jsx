import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function CIFactory() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(3, sectionRef.current) }, [registerSection])
  const data = sceneWork.factory

  return (
    <section ref={sectionRef} id="section-ci" className="district">
      <SceneArt name="factory" id="ci-img" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="right">
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
        </OverlayRail>
        <SceneCaption>CI FACTORY · DESKTOP ARTIFACTS</SceneCaption>
      </div>
    </section>
  )
}
