import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function DockerFactory() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(3, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#ci-img', { opacity: 0.12, scale: 0.78, x: 40 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=25% top', scrub: true },
        opacity: 1, scale: 1, x: 0, ease: 'power2.out',
      })
      gsap.fromTo('#ci-badge', { opacity: 0, y: -30 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=15% bottom', end: 'top+=38% top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-ci" className="relative w-full overflow-hidden" style={{ height: '190vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="ci-img" src="/scenes/scene-04-ci-factory.svg" alt="CI Factory" className="w-full max-w-[84vw] max-h-[72vh] object-contain" />

        {/* Pipeline stage indicators */}
        <div id="ci-badge" className="absolute top-[8vh] left-1/2 -translate-x-1/2 flex gap-6" style={{ opacity: 0 }}>
          <div className="bg-[#171C24] border border-[#2EE66B] rounded px-4 py-2 flex flex-col items-center">
            <img src="/real-devops-tools/original-svgs/docker.svg" alt="Docker" className="w-10 h-10 object-contain" />
            <p className="text-[#2EE66B] text-[8px] mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>DOCKER</p>
          </div>
          <div className="bg-[#171C24] border border-[#FF8F1F] rounded px-4 py-2 flex flex-col items-center">
            <img src="/real-devops-tools/original-svgs/jenkins-original.svg" alt="Jenkins" className="w-10 h-10 object-contain" />
            <p className="text-[#FF8F1F] text-[8px] mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>JENKINS</p>
          </div>
          <div className="bg-[#171C24] border border-[#00CFFF] rounded px-4 py-2 flex flex-col items-center">
            <img src="/real-devops-tools/original-svgs/kubernetes.svg" alt="K8s" className="w-10 h-10 object-contain" />
            <p className="text-[#00CFFF] text-[8px] mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>KUBERNETES</p>
          </div>
          <div className="bg-[#171C24] border border-[#B388FF] rounded px-4 py-2 flex flex-col items-center">
            <img src="/real-devops-tools/original-svgs/ansible.svg" alt="Ansible" className="w-9 h-9 object-contain" />
            <p className="text-[#B388FF] text-[8px] mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>ANSIBLE</p>
          </div>
        </div>

        {/* Conveyor stage labels */}
        <div className="absolute bottom-[12vh] text-center">
          <div className="flex gap-6 justify-center text-[9px] tracking-[0.15em]" style={{ fontFamily: 'JetBrains Mono' }}>
            <span className="text-[#2EE66B]">BUILD</span>
            <span className="text-[#00CFFF]">TEST</span>
            <span className="text-[#B388FF]">SCAN</span>
            <span className="text-[#FF8F1F]">PACKAGE</span>
            <span className="text-[#2EE66B]">APPROVE</span>
          </div>
        </div>

        {/* Easter egg: coffee mug */}
        <div className="absolute top-[65vh] left-[12vw] opacity-50 pointer-events-none">
          <p className="text-[#F4B740] text-[7px]" style={{ fontFamily: 'JetBrains Mono', opacity: 0.7 }}>sudo brew<br/>coffee</p>
          <div className="w-6 h-5 bg-[#FF8F1F] rounded-b mt-0.5 opacity-30" />
        </div>
      </div>
    </section>
  )
}
