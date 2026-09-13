import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { categoryColor } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

function LockCorners() {
  return (
    <span className="pointer-events-none absolute inset-0" aria-hidden>
      <span className="overlay-corner absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#00CFFF]" />
      <span className="overlay-corner absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#00CFFF]" />
      <span className="overlay-corner absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#00CFFF]" />
      <span className="overlay-corner absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#00CFFF]" />
    </span>
  )
}

export function OverlayCard({ project }) {
  if (!project) return null
  const accent = categoryColor[project.category] || '#00CFFF'
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="overlay-focus overlay-card relative block w-full border border-[#00CFFF]/25 bg-[#0D1117]/72 p-4 pt-5 backdrop-blur-sm"
    >
      <LockCorners />
      <span className="overlay-scan" aria-hidden />
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[9px] tracking-[0.18em] text-[#596270]" style={{ fontFamily: 'JetBrains Mono' }}>
          {project.slug}
        </span>
        <span className="text-[9px] tracking-wider" style={{ fontFamily: 'JetBrains Mono', color: accent }}>
          {project.featured ? 'FEATURED' : project.category.toUpperCase()}
        </span>
      </div>
      <h3 className="text-[15px] font-semibold text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>
        {project.name}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-[#B4BCC4]" style={{ fontFamily: 'Inter, sans-serif' }}>
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="border border-[#2A313A] px-1.5 py-0.5 text-[9px] text-[#8A939D]" style={{ fontFamily: 'IBM Plex Mono' }}>
            {t}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[10px] tracking-[0.16em]" style={{ fontFamily: 'JetBrains Mono', color: accent }}>
        VIEW SOURCE →
      </p>
    </a>
  )
}

export function OverlayRail({ eyebrow, title, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const items = root.querySelectorAll('.overlay-focus')
      if (reduce) {
        gsap.set(items, { opacity: 1, y: 0, scale: 1, filter: 'none' })
        return
      }
      gsap.fromTo(items, {
        opacity: 0,
        y: 48,
        scale: 0.9,
        filter: 'blur(8px)',
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.75,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.closest('.district') || root,
          start: 'top 72%',
          end: 'bottom 22%',
          toggleActions: 'play reverse play reverse',
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-[8vw] pb-[8vh] pt-[6vh]">
      <div
        ref={ref}
        className="pointer-events-auto flex max-h-full w-[min(86vw,420px)] flex-col gap-3 overflow-auto"
      >
        <div className="overlay-focus overlay-card relative border border-[#00CFFF]/30 bg-[#0D1117]/75 px-4 py-3 backdrop-blur-sm">
          <LockCorners />
          <p className="text-[10px] tracking-[0.32em] text-[#00CFFF]" style={{ fontFamily: 'JetBrains Mono' }}>
            ◈ {eyebrow}
          </p>
          {title && (
            <p className="mt-1 text-base text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>{title}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export function SceneCaption({ children }) {
  return (
    <p
      className="pointer-events-none absolute bottom-[3%] left-0 right-0 z-20 text-center text-[10px] tracking-[0.18em] text-[#7A8490]"
      style={{ fontFamily: 'JetBrains Mono' }}
    >
      {children}
    </p>
  )
}
