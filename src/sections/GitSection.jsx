import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'
import { PlantPanel, OverlayRail, SceneCaption } from '../components/OverlayPanel'
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
        <OverlayRail eyebrow={data.eyebrow} title={data.title}>
          {data.jobs.map((job) => (
            <PlantPanel key={job.company} className="w-full p-4">
              <p className="plant-label">{job.time}</p>
              <p className="plant-title mt-1 text-[13px]">{job.role}</p>
              <p className="mt-1 text-[11px] text-[#2EE66B]" style={{ fontFamily: 'JetBrains Mono' }}>{job.company}</p>
              <p className="plant-copy mt-2 text-[12px]">{job.detail}</p>
            </PlantPanel>
          ))}
        </OverlayRail>
        <SceneCaption>SOURCE CONTROL · EXPERIENCE RELEASED</SceneCaption>
      </div>
    </section>
  )
}
