import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function ContainerRegistry() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(4, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#reg-img', { opacity: 0.15, scale: 0.88 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=28% top', scrub: true },
        opacity: 1, scale: 1, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-registry" className="relative w-full overflow-hidden" style={{ height: '175vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="reg-img" src="/scenes/scene-05-registry.svg" alt="Container Registry" className="w-full max-w-[85vw] max-h-[72vh] object-contain" />
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex gap-3">
          <img src="/real-devops-tools/original-svgs/docker.svg" alt="DockerHub" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/portainer-original.svg" alt="Portainer" className="w-10 h-10 object-contain" />
          <img src="/real-devops-tools/original-svgs/rancher-original.svg" alt="Rancher" className="w-10 h-10 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center">
          <p className="text-[#596270] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>CONTAINER REGISTRY → STORE · RETRIEVE · DEPLOY</p>
        </div>
      </div>
    </section>
  )
}
