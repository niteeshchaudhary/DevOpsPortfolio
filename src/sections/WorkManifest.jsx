import { useMemo, useRef, useState, useEffect } from 'react'
import { useScroll } from '../ScrollContext'
import { projects, categories, categoryColor } from '../data/projects'
import { experience } from '../data/experience'
import { skillGroups, profile, social } from '../data/profile'

export default function WorkManifest() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (sectionRef.current) registerSection(11, sectionRef.current)
  }, [registerSection])

  const visible = useMemo(() => {
    const list = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
  }, [filter])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-10 w-full px-4 py-28 sm:px-8 md:px-14 md:py-36"
      style={{ background: 'linear-gradient(180deg, #0A0F14 0%, #0D1218 40%, #0A0F14 100%)' }}
    >
      <div className="pointer-events-none absolute left-[calc(168/1920*100%)] top-0 h-full w-[3px] bg-[#00CFFF]/25" />
      <div className="pointer-events-none absolute right-[calc(146/1920*100%)] top-0 h-full w-[2px] bg-[#2EE66B]/20" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 border border-[#262C34] bg-[#0D1117]/90 p-5 md:p-7">
          <p className="text-[10px] tracking-[0.35em] text-[#2EE66B]" style={{ fontFamily: 'JetBrains Mono' }}>
            PIPELINE ARRIVAL · ARTIFACT REGISTRY · {profile.handle}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-wide text-[#00CFFF] md:text-3xl" style={{ fontFamily: 'JetBrains Mono' }}>
            SHIPPED WORK
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#C8CDD3]" style={{ fontFamily: 'Inter, sans-serif' }}>
            {profile.bio}
          </p>
          <p className="mt-4 text-[11px] text-[#596270]" style={{ fontFamily: 'IBM Plex Mono' }}>
            {visible.length} images in this namespace
            <span className="ml-3 text-[#2EE66B]">● live</span>
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = filter === c.id
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                className="border px-3 py-1 text-[10px] tracking-[0.18em] transition-colors"
                style={{
                  fontFamily: 'JetBrains Mono',
                  borderColor: active ? '#00CFFF' : '#39414B',
                  color: active ? '#00CFFF' : '#596270',
                  background: active ? '#00CFFF14' : '#171C24',
                }}
              >
                {c.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => {
            const accent = categoryColor[p.category] || '#00CFFF'
            return (
              <article
                key={p.id}
                className="group flex flex-col border border-[#262C34] bg-[#11171F] p-4 transition-colors hover:border-[#00CFFF]/50"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[9px] tracking-[0.2em] text-[#596270]" style={{ fontFamily: 'JetBrains Mono' }}>
                    {p.slug}
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px]" style={{ fontFamily: 'JetBrains Mono', color: accent }}>
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 8px ${accent}` }} />
                    {p.featured ? 'FEATURED' : p.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-[#8B939C]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-[#2A313A] px-1.5 py-0.5 text-[9px] text-[#7A8490]"
                      style={{ fontFamily: 'IBM Plex Mono' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-[10px] tracking-[0.16em] transition-colors"
                  style={{ fontFamily: 'JetBrains Mono', color: accent }}
                >
                  VIEW SOURCE →
                </a>
              </article>
            )
          })}
        </div>

        <div id="experience" className="mt-28 scroll-mt-16">
          <p className="text-[10px] tracking-[0.35em] text-[#F4B740]" style={{ fontFamily: 'JetBrains Mono' }}>
            CHANGELOG · EXPERIENCE
          </p>
          <div className="mt-5 grid gap-3">
            {experience.map((job) => (
              <div key={job.company} className="grid gap-2 border border-[#262C34] bg-[#0D1117] p-4 md:grid-cols-[200px_1fr] md:gap-8">
                <p className="text-[11px] text-[#00CFFF]" style={{ fontFamily: 'IBM Plex Mono' }}>{job.time}</p>
                <div>
                  <p className="text-sm text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>{job.role}</p>
                  <p className="mt-1 text-[11px] tracking-wide text-[#2EE66B]" style={{ fontFamily: 'JetBrains Mono' }}>{job.company}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#8B939C]">{job.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="mt-28 scroll-mt-16">
          <p className="text-[10px] tracking-[0.35em] text-[#B388FF]" style={{ fontFamily: 'JetBrains Mono' }}>
            RUNNING UNITS · SKILLS
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.name} className="border border-[#262C34] bg-[#11171F] p-4">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#596270]" style={{ fontFamily: 'JetBrains Mono' }}>{g.name.toUpperCase()}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="border border-[#00CFFF]/25 bg-[#00CFFF08] px-2 py-1 text-[10px] text-[#C5EEFF]"
                      style={{ fontFamily: 'IBM Plex Mono' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="mt-28 scroll-mt-16 border border-[#F4B740]/40 bg-[#0D1117] p-6 md:p-10">
          <p className="text-[10px] tracking-[0.35em] text-[#F4B740]" style={{ fontFamily: 'JetBrains Mono' }}>
            COMMS CHANNEL
          </p>
          <h3 className="mt-3 text-xl text-[#E8EDF2]" style={{ fontFamily: 'JetBrains Mono' }}>Get in touch</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#8B939C]">
            Open to roles and collaborations in DevOps, full stack, and applied AI.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-[#FF8F1F] hover:underline" style={{ fontFamily: 'IBM Plex Mono' }}>
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            {social.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 text-[10px] tracking-[0.18em] hover:bg-white/5"
                style={{ fontFamily: 'JetBrains Mono', borderColor: s.color, color: s.color }}
              >
                {s.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
