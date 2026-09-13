import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayCard, OverlayRail, SceneCaption } from '../components/OverlayPanel'
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
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="right">
          {data.projects.map((p) => <OverlayCard key={p.id} project={p} />)}
          <a
            href={`mailto:${profile.email}`}
            className="overlay-focus overlay-card relative block w-full border border-[#F4B740]/50 bg-[#0D1117]/88 p-4 backdrop-blur-md"
          >
            <p className="text-[10px] tracking-[0.2em] text-[#F4B740]" style={{ fontFamily: 'JetBrains Mono' }}>CHECKPOINT</p>
            <p className="mt-2 text-[13px] text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>Available for work</p>
            <p className="mt-2 text-[12px] text-[#9AA3AD]">{profile.email}</p>
          </a>
        </OverlayRail>
        <SceneCaption>SECURITY · CLEARANCE FOR CONTACT</SceneCaption>
      </div>
    </section>
  )
}
