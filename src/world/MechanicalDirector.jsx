import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function scrub(el, vars) {
  const section = el.closest('section') || el.closest('[class*="relative"]') || document.body
  return gsap.to(el, {
    ease: 'none',
    ...vars,
    scrollTrigger: {
      trigger: section,
      start: 'top 95%',
      end: 'bottom 5%',
      scrub: 0.55,
    },
  })
}

export default function MechanicalDirector() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    document.documentElement.classList.add('mech-scroll')

    const ctx = gsap.context(() => {
      gsap.to('.spine-flow', {
        strokeDashoffset: -520,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.25,
        },
      })

      gsap.utils.toArray('.mech-gear').forEach((el) => {
        scrub(el, { rotation: 900, transformOrigin: '50% 50%', svgOrigin: undefined })
      })
      gsap.utils.toArray('.mech-gear-rev').forEach((el) => {
        scrub(el, { rotation: -900, transformOrigin: '50% 50%' })
      })
      gsap.utils.toArray('.mech-roller').forEach((el) => {
        scrub(el, { rotation: 720, transformOrigin: '50% 50%' })
      })
      gsap.utils.toArray('.mech-radar').forEach((el) => {
        scrub(el, { rotation: 540, transformOrigin: '0% 0%' })
      })
      gsap.utils.toArray('.mech-piston').forEach((el, i) => {
        scrub(el, { y: i % 2 === 0 ? 28 : -28 })
      })
      gsap.utils.toArray('.mech-gate').forEach((el, i) => {
        scrub(el, { y: i % 2 === 0 ? 56 : -40 })
      })
      gsap.utils.toArray('.mech-packet-x').forEach((el, i) => {
        scrub(el, { x: 90 + (i % 6) * 36 })
      })
      gsap.utils.toArray('.mech-packet-y').forEach((el, i) => {
        scrub(el, { y: 70 + (i % 4) * 24 })
      })
      gsap.utils.toArray('.mech-trolley').forEach((el) => {
        const dir = Number(el.getAttribute('data-dir') || 1)
        scrub(el, { x: dir * -110 })
      })
      gsap.utils.toArray('.mech-ship').forEach((el, i) => {
        scrub(el, { x: i % 2 === 0 ? 90 : -70, y: i % 2 === 0 ? 8 : -6 })
      })
      gsap.utils.toArray('.world-belt').forEach((el) => {
        scrub(el, { x: 70 })
      })
      gsap.utils.toArray('.mech-train').forEach((el) => {
        scrub(el, { x: 420 })
      })
    })

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 800)

    return () => {
      clearTimeout(t)
      window.removeEventListener('load', refresh)
      document.documentElement.classList.remove('mech-scroll')
      ctx.revert()
    }
  }, [])

  return null
}
