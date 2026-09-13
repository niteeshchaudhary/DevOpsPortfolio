import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxDirector() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const far = window.innerWidth < 720 ? 18 : 36
    const near = window.innerWidth < 720 ? 22 : 48

    const ctx = gsap.context(() => {
      gsap.utils.toArray('section.district, #section-hero').forEach((section) => {
        const art = section.querySelector('svg')
        const stage = section.querySelector('.district-stage, .hero-hud')

        if (art) {
          gsap.set(art, { scale: 1.14, transformOrigin: '50% 50%' })
          gsap.fromTo(art, { yPercent: -7 }, {
            yPercent: 7,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.75,
            },
          })
        }

        if (stage) {
          gsap.fromTo(stage, { y: near * 0.5 }, {
            y: -near,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.4,
            },
          })
        }
      })

      gsap.to('.plant-rain', {
        y: far * 4,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.9,
        },
      })

      gsap.to('.world-bg', {
        y: far * 2.2,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.1,
        },
      })

      gsap.to('.atmos-layer', {
        y: far * 1.4,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
    })

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 800)

    return () => {
      clearTimeout(t)
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [])

  return null
}
