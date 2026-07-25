import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function KubernetesHarbor() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(5, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#k8s-img', { opacity: 0.08, scale: 0.72, x: -60 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=22% top', scrub: true },
        opacity: 1, scale: 1, x: 0, ease: 'power2.out',
      })
      gsap.fromTo('#k8s-badge', { opacity: 0, x: 80 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=10% bottom', end: 'top+=38% top', scrub: true },
        opacity: 1, x: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-kubernetes" className="relative w-full overflow-hidden" style={{ height: '210vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="k8s-img" src="/scenes/scene-06-harbor.svg" alt="Kubernetes Harbor" className="w-full max-w-[88vw] max-h-[76vh] object-contain" />

        <div id="k8s-badge" className="absolute top-[8vh] right-[8vw] flex flex-col gap-2" style={{ opacity: 0 }}>
          <div className="bg-[#171C24] border border-[#326CE5] rounded p-3">
            <img src="/real-devops-tools/original-svgs/kubernetes.svg" alt="K8s" className="w-16 h-16 object-contain" />
            <p className="text-[#00CFFF] text-[7px] mt-1 text-center tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>KUBERNETES</p>
          </div>
          <div className="bg-[#171C24] border border-[#39414B] rounded p-2 flex gap-3">
            <img src="/real-devops-tools/original-svgs/helm-original.svg" alt="Helm" className="w-10 h-10 object-contain" />
            <img src="/real-devops-tools/original-svgs/argocd-original.svg" alt="ArgoCD" className="w-10 h-10 object-contain" />
            <img src="/real-devops-tools/original-svgs/envoy-original.svg" alt="Envoy" className="w-9 h-9 object-contain" />
          </div>
        </div>

        {/* Harbor metaphor labels */}
        <div className="absolute bottom-[14vh] left-1/2 -translate-x-1/2 flex gap-6 text-[8px] tracking-[0.12em]" style={{ fontFamily: 'JetBrains Mono' }}>
          <span className="text-[#00CFFF]">SHIPS=PODS</span>
          <span className="text-[#2EE66B]">BRIDGES=SERVICES</span>
          <span className="text-[#F4B740]">LIGHTHOUSE=INGRESS</span>
          <span className="text-[#FF5A5A]">CRANES=DEPLOY</span>
        </div>

        <div className="absolute bottom-[7vh] text-center">
          <p className="text-[#2EE66B] text-[10px] tracking-[0.15em]" style={{ fontFamily: 'JetBrains Mono' }}>
            KUBERNETES HARBOR → ORCHESTRATION · SCALING · SELF-HEALING
          </p>
        </div>
      </div>
    </section>
  )
}
