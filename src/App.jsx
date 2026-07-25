import { ScrollProvider } from './ScrollContext'
import Loader from './components/Loader'
import ProgressBar from './components/ProgressBar'
import WorldBackground from './components/WorldBackground'
import WaterRiverOverlay from './components/WaterRiverOverlay'
import AtmosphereLayer from './components/AtmosphereLayer'
import SceneTransition from './components/SceneTransition'
import HeroScene from './sections/HeroScene'
import GitSection from './sections/GitSection'
import PipelineSection from './sections/PipelineSection'
import CIFactory from './sections/CIFactory'
import ContainerRegistry from './sections/ContainerRegistry'
import KubernetesHarbor from './sections/KubernetesHarbor'
import MonitoringCity from './sections/MonitoringCity'
import DatabaseReservoir from './sections/DatabaseReservoir'
import CloudInfrastructure from './sections/CloudInfrastructure'
import SecurityDistrict from './sections/SecurityDistrict'
import ProductionCity from './sections/ProductionCity'
import FinaleScene from './sections/FinaleScene'

export default function App() {
  return (
    <ScrollProvider>
      <Loader />
      <WorldBackground />
      <AtmosphereLayer />
      <WaterRiverOverlay />
      <ProgressBar />
      <main className="relative z-10">
        {/* Scene 01: Arrival — Mountain Summit */}
        <HeroScene />
        <SceneTransition type="pipeline"  />

        {/* Scene 02: Source Control — Dam */}
        <GitSection />
        <SceneTransition type="pipeline"  />

        {/* Scene 03: Pipeline Network — Valley */}
        <PipelineSection />
        <SceneTransition type="conveyor"  />

        {/* Scene 04: CI Factory — Assembly Line */}
        <CIFactory />
        <SceneTransition type="railway"  />

        {/* Scene 05: Container Registry — Warehouse */}
        <ContainerRegistry />
        <SceneTransition type="railway"  />

        {/* Scene 06: Kubernetes Harbor — Port */}
        <KubernetesHarbor />
        <SceneTransition type="bridge"  />

        {/* Scene 07: Monitoring City — Control Room */}
        <MonitoringCity />
        <SceneTransition type="pipeline"  />

        {/* Scene 08: Database Reservoir — Underground */}
        <DatabaseReservoir />
        <SceneTransition type="pipeline"  />

        {/* Scene 09: Cloud Infrastructure — Power Grid */}
        <CloudInfrastructure />
        <SceneTransition type="pipeline"  />

        {/* Scene 10: Security District — Checkpoint */}
        <SecurityDistrict />
        <SceneTransition type="bridge"  />

        {/* Scene 11: Production City — Everything Alive */}
        <ProductionCity />
        <SceneTransition type="pipeline"  />

        {/* Scene 12: Finale — Cabin Return + Portfolio Hub */}
        <FinaleScene />
      </main>
    </ScrollProvider>
  )
}
