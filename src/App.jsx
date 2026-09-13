import { ScrollProvider } from './ScrollContext'
import Loader from './components/Loader'
import ProgressBar from './components/ProgressBar'
import WorldBackground from './components/WorldBackground'
import AtmosphereLayer from './components/AtmosphereLayer'
import GlyphRain from './components/GlyphRain'
import MechanicalDirector from './world/MechanicalDirector'
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
import SiteNav from './components/SiteNav'

export default function App() {
  return (
    <ScrollProvider>
      <Loader />
      <WorldBackground />
      <AtmosphereLayer />
      <MechanicalDirector />
      <ProgressBar />
      <SiteNav />
      <GlyphRain />
      <main className="relative z-10">
        <HeroScene />
        <GitSection />
        <PipelineSection />
        <CIFactory />
        <ContainerRegistry />
        <KubernetesHarbor />
        <MonitoringCity />
        <DatabaseReservoir />
        <CloudInfrastructure />
        <SecurityDistrict />
        <ProductionCity />
        <FinaleScene />
      </main>
    </ScrollProvider>
  )
}
