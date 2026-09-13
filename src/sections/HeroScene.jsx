import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'
import AsciiPortrait from '../components/AsciiPortrait'
import SceneArt from '../world/SceneArt'
import { profile } from '../data/profile'

gsap.registerPlugin(ScrollTrigger)

const COMMANDS = [
  { text: '$ git status', delay: 0, color: '#596270' },
  { text: 'On branch main', delay: 1, color: '#2EE66B' },
  { text: 'nothing to commit, working tree clean', delay: 1.5, color: '#596270' },
  { text: '$ git add .', delay: 2, color: '#596270' },
  { text: '$ git commit -m "infrastructure deployment"', delay: 3, color: '#596270' },
  { text: '[main abc1234] infrastructure deployment', delay: 4, color: '#2EE66B' },
  { text: '12 files changed, 847 insertions(+)', delay: 4.5, color: '#00CFFF' },
  { text: '$ git push origin main', delay: 6, color: '#F4B740' },
  { text: 'Enumerating objects: 28, done.', delay: 7, color: '#596270' },
  { text: 'remote: Resolving deltas: 100% (28/28)', delay: 7.5, color: '#00CFFF' },
  { text: 'remote: Pipeline triggered ✓', delay: 8, color: '#2EE66B' },
  { text: `To github.com:${profile.handle}/k8_istio_krakend.git`, delay: 8.5, color: '#596270' },
  { text: 'main -> main', delay: 9, color: '#00CFFF' },
]

export default function HeroScene() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => { if (sectionRef.current) registerSection(0, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#hero-title', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power2.out' })
      gsap.fromTo('#hero-sub', { opacity: 0 }, { opacity: 0.7, duration: 1, delay: 0.7, ease: 'power2.out' })

      // Neofetch card: fade/slide in on first load, independent of the
      // scroll-scrubbed timeline so it's visible the moment the page loads.
      gsap.fromTo('#hero-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, ease: 'power2.out', duration: 1, delay: 0.2,
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= COMMANDS.length) { clearInterval(interval); return prev }
        return prev + 1
      })
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} id="section-hero" className="relative w-full overflow-hidden min-h-screen h-screen">
      <SceneArt name="arrival" id="hero-img" />
      <div className="relative z-10 w-full h-screen pointer-events-none">

        {/* Terminal overlay */}
        <div className="absolute top-[12vh] right-[4vw] bg-[#0D1117]/80 border border-[#262C34] rounded-md p-4 w-[min(92vw,540px)] shadow-lg backdrop-blur-sm"
          style={{ fontFamily: 'IBM Plex Mono' }}>
          <div className="flex items-center gap-2 mb-3 border-b border-[#171C24] pb-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5A5A] opacity-70" />
            <span className="w-3 h-3 rounded-full bg-[#F4B740] opacity-70" />
            <span className="w-3 h-3 rounded-full bg-[#2EE66B] opacity-70" />
            <span className="text-[10px] text-[#596270] ml-2 tracking-wider">terminal — portfolio.git</span>
          </div>
          <div className="text-xs leading-relaxed space-y-0.5 whitespace-nowrap">
            {COMMANDS.slice(0, visibleLines).map((cmd, i) => (
              <div key={i}>
                <span style={{ color: cmd.color }}>
                  {cmd.text}
                  {i === visibleLines - 1 && <span className="inline-block w-2 h-3 bg-[#00CFFF] ml-1 animate-pulse" />}
                </span>
              </div>
            ))}
            {visibleLines === COMMANDS.length && (
              <div className="mt-2 pt-1 border-t border-[#171C24]">
                <span className="text-[#2EE66B]">✓ Deployment pipeline active</span>
                <span className="inline-block w-2 h-3 bg-[#00CFFF] ml-1" style={{ animation: 'blink 1s step-end infinite' }} />
              </div>
            )}
          </div>
        </div>

        {/* Neofetch intro terminal — ASCII portrait + whoami */}
        <div id="hero-card" className="pointer-events-auto absolute bottom-[7vh] left-[3vw] bg-[#0D1117]/80 border border-[#39414B] rounded-md shadow-xl flex flex-col backdrop-blur-sm" style={{ opacity: 0, width: 'min(96vw, 760px)' }}>
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#171C24] bg-[#070A0E]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A5A] opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4B740] opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2EE66B] opacity-70" />
            <span className="text-[10px] text-[#596270] ml-2 tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>
              neofetch — portfolio.git
            </span>
          </div>

          <div className="flex gap-5 px-4 py-3 items-start min-w-0">
            <div className="shrink-0 overflow-visible" style={{ fontSize: '6px', lineHeight: '1' }}>
              <AsciiPortrait color="#00CFFF" />
            </div>
            <div className="text-[11px] leading-snug space-y-0.5 mt-0.5 shrink-0 whitespace-nowrap" style={{ fontFamily: 'IBM Plex Mono' }}>
              <div>
                <span className="text-[#00D5FF] font-bold">{profile.shortName}</span>
                <span className="text-[#596270]">@</span>
                <span className="text-[#00D5FF] font-bold">{profile.handle}</span>
              </div>
              <div className="text-[#39414B]">───────────────────</div>
              <div><span className="text-[#F4B740]">OS</span><span className="text-[#596270]">:       </span><span className="text-[#E0E0E0]">Software Engineer</span></div>
              <div><span className="text-[#F4B740]">Kernel</span><span className="text-[#596270]">:   </span><span className="text-[#E0E0E0]">K8s · Istio · ArgoCD</span></div>
              <div><span className="text-[#F4B740]">Shell</span><span className="text-[#596270]">:   </span><span className="text-[#E0E0E0]">bash · React · Python</span></div>
              <div><span className="text-[#F4B740]">Mail</span><span className="text-[#596270]">:    </span><span className="text-[#2EE66B]">{profile.email}</span></div>
              <div><span className="text-[#F4B740]">Pkgs</span><span className="text-[#596270]">:    </span><span className="text-[#E0E0E0]">Docker · Helm · OpenCV</span></div>
              <div><span className="text-[#F4B740]">Skills</span><span className="text-[#596270]">:  </span><span className="text-[#00CFFF]">Full stack · DevOps · AI</span></div>
              <div><span className="text-[#F4B740]">Host</span><span className="text-[#596270]">:    </span><span className="text-[#4FC3F7]">github.com/{profile.handle}</span></div>
              <div className="pt-1">
                <span className="text-[#596270]">$ </span>
                <span className="text-[#2EE66B]">whoami</span>
                <span className="inline-block w-2 h-3 bg-[#00CFFF] ml-1 align-middle animate-pulse" />
              </div>
            </div>
          </div>

          <div className="px-4 pb-3 pt-2 border-t border-[#171C24]">
            <p className="text-[#00CFFF] text-sm font-bold tracking-wider" style={{ fontFamily: 'JetBrains Mono' }}>
              HELLO, I'M {profile.shortName.toUpperCase()}
            </p>
            <p className="text-[#596270] text-[10px] mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>
              {profile.title.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <a href="#section-pipeline" className="text-[#2EE66B] text-[9px] tracking-wider px-2 py-0.5 border border-[#2EE66B] rounded hover:bg-[#2EE66B]/10" style={{ fontFamily: 'JetBrains Mono' }}>
                EXPLORE PROJECTS
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[#00CFFF] text-[9px] tracking-wider px-2 py-0.5 border border-[#00CFFF] rounded hover:bg-[#00CFFF]/10" style={{ fontFamily: 'JetBrains Mono' }}>
                GITHUB
              </a>
              <a href={`mailto:${profile.email}`} className="text-[#FF8F1F] text-[9px] tracking-wider px-2 py-0.5 border border-[#FF8F1F] rounded hover:bg-[#FF8F1F]/10" style={{ fontFamily: 'JetBrains Mono' }}>
                EMAIL
              </a>
            </div>
          </div>
        </div>

        {/* Easter eggs */}
        <div className="absolute top-[40vh] left-[8vw] opacity-70 pointer-events-none">
          <img src="/real-devops-tools/original-svgs/terraform.svg" alt="Terraform blueprint" className="w-7 h-7 object-contain rotate-12" />
          <span className="text-[#596270] text-[7px] block mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>IaC</span>
        </div>
        <div className="absolute bottom-[28vh] right-[20vw] opacity-80 pointer-events-none">
          <span className="text-[#F4B740] text-[8px]" style={{ fontFamily: 'JetBrains Mono' }}>
            Don't deploy<br/>on Friday.<br/>
          </span>
          <span className="inline-block mt-1 w-4 h-3 bg-[#F4B740] rounded opacity-60" />
        </div>

        {/* Title */}
        <div className="absolute bottom-[4vh] text-center w-full px-4">
          <h1 id="hero-title" className="text-[#00CFFF] text-[1.7rem] font-bold tracking-[0.12em]" style={{ fontFamily: 'JetBrains Mono', opacity: 0 }}>
            INFRASTRUCTURE DEPLOYMENT
          </h1>
          <p id="hero-sub" className="text-[#596270] text-xs mt-2" style={{ fontFamily: 'JetBrains Mono', opacity: 0 }}>
            scroll to follow the work through the plant
          </p>
        </div>
      </div>
    </section>
  )
}
