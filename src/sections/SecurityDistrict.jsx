import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'
import SceneArt from '../world/SceneArt'

gsap.registerPlugin(ScrollTrigger)

export default function SecurityDistrict() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(9, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#sec-badge', { opacity: 0, x: -50 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 35%', scrub: true },
        opacity: 1, x: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-security" className="district">
      <SceneArt name="security" id="sec-img" />
      <div className="district-stage pointer-events-none">
        <div id="sec-badge" className="absolute bottom-[20vh] right-[15vw] flex gap-3" style={{ opacity: 0 }}>
          <img src="/real-devops-tools/original-svgs/vault-original.svg" alt="Vault" className="w-12 h-12 object-contain" />
          <img src="/real-devops-tools/original-svgs/consul-original.svg" alt="Consul" className="w-10 h-10 object-contain" />
          <img src="/real-devops-tools/original-svgs/nginx-original.svg" alt="NGINX" className="w-10 h-10 object-contain" />
        </div>
        <div className="absolute bottom-[8vh] text-center w-full">
          <p className="text-[#F4B740] text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono' }}>SECURITY DISTRICT → FIREWALL · IAM · SECRETS · TLS · WAF</p>
        </div>
      </div>
    </section>
  )
}
