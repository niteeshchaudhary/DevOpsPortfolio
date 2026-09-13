import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'

export default function CloudInfrastructure() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(8, sectionRef.current) }, [registerSection])

  return (
    <section ref={sectionRef} id="section-cloud" className="district">
      <SceneArt name="cloud" id="cloud-img" />
      <div className="district-stage pointer-events-none">
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex gap-3">
          <img src="/real-devops-tools/original-svgs/azure-original.svg" alt="Azure" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/googlecloud-original.svg" alt="GCP" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/digitalocean-original.svg" alt="DO" className="w-10 h-10 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center w-full">
          <p className="text-[#00CFFF] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>CLOUD INFRASTRUCTURE → AWS · AZURE · GCP · TERRAFORM IaC</p>
        </div>
      </div>
    </section>
  )
}
