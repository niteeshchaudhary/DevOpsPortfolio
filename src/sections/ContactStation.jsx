import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '../ScrollContext'

gsap.registerPlugin(ScrollTrigger)

export default function ContactStation() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)

  useEffect(() => { if (sectionRef.current) registerSection(11, sectionRef.current) }, [registerSection])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#contact-img', { opacity: 0.1, y: 35 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'top+=28% top', scrub: true },
        opacity: 1, y: 0, ease: 'power2.out',
      })
      gsap.fromTo('#contact-links', { opacity: 0 }, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top+=25% bottom', end: 'top+=50% top', scrub: true },
        opacity: 1, ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="section-contact" className="relative w-full overflow-hidden" style={{ height: '175vh' }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <img id="contact-img" src="/scenes/scene-12-finale.svg" alt="Finale" className="w-full max-w-[85vw] max-h-[68vh] object-contain" />
        <div className="absolute bottom-[20vh] text-center">
          <p className="text-[#00CFFF] text-sm tracking-widest mb-4" style={{ fontFamily: 'JetBrains Mono' }}>DEPLOYMENT COMPLETE</p>
          <div id="contact-links" className="flex gap-6 justify-center" style={{ opacity: 0 }}>
            <a href="https://github.com" target="_blank" rel="noopener" className="text-[#B388FF] text-xs hover:text-[#2EE66B] transition-colors" style={{ fontFamily: 'JetBrains Mono' }}>
              <img src="/real-devops-tools/original-svgs/github.svg" alt="GitHub" className="w-8 h-8 mb-1 object-contain mx-auto" />
              GitHub
            </a>
            <a href="#" className="text-[#00CFFF] text-xs hover:text-[#2EE66B] transition-colors" style={{ fontFamily: 'JetBrains Mono' }}>
              <div className="w-8 h-8 mb-1 mx-auto rounded bg-[#171C24]" style={{ border: '1px solid #39414B' }}>
                <span className="text-[10px] flex items-center justify-center h-full">📧</span>
              </div>
              Email
            </a>
            <a href="#" className="text-[#F4B740] text-xs hover:text-[#2EE66B] transition-colors" style={{ fontFamily: 'JetBrains Mono' }}>
              <div className="w-8 h-8 mb-1 mx-auto rounded bg-[#171C24]" style={{ border: '1px solid #39414B' }}>
                <span className="text-[10px] flex items-center justify-center h-full">📄</span>
              </div>
              Resume
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-[#00CFFF] text-xs hover:text-[#2EE66B] transition-colors" style={{ fontFamily: 'JetBrains Mono' }}>
              <div className="w-8 h-8 mb-1 mx-auto rounded bg-[#171C24]" style={{ border: '1px solid #39414B' }}>
                <span className="text-[10px] flex items-center justify-center h-full text-[#00CFFF]">in</span>
              </div>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
