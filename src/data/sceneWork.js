import { projects } from './projects'
import { experience } from './experience'
import { skillGroups } from './profile'

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))

export const sceneWork = {
  git: {
    eyebrow: 'CHANGELOG',
    title: 'Experience',
    jobs: experience,
  },
  pipeline: {
    eyebrow: 'AI BRANCH',
    title: 'Vision & models',
    projects: [bySlug.WordleSolver, bySlug.chess, bySlug.stockprediction],
  },
  factory: {
    eyebrow: 'ASSEMBLY',
    title: 'Desktop systems',
    projects: [bySlug.ChattingAppjava, bySlug.IDE_C_cpp_java, bySlug['Paint-App-Java']],
  },
  registry: {
    eyebrow: 'IMAGE STORE',
    title: 'Apps & games',
    projects: [bySlug.TruPen, bySlug.ludo, bySlug.MusicSystem, bySlug.LuckyGold],
  },
  harbor: {
    eyebrow: 'FLAGSHIP',
    title: 'Kubernetes platform',
    projects: [bySlug.k8_istio_krakend],
  },
  monitor: {
    eyebrow: 'UNITS',
    title: 'Skills online',
    skills: skillGroups,
  },
  database: {
    eyebrow: 'PACKETS',
    title: 'Network & data',
    projects: [bySlug.P2PFileSharing, bySlug.SocketVideo, bySlug.ShoppingAppC],
  },
  cloud: {
    eyebrow: 'EDGE',
    title: 'More builds',
    projects: [bySlug.TurnTiles, bySlug.bricksandball, bySlug.parsecfunds],
  },
  security: {
    eyebrow: 'SOLVERS',
    title: 'Logic & play',
    projects: [bySlug.minesweeper],
  },
  production: {
    eyebrow: 'FEATURED',
    title: 'Shipped and live',
    projects: projects.filter((p) => p.featured),
  },
}
