import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function PipelineSection() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(2, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#pipe-img', { opacity: 0.1, x: 80, scale: 0.8 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=25% top', scrub: true },
        opacity: 1, x: 0, scale: 1, ease: 'power2.out',
      })
      gsap.fromTo('#pipe-badge', { opacity: 0, scale: 0.3 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=15% bottom', end: 'top+=40% top', scrub: true },
        opacity: 1, scale: 1, ease: 'back.out(1.5)',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-pipeline" className="relative w-full overflow-hidden" style={{ height: '185vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="pipe-img" src="/scenes/scene-03-pipeline-network.svg" alt="Pipeline Network" className="w-full max-w-[85vw] max-h-[72vh] object-contain" />

        {/* Pipeline automation tools */}
        <div id="pipe-badge" className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 flex gap-3" style={{ opacity: 0 }}>
          <div className="bg-[#171C24] rounded p-2 border border-[#FF8F1F]">
            <img src="/real-devops-tools/original-svgs/jenkins-original.svg" alt="Jenkins" className="w-10 h-10 object-contain" />
            <p className="text-[#FF8F1F] text-[6px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>JENKINS</p>
          </div>
          <div className="bg-[#171C24] rounded p-2 border border-[#2EE66B]">
            <img src="/real-devops-tools/original-svgs/ansible.svg" alt="Ansible" className="w-10 h-10 object-contain" />
            <p className="text-[#2EE66B] text-[6px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>ANSIBLE</p>
          </div>
          <div className="bg-[#171C24] rounded p-2 border border-[#00CFFF]">
            <img src="/real-devops-tools/original-svgs/argocd-original.svg" alt="ArgoCD" className="w-10 h-10 object-contain" />
            <p className="text-[#00CFFF] text-[6px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>ARGOCD</p>
          </div>
          <div className="bg-[#171C24] rounded p-2 border border-[#B388FF]">
            <img src="/real-devops-tools/original-svgs/webpack-original.svg" alt="Webpack" className="w-10 h-10 object-contain" />
            <p className="text-[#B388FF] text-[6px] mt-1 text-center" style={{ fontFamily: 'JetBrains Mono' }}>BUILD</p>
          </div>
        </div>

        <div className="absolute bottom-[8vh] text-center">
          <p className="text-[#00CFFF] text-[10px] tracking-[0.15em]" style={{ fontFamily: 'JetBrains Mono' }}>
            PIPELINE NETWORK → WEBHOOK → PARALLEL JOBS → ARTIFACTS
          </p>
        </div>
      </div>
    </section>
  )
}
