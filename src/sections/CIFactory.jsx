import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function CIFactory() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(3, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#ci-img', { opacity: 0.1, scale: 0.75, x: 50 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=22% top', scrub: true },
        opacity: 1, scale: 1, x: 0, ease: 'power2.out',
      })
      gsap.fromTo('#ci-badge', { opacity: 0, y: -40 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=12% bottom', end: 'top+=35% top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
      gsap.fromTo('#ci-stages', { opacity: 0 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=25% bottom', end: 'top+=55% top', scrub: true },
        opacity: 1, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-ci" className="relative w-full overflow-hidden" style={{ height: '200vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="ci-img" src="/scenes/scene-04-ci-factory.svg" alt="CI Factory"
          className="w-full max-w-[86vw] max-h-[74vh] object-contain" />

        {/* Factory tools */}
        <div id="ci-badge" className="absolute top-[8vh] left-1/2 -translate-x-1/2 flex gap-4" style={{ opacity: 0 }}>
          <div className="bg-[#171C24] border border-[#2EE66B] rounded p-2">
            <img src="/real-devops-tools/original-svgs/docker.svg" alt="Docker" className="w-11 h-11 object-contain" />
            <p className="text-[#2EE66B] text-[7px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>DOCKER</p>
          </div>
          <div className="bg-[#171C24] border border-[#FF8F1F] rounded p-2">
            <img src="/real-devops-tools/original-svgs/jenkins-original.svg" alt="Jenkins" className="w-11 h-11 object-contain" />
            <p className="text-[#FF8F1F] text-[7px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>JENKINS</p>
          </div>
          <div className="bg-[#171C24] border border-[#00CFFF] rounded p-2">
            <img src="/real-devops-tools/original-svgs/kubernetes.svg" alt="K8s" className="w-11 h-11 object-contain" />
            <p className="text-[#00CFFF] text-[7px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>KUBERNETES</p>
          </div>
          <div className="bg-[#171C24] border border-[#B388FF] rounded p-2">
            <img src="/real-devops-tools/original-svgs/sonarqube-original.svg" alt="SonarQube" className="w-10 h-10 object-contain" />
            <p className="text-[#B388FF] text-[7px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>SONARQUBE</p>
          </div>
        </div>

        {/* Pipeline stage flow */}
        <div id="ci-stages" className="absolute bottom-[14vh] left-1/2 -translate-x-1/2" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.1em]" style={{ fontFamily: 'JetBrains Mono' }}>
            <span className="text-[#596270]">RECEIVE</span>
            <span className="text-[#00CFFF]">↓</span>
            <span className="text-[#2EE66B]">BUILD</span>
            <span className="text-[#00CFFF]">↓</span>
            <span className="text-[#FF8F1F]">TEST</span>
            <span className="text-[#00CFFF]">↓</span>
            <span className="text-[#B388FF]">SCAN</span>
            <span className="text-[#00CFFF]">↓</span>
            <span className="text-[#2EE66B]">PACKAGE</span>
            <span className="text-[#00CFFF]">↓</span>
            <span className="text-[#F4B740]">DEPLOY</span>
          </div>
        </div>

        <div className="absolute bottom-[7vh] text-center">
          <p className="text-[#FF8F1F] text-[10px] tracking-[0.15em]" style={{ fontFamily: 'JetBrains Mono' }}>
            CI FACTORY → CONTINUOUS INTEGRATION · AUTOMATED ASSEMBLY · QUALITY GATES
          </p>
        </div>

        {/* Easter egg: old TODO */}
        <p className="absolute top-[70vh] right-[12vw] text-[#FF5A5A] text-[7px] opacity-45 pointer-events-none" style={{ fontFamily: 'JetBrains Mono' }}>
          // TODO: Remove temporary fix (2024)
        </p>
      </div>
    </section>
  )
}
