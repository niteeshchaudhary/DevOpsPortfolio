import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { profile, social } from '../data/profile'

export default function FinaleScene() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(11, sectionRef.current) }, [registerSection])

  return (
    <section ref={sectionRef} id="section-finale" className="district">
      <SceneArt name="finale" id="finale-img" />
      <div className="district-stage">
        <OverlayRail eyebrow="COMMS" title={profile.name} side="left">
          <div className="overlay-focus overlay-card relative w-full border border-[#F4B740]/50 bg-[#0D1117]/88 p-5 backdrop-blur-md">
            <p className="text-[12px] leading-relaxed text-[#C8CDD3]">{profile.bio}</p>
            <p className="mt-3 text-[11px] text-[#00CFFF]" style={{ fontFamily: 'JetBrains Mono' }}>{profile.title}</p>
            <a href={`mailto:${profile.email}`} className="mt-4 block text-[#FF8F1F] hover:underline" style={{ fontFamily: 'IBM Plex Mono' }}>
              {profile.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-2">
              {social.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-3 py-1.5 text-[10px] tracking-[0.16em]"
                  style={{ fontFamily: 'JetBrains Mono', borderColor: s.color, color: s.color }}
                >
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </OverlayRail>
        <SceneCaption>{profile.handle} · WORLD ONLINE</SceneCaption>
      </div>
    </section>
  )
}
