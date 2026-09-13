import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function PipelineSection() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(2, sectionRef.current) }, [registerSection])
  const data = sceneWork.pipeline

  return (
    <section ref={sectionRef} id="section-pipeline" className="district">
      <SceneArt name="pipeline" id="pipe-img" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="left">
          {data.projects.filter(Boolean).map((p) => <OverlayCard key={p.id} project={p} />)}
        </OverlayRail>
        <SceneCaption>PIPELINE · AI JOBS ON THE LINE</SceneCaption>
      </div>
    </section>
  )
}
