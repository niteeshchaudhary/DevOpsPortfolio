import { useRef, useEffect, useState, useMemo } from 'react'
import { useScroll } from '../ScrollContext'
import AsciiPortrait from '../components/AsciiPortrait'
import SceneArt from '../world/SceneArt'
import { profile } from '../data/profile'

const BOOT = `$ git status
On branch main
$ git push origin main
remote: pipeline triggered
READY  plant online`

function formatClock(d) {
  return d.toISOString().slice(11, 19) + 'Z'
}

function HeroRain() {
  const cols = useMemo(() => (
    Array.from({ length: 16 }, (_, i) => ({
      left: `${4 + i * 6}%`,
      delay: `${(i * 0.41) % 5}s`,
      duration: `${7 + (i % 6)}s`,
      text: Array.from({ length: 18 }, (__, j) => (
        '0123456789ABCDEF'[((i * 7 + j * 13) % 16)]
      )).join('\n'),
    }))
  ), [])

  return (
    <div className="hero-rain" aria-hidden>
      {cols.map((c, i) => (
        <pre
          key={i}
          className="hero-rain-col"
          style={{ left: c.left, animationDelay: c.delay, animationDuration: c.duration }}
        >
          {c.text}
        </pre>
      ))}
    </div>
  )
}

export default function HeroScene() {
  const { registerSection } = useScroll()
  const sectionRef = useRef(null)
  const [clock, setClock] = useState(() => new Date())
  const [typed, setTyped] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (sectionRef.current) registerSection(0, sectionRef.current)
  }, [registerSection])

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setTyped(BOOT)
      setReady(true)
      return
    }
    let i = 0
    const tick = () => {
      i += 1
      setTyped(BOOT.slice(0, i))
      if (i >= BOOT.length) {
        setReady(true)
        return
      }
      const ch = BOOT[i - 1]
      const wait = ch === '\n' ? 90 : ch === ' ' ? 18 : 16
      timer = setTimeout(tick, wait)
    }
    let timer = setTimeout(tick, 420)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Enter') return
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      document.querySelector('#section-pipeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section ref={sectionRef} id="section-hero" className="hero-root relative h-screen min-h-screen w-full overflow-hidden">
      <SceneArt name="arrival" id="hero-img" />
      <div className="hero-dim" />
      <HeroRain />
      <div className="hero-scanlines" />

      <div className="hero-hud">
        <header className="hero-topbar">
          <span className="hero-led" />
          <span>ARRIVAL</span>
          <span className="hero-mute">{profile.handle}@pipeline</span>
          <span className="hero-chip">DISTRICT 01</span>
          <span className="hero-topbar-fill" />
          <span className="hero-mute hidden sm:inline">spine online</span>
          <span className="hero-clock">{formatClock(clock)}</span>
        </header>

        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker" data-enter>
              {profile.title}
            </p>
            <h1 className="hero-name hero-glitch" data-enter data-text={profile.shortName.toUpperCase()}>
              {profile.shortName.toUpperCase()}
            </h1>
            <p className="hero-last" data-enter>{profile.name.replace(profile.shortName, '').trim().toUpperCase()}</p>
            <p className="hero-role" data-enter>
              {profile.bio}
            </p>

            <pre className="hero-tty" data-enter>
              {typed}
              <span className="hero-block" />
            </pre>

            <div className="hero-actions" data-enter>
              <a href="#section-pipeline" className="hero-cta" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#section-pipeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}>
                <span className="hero-cta-key">↵</span>
                enter the plant
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">github</a>
              <a href={`mailto:${profile.email}`}>mail</a>
            </div>
          </div>

          <div className="hero-ident" data-enter>
            <div className="hero-ascii">
              <AsciiPortrait color="#00CFFF" />
            </div>
            <p className="hero-hex">
              7A 0F 3C E1 90 B2 4D 88 C6 1A FE 03 55 9B D0 27
            </p>
          </div>
        </div>

        <footer className="hero-foot">
          <span className={ready ? 'hero-ok' : 'hero-mute'}>
            {ready ? 'READY' : 'BOOTING'}
          </span>
          <span className="hero-mute">k8s · istio · argocd · opencv</span>
          <span className="hero-scroll-hint">scroll to follow the work ▾</span>
        </footer>
      </div>
    </section>
  )
}
