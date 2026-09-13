import { useRef, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'

export default function ContainerRegistry() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  useEffect(() => { if (sectionRef.current) registerSection(4, sectionRef.current) }, [registerSection])

  return (
    <section ref={sectionRef} id="section-registry" className="district">
      <SceneArt name="registry" id="reg-img" />
      <div className="district-stage pointer-events-none">
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex gap-3">
          <img src="/real-devops-tools/original-svgs/docker.svg" alt="DockerHub" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/portainer-original.svg" alt="Portainer" className="w-10 h-10 object-contain" />
          <img src="/real-devops-tools/original-svgs/rancher-original.svg" alt="Rancher" className="w-10 h-10 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center w-full">
          <p className="text-[#596270] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>CONTAINER REGISTRY → STORE · RETRIEVE · DEPLOY</p>
        </div>
      </div>
    </section>
  )
}
