import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function GitSection() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(1, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#git-img', { opacity: 0.15, y: 80, scale: 0.85 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=30% top', scrub: true },
        opacity: 1, y: 0, scale: 1, ease: 'power2.out',
      })
      gsap.fromTo('#git-badge', { opacity: 0, x: -50 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=15% bottom', end: 'top+=40% top', scrub: true },
        opacity: 1, x: 0, ease: 'power2.out',
      })
      gsap.fromTo('#git-stats', { opacity: 0, y: 20 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=25% bottom', end: 'top+=55% top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-git" className="relative w-full overflow-hidden" style={{ height: '190vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="git-img" src="/scenes/scene-02-source-control.svg" alt="Source Control" className="w-full max-w-[82vw] max-h-[68vh] object-contain" />

        {/* Git stats panel */}
        <div id="git-stats" className="absolute top-[12vh] right-[8vw] bg-[#0D1117] border border-[#262C34] rounded-md px-4 py-3" style={{ opacity: 0, fontFamily: 'JetBrains Mono', fontSize: '9px' }}>
          <p className="text-[#2EE66B] tracking-wider mb-2">REPOSITORY STATUS</p>
          <p className="text-[#596270]">BRANCH <span className="text-[#00CFFF] ml-4">main</span></p>
          <p className="text-[#596270]">COMMITS <span className="text-[#2EE66B] ml-3">847</span></p>
          <p className="text-[#596270]">CONTRIB <span className="text-[#F4B740] ml-3">12 devs</span></p>
          <p className="text-[#596270]">PR ACTIVE <span className="text-[#FF8F1F] ml-2">3 open</span></p>
        </div>

        {/* Tool badges */}
        <div id="git-badge" className="absolute bottom-[20vh] left-1/2 -translate-x-1/2 flex gap-4" style={{ opacity: 0 }}>
          <div className="bg-[#171C24] rounded p-2 border border-[#39414B]">
            <img src="/real-devops-tools/original-svgs/github.svg" alt="GitHub" className="w-12 h-12 object-contain" />
            <p className="text-[#596270] text-[7px] text-center mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>GITHUB</p>
          </div>
          <div className="bg-[#171C24] rounded p-2 border border-[#39414B]">
            <img src="/real-devops-tools/original-svgs/git.svg" alt="Git" className="w-12 h-12 object-contain" />
            <p className="text-[#596270] text-[7px] text-center mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>GIT</p>
          </div>
          <div className="bg-[#171C24] rounded p-2 border border-[#39414B]">
            <img src="/real-devops-tools/original-svgs/gitlab-original.svg" alt="GitLab" className="w-12 h-12 object-contain" />
            <p className="text-[#596270] text-[7px] text-center mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>GITLAB</p>
          </div>
          <div className="bg-[#171C24] rounded p-2 border border-[#39414B]">
            <img src="/real-devops-tools/original-svgs/bitbucket-original.svg" alt="Bitbucket" className="w-10 h-10 object-contain" />
            <p className="text-[#596270] text-[7px] text-center mt-1 tracking-wide" style={{ fontFamily: 'JetBrains Mono' }}>BITBUCKET</p>
          </div>
        </div>

        <div className="absolute bottom-[8vh] text-center">
          <p className="text-[#596270] text-[10px] tracking-[0.2em]" style={{ fontFamily: 'JetBrains Mono' }}>
            SOURCE CONTROL → DAM GATES OPEN → CODE WATER RELEASED
          </p>
        </div>

        {/* Easter egg: merge conflict warning */}
        <p className="absolute bottom-[30vh] right-[15vw] text-[#FF5A5A] text-[7px] opacity-60 pointer-events-none" style={{ fontFamily: 'JetBrains Mono' }}>
          // TODO: fix merge conflict in pipeline config
        </p>
      </div>
    </section>
  )
}
