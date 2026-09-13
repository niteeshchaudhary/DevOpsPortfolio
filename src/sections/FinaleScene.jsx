import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayRail, PlantPanel, SceneCaption } from '../components/OverlayPanel'
import { profile, social } from '../data/profile'

export default function FinaleScene() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(11, sectionRef.current) }, [registerSection])

  return (
    <section ref={sectionRef} id="section-finale" className="district">
      <SceneArt name="finale" id="finale-img" />
      <div className="district-stage">
        <OverlayRail eyebrow="COMMS" title={profile.name}>
          <PlantPanel className="w-full p-5">
            <p className="plant-copy text-[12px]">{profile.bio}</p>
            <p className="plant-label mt-3">{profile.title}</p>
            <a href={`mailto:${profile.email}`} className="plant-copy mt-4 block text-[12px] text-[#00CFFF] hover:text-[#E8EDF2]">
              {profile.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-2">
              {social.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plant-btn py-1.5"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </PlantPanel>
        </OverlayRail>
        <SceneCaption>{profile.handle} · WORLD ONLINE</SceneCaption>
      </div>
    </section>
  )
}
