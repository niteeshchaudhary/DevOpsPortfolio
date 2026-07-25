import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function CloudInfrastructure() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(8, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#cloud-img', { opacity: 0.1, scale: 0.8 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=25% top', scrub: true },
        opacity: 1, scale: 1, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-cloud" className="relative w-full overflow-hidden" style={{ height: '180vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="cloud-img" src="/scenes/scene-09-cloud.svg" alt="Cloud Infrastructure" className="w-full max-w-[85vw] max-h-[72vh] object-contain" />
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 flex gap-3">
          <img src="/real-devops-tools/original-svgs/azure-original.svg" alt="Azure" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/googlecloud-original.svg" alt="GCP" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/digitalocean-original.svg" alt="DO" className="w-10 h-10 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center">
          <p className="text-[#00CFFF] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>CLOUD INFRASTRUCTURE → AWS · AZURE · GCP · TERRAFORM IaC</p>
        </div>
      </div>
    </section>
  )
}
