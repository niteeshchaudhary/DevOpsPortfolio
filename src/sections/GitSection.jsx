import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { OverlayRail, SceneCaption } from '../components/OverlayPanel'
import { sceneWork } from '../data/sceneWork'

export default function GitSection() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(1, sectionRef.current) }, [registerSection])
  const data = sceneWork.git

  return (
    <section ref={sectionRef} id="section-git" className="district">
      <SceneArt name="source" id="git-img" />
      <div className="district-stage">
        <OverlayRail eyebrow={data.eyebrow} title={data.title} side="right">
          {data.jobs.map((job) => (
            <div key={job.company} className="overlay-focus overlay-card relative w-full border border-[#00CFFF]/25 bg-[#0D1117]/88 p-4 backdrop-blur-md">
              <p className="text-[10px] text-[#00CFFF]" style={{ fontFamily: 'IBM Plex Mono' }}>{job.time}</p>
              <p className="mt-1 text-[13px] text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>{job.role}</p>
              <p className="mt-1 text-[11px] text-[#2EE66B]" style={{ fontFamily: 'JetBrains Mono' }}>{job.company}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-[#9AA3AD]">{job.detail}</p>
            </div>
          ))}
        </OverlayRail>
        <SceneCaption>SOURCE CONTROL · EXPERIENCE RELEASED</SceneCaption>
      </div>
    </section>
  )
}
