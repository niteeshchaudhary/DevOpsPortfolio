import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function FinaleScene() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(11, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#finale-img', { opacity: 0.08, scale: 1.15 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=20% top', scrub: true },
        opacity: 1, scale: 1, ease: 'power2.out',
      })
      gsap.fromTo('#finale-terminal', { opacity: 0, y: 30 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=25% bottom', end: 'top+=55% top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
      gsap.fromTo('#finale-projects', { opacity: 0 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=50% bottom', end: 'top+=80% top', scrub: true },
        opacity: 1, ease: 'power2.out',
      })
      gsap.fromTo('#finale-contact', { opacity: 0, y: 40 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=70% bottom', end: 'bottom top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-finale" className="relative w-full overflow-hidden" style={{ height: '250vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="finale-img" src="/scenes/scene-12-finale.svg" alt="Finale - Complete World" className="w-full max-w-[90vw] max-h-[65vh] object-contain" />

        {/* Engineer silhouette and terminal */}
        <div id="finale-terminal" className="absolute top-[15vh] left-[8vw] bg-[#0D1117] border border-[#F4B740] rounded-md p-4 w-[380px]" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-3 border-b border-[#171C24] pb-2">
            <span className="w-3 h-3 rounded-full bg-[#2EE66B] opacity-70" />
            <span className="text-[10px] text-[#F4B740] tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>
              cabin-terminal — ~/portfolio
            </span>
          </div>
          <div className="text-xs leading-relaxed space-y-1" style={{ fontFamily: 'IBM Plex Mono' }}>
            <span className="text-[#596270]">$ whoami</span>
            <span className="text-[#2EE66B] block mt-0.5">Niteesh Chaudhary</span>
            <span className="text-[#596270] block mt-2">$ cat /etc/skills</span>
            <span className="text-[#00CFFF] block mt-0.5">DevOps · Cloud · CI/CD · K8s · IaC</span>
            <span className="text-[#00CFFF]">Platform Engineering · Monitoring · Security</span>
            <span className="text-[#596270] block mt-2">$ uptime</span>
            <span className="text-[#2EE66B] block mt-0.5">99.99% availability · 24/7 automation</span>
            <span className="text-[#00CFFF] mt-1 inline-block">█</span>
          </div>
        </div>

        {/* Project Gallery */}
        <div id="finale-projects" className="absolute top-[45vh] right-[6vw] flex flex-col gap-3" style={{ opacity: 0 }}>
          <p className="text-[#F4B740] text-[10px] tracking-[0.15em] mb-1" style={{ fontFamily: 'JetBrains Mono' }}>PROJECTS</p>
          {[
            { name: 'Kubernetes Platform', tag: 'EKS · Helm · ArgoCD', color: '#00CFFF' },
            { name: 'CI/CD Pipeline Suite', tag: 'GitHub Actions · Jenkins', color: '#2EE66B' },
            { name: 'Infrastructure as Code', tag: 'Terraform · Ansible · Packer', color: '#B388FF' },
            { name: 'Monitoring Stack', tag: 'Prometheus · Grafana · ELK', color: '#FF8F1F' },
            { name: 'Security Framework', tag: 'Vault · WAF · IAM · TLS', color: '#F4B740' },
            { name: 'Database HA', tag: 'Patroni · PostgreSQL · Redis', color: '#4FC3F7' },
          ].map((p, i) => (
            <div key={i} className="bg-[#171C24] border border-[#262C34] rounded px-4 py-2 w-[300px]">
              <p className="text-[10px] tracking-wide" style={{ color: p.color, fontFamily: 'JetBrains Mono', fontWeight: 600 }}>{p.name}</p>
              <p className="text-[#596270] text-[8px] mt-0.5" style={{ fontFamily: 'IBM Plex Mono' }}>{p.tag}</p>
            </div>
          ))}
        </div>

        {/* Contact hub */}
        <div id="finale-contact" className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 flex gap-8 items-center" style={{ opacity: 0 }}>
          <a href="https://github.com" target="_blank" rel="noopener" className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
            <img src="/real-devops-tools/original-svgs/github.svg" alt="GitHub" className="w-10 h-10 object-contain" />
            <span className="text-[#B388FF] text-[8px] tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>GITHUB</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded bg-[#171C24] border border-[#00CFFF] flex items-center justify-center text-[#00CFFF] text-xs" style={{ fontFamily: 'JetBrains Mono' }}>in</div>
            <span className="text-[#00CFFF] text-[8px] tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>LINKEDIN</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded bg-[#171C24] border border-[#2EE66B] flex items-center justify-center text-xs">📄</div>
            <span className="text-[#2EE66B] text-[8px] tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>RESUME</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded bg-[#171C24] border border-[#FF8F1F] flex items-center justify-center text-xs">📧</div>
            <span className="text-[#FF8F1F] text-[8px] tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>EMAIL</span>
          </a>
        </div>

        {/* Achievement timeline */}
        <div className="absolute bottom-[25vh] left-1/2 -translate-x-1/2 flex gap-4 text-[7px]" style={{ fontFamily: 'JetBrains Mono' }}>
          {['INFRA', 'PIPELINE', 'CONTAINERS', 'KUBERNETES', 'MONITORING', 'DATABASE', 'CLOUD', 'SECURITY', 'PRODUCTION'].map((stage, i) => (
            <span key={i} className={i < 9 ? 'text-[#2EE66B]' : 'text-[#F4B740]'} style={{ opacity: 0.6 + i * 0.04 }}>
              {stage} {i < 8 ? '→' : '✓'}
            </span>
          ))}
        </div>

        {/* Final message */}
        <div className="absolute bottom-[6vh] text-center">
          <p className="text-[#00CFFF] text-[11px] tracking-[0.25em]" style={{ fontFamily: 'JetBrains Mono' }}>
            ONE ENGINEER · ONE GIT PUSH · ONE FULLY OPERATIONAL WORLD
          </p>
        </div>
      </div>
    </section>
  )
}
