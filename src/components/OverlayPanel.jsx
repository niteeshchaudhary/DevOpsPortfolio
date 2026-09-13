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
      <span className="overlay-corner absolute bottom-0 right-0 h-3 w-3 border-b-2 border-l-2 border-[#00CFFF]" />
    </span>
  )
}

export function PlantPanel({ as: Comp = 'div', className = '', children, ...rest }) {
  return (
    <Comp className={`overlay-focus overlay-card plant-panel ${className}`} {...rest}>
      <LockCorners />
      {children}
    </Comp>
  )
}

export function OverlayCard({ project }) {
  if (!project) return null
  const accent = categoryColor[project.category] || '#00CFFF'
  return (
    <PlantPanel
      as="a"
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 pt-5"
    >
      <span className="overlay-scan" aria-hidden />
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[9px] tracking-[0.18em] text-[#596270]" style={{ fontFamily: 'JetBrains Mono' }}>
          {project.slug}
        </span>
        <span className="text-[9px] tracking-wider" style={{ fontFamily: 'JetBrains Mono', color: accent }}>
          {project.featured ? 'FEATURED' : project.category.toUpperCase()}
        </span>
      </div>
      <h3 className="plant-title text-[15px] font-semibold">{project.name}</h3>
      <p className="plant-copy mt-2 text-[13px]">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="plant-chip">{t}</span>
        ))}
      </div>
      <p className="mt-3 text-[10px] tracking-[0.16em]" style={{ fontFamily: 'JetBrains Mono', color: accent }}>
        VIEW SOURCE →
      </p>
    </PlantPanel>
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
        clearProps: 'filter',
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
    <div className="overlay-rail-frame pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-[8vw] pb-[8vh] pt-[6vh]">
      <div
        ref={ref}
        className="overlay-rail pointer-events-auto"
      >
        <PlantPanel className="overlay-rail-head px-4 py-3">
          <p className="plant-label tracking-[0.32em]">◈ {eyebrow}</p>
          {title && (
            <p className="plant-title mt-1 text-base">{title}</p>
          )}
        </PlantPanel>
        {children}
      </div>
    </div>
  )
}

export function SceneCaption({ children }) {
  return (
    <p
      className="pointer-events-none absolute bottom-[3%] left-0 right-0 z-20 text-center text-[10px] tracking-[0.18em] text-[#596270]"
      style={{ fontFamily: 'JetBrains Mono' }}
    >
      {children}
    </p>
  )
}
