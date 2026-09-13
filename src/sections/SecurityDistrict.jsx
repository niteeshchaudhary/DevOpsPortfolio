import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayCard, OverlayRail, PlantPanel, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'
import { profile } from '../data/profile'

export default function SecurityDistrict() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(9, sectionRef.current) }, [registerSection])
  const data = sceneWork.security

  return (
    <section ref={sectionRef} id="section-security" className="district">
      <SceneArt name="security" id="sec-img" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title}>
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
          <PlantPanel
            as="a"
            href={`mailto:${profile.email}`}
            className="block w-full p-4"
          >
            <p className="plant-label">CHECKPOINT</p>
            <p className="plant-title mt-2 text-[13px]">Available for work</p>
            <p className="plant-copy mt-2 text-[12px]">{profile.email}</p>
          </PlantPanel>
        </OverlayRail>
        <SceneCaption>SECURITY · CLEARANCE FOR CONTACT</SceneCaption>
      </div>
    </section>
  )
}
