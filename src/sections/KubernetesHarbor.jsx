import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import ToolDecor from '../components/ToolDecor'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function KubernetesHarbor() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(5, sectionRef.current) }, [registerSection])
  const data = sceneWork.harbor

  return (
    <section ref={sectionRef} id="section-kubernetes" className="district">
      <SceneArt name="harbor" id="k8s-img" />
      <ToolDecor district="harbor" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="right">
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
        </OverlayRail>
        <SceneCaption>KUBERNETES HARBOR · FLAGSHIP DEPLOY</SceneCaption>
      </div>
    </section>
  )
}
