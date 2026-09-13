import { C, SPINE_X, RAIL_X } from './constants'
import {
  SpinePair, Stars, HPipe, Junction, Facade, Stack, Pine, Cabin, Crane,
  Tank, Ship, Conveyor, Antenna, ScreenWall, Windows, VPipe,
  Gear, Piston, Packet,
} from './primitives'

function Frame({ children, seed }) {
  return (
    <>
      <rect width="1920" height="1080" fill="url(#wd-night)" />
      <Stars seed={seed} />
      {children}
      <SpinePair />
    </>
  )
}

export function DistrictArrival() {
  return (
    <Frame seed={1}>
      <path d="M0 760 L140 520 L260 640 L400 380 L560 610 L720 290 L900 560 L1100 420 L1280 640 L1480 480 L1680 700 L1920 560 L1920 1080 L0 1080Z" fill="#121820" />
      <path d="M0 860 L180 720 L340 800 L520 640 L760 780 L1020 680 L1260 820 L1500 700 L1720 840 L1920 760 L1920 1080 L0 1080Z" fill="#0D1218" />
      <Cabin x={620} y={640} />
      <Pine x={430} y={700} s={1.2} />
      <Pine x={480} y={720} s={0.9} />
      <Pine x={760} y={710} s={1.1} />
      <Pine x={820} y={690} s={0.75} />
      <Pine x={1180} y={740} s={1} />
      <Pine x={1320} y={760} s={1.3} />
      <path d="M720 310 C780 380 820 470 840 560 C860 650 900 740 960 820" fill="none" stroke={C.water} strokeWidth="10" opacity="0.35" />
      <path d="M720 310 C780 380 820 470 840 560 C860 650 900 740 960 820" fill="none" stroke={C.water} strokeWidth="3" className="spine-flow" strokeDasharray="10 14" />
      <HPipe x={198} y={820} w={762} color={C.water} />
      <Packet x={280} y={829} color={C.water} />
      <Packet x={420} y={829} color={C.healthy} />
      <Packet x={560} y={829} color={C.water} />
      <Gear x={1080} y={860} r={28} />
      <Gear x={1144} y={872} r={18} reverse color={C.water} />
      <Junction x={198} y={829} color={C.water} label="PUSH" />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">01  ARRIVAL  ·  GIT PUSH</text>
    </Frame>
  )
}

export function DistrictSource() {
  return (
    <Frame seed={2}>
      <rect x="0" y="420" width="1920" height="660" fill="#0C141C" />
      <path d="M260 420 L1660 420 L1660 760 L260 760Z" fill="#10202A" />
      <rect x="260" y="420" width="1400" height="200" fill="url(#wd-water)" opacity="0.45" />
      <path d="M260 560 Q960 620 1660 560" fill="none" stroke={C.water} strokeWidth="2" opacity="0.35" className="spine-flow" strokeDasharray="16 20" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${420 + i * 220}, 760)`}>
          <rect x="-28" y="-200" width="56" height="200" fill={C.steelLo} stroke={C.steelHi} />
          <g className="mech-gate">
            <rect x="-18" y="-170" width="36" height="70" fill={C.water} opacity={0.25 + (i % 2) * 0.2} />
          </g>
          <text y="-210" textAnchor="middle" fill={C.healthy} fontSize="10" fontFamily="JetBrains Mono">{['main', 'dev', 'feat', 'hotfix', 'rel'][i]}</text>
        </g>
      ))}
      <rect x="240" y="760" width="1440" height="70" fill={C.metal} stroke={C.steel} />
      <HPipe x={198} y={790} w={1554} color={C.water} thick={22} />
      <Junction x={960} y={801} color={C.healthy} label="REPO" />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">02  SOURCE CONTROL  ·  DAM GATES</text>
    </Frame>
  )
}

export function DistrictPipeline() {
  return (
    <Frame seed={3}>
      <path d="M0 880 L1920 840 L1920 1080 L0 1080Z" fill="#10161C" />
      <HPipe x={198} y={240} w={400} color={C.water} />
      <HPipe x={198} y={430} w={620} color={C.ci} />
      <HPipe x={198} y={620} w={980} color={C.healthy} />
      <HPipe x={198} y={800} w={1554} color={C.logs} />
      {[[620, 240, 'HOOK'], [840, 430, 'BUILD'], [1200, 620, 'TEST'], [960, 800, 'ART']].map(([x, y, l]) => (
        <Junction key={l} x={x} y={y + 9} color={C.ci} label={l} />
      ))}
      <Packet x={320} y={249} color={C.water} />
      <Packet x={480} y={439} color={C.ci} />
      <Packet x={700} y={629} color={C.healthy} />
      <Packet x={1100} y={809} color={C.logs} />
      <Packet x={183} y={320} color={C.water} axis="y" />
      <Packet x={183} y={520} color={C.ci} axis="y" />
      <Gear x={1560} y={780} r={40} />
      <Gear x={1636} y={806} r={24} reverse color={C.ci} />
      <Piston x={1500} y={700} />
      <Facade x={700} y={280} w={160} h={130} accent={C.ci} />
      <Facade x={980} y={460} w={190} h={150} accent={C.healthy} />
      <Facade x={1320} y={640} w={210} h={150} accent={C.logs} />
      <Stack x={860} y={280} h={70} />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">03  PIPELINE NETWORK  ·  PARALLEL JOBS</text>
    </Frame>
  )
}

export function DistrictFactory() {
  return (
    <Frame seed={4}>
      <rect x="240" y="220" width="1440" height="620" fill="#141A22" stroke={C.steel} strokeWidth="2" />
      <rect x="240" y="220" width="1440" height="28" fill={C.steelLo} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={420 + i * 210} y1="248" x2={420 + i * 210} y2="840" stroke={C.steel} strokeWidth="1" opacity="0.35" />
      ))}
      <Facade x={300} y={300} w={220} h={280} accent={C.ci} />
      <Facade x={560} y={340} w={180} h={240} accent={C.warn} />
      <Facade x={1180} y={300} w={240} h={280} accent={C.healthy} />
      <Facade x={1460} y={360} w={180} h={220} accent={C.logs} />
      <Stack x={500} y={300} h={110} />
      <Stack x={1400} y={300} h={90} />
      <Conveyor x={300} y={700} w={1380} />
      <Piston x={790} y={560} color={C.warn} />
      <Piston x={860} y={560} />
      <Piston x={930} y={560} color={C.healthy} />
      <Gear x={1080} y={640} r={36} color={C.ci} />
      <Gear x={1154} y={656} r={22} reverse />
      <HPipe x={198} y={720} w={110} color={C.ci} />
      <Packet x={250} y={729} color={C.ci} />
      <text x="360" y="290" fill={C.ci} fontSize="12" fontFamily="JetBrains Mono">RECEIVE</text>
      <text x="620" y="330" fill={C.warn} fontSize="12" fontFamily="JetBrains Mono">TEST</text>
      <text x="1240" y="290" fill={C.healthy} fontSize="12" fontFamily="JetBrains Mono">PACKAGE</text>
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">04  CI FACTORY  ·  ASSEMBLY LINE</text>
    </Frame>
  )
}

export function DistrictRegistry() {
  return (
    <Frame seed={5}>
      <rect x="280" y="180" width="1360" height="700" fill="#12181F" stroke={C.steel} />
      {[0, 1, 2, 3, 4, 5, 6].map((col) => (
        <g key={col} transform={`translate(${340 + col * 180}, 230)`}>
          <rect width="150" height="600" fill={C.panel} stroke={C.steelMid} />
          {Array.from({ length: 8 }).map((_, r) => (
            <g key={r}>
              <rect x="12" y={18 + r * 70} width="126" height="52" rx="4" fill={C.metal} stroke={C.water} strokeOpacity="0.35" />
              <text x="75" y={48 + r * 70} textAnchor="middle" fill={C.water} fontSize="9" fontFamily="JetBrains Mono" opacity="0.7">
                {['nginx', 'node', 'redis', 'api', 'web', 'worker', 'proxy', 'base'][r]}:{r + 1}
              </text>
            </g>
          ))}
        </g>
      ))}
      <Crane x={1600} y={840} reach={-420} color={C.water} />
      <HPipe x={198} y={860} w={1554} color={C.water} />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">05  CONTAINER REGISTRY  ·  IMAGE STORE</text>
    </Frame>
  )
}

export function DistrictHarbor() {
  return (
    <Frame seed={6}>
      <rect x="0" y="620" width="1920" height="460" fill="#071820" />
      <rect x="0" y="620" width="1920" height="460" fill="url(#wd-water)" opacity="0.22" />
      <path d="M0 620 Q480 600 960 624 Q1440 648 1920 610 L1920 640 L0 640Z" fill="#0E2430" />
      <rect x="200" y="560" width="1520" height="70" fill={C.metal} stroke={C.steel} />
      <Crane x={520} y={560} reach={180} color={C.healthy} />
      <Crane x={980} y={560} reach={200} color={C.water} />
      <Crane x={1440} y={560} reach={160} color={C.ci} />
      <Ship x={360} y={680} color={C.healthy} />
      <Ship x={680} y={710} w={190} color={C.water} />
      <Ship x={1100} y={690} w={150} color={C.warn} />
      <Ship x={1400} y={730} w={210} color={C.logs} />
      <Facade x={300} y={400} w={140} h={160} accent={C.healthy} />
      <rect x="1580" y="300" width="22" height="260" fill={C.steelLo} />
      <circle cx="1591" cy="286" r="28" fill="none" stroke={C.warn} strokeWidth="4" opacity="0.8" />
      <g transform="translate(1591, 286)">
        <g className="mech-radar">
          <line x1="0" y1="0" x2="22" y2="-18" stroke={C.warn} strokeWidth="2" />
        </g>
      </g>
      <circle cx="1591" cy="286" r="6" fill={C.warn} filter="url(#wd-glow)" className="spine-pulse" />
      <HPipe x={198} y={574} w={1554} color={C.healthy} />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">06  KUBERNETES HARBOR  ·  PODS AS SHIPS</text>
    </Frame>
  )
}

export function DistrictMonitor() {
  return (
    <Frame seed={7}>
      <Facade x={300} y={260} w={320} h={520} accent={C.logs} />
      <Facade x={680} y={200} w={280} h={580} accent={C.healthy} />
      <Facade x={1020} y={240} w={360} h={540} accent={C.water} />
      <Facade x={1440} y={300} w={220} h={480} accent={C.warn} />
      <ScreenWall x={330} y={300} w={260} h={80} />
      <ScreenWall x={710} y={250} w={220} h={70} />
      <ScreenWall x={1060} y={280} w={280} h={90} />
      <Antenna x={640} y={260} h={160} />
      <Antenna x={980} y={200} h={190} />
      <Antenna x={1400} y={240} h={150} />
      <HPipe x={198} y={820} w={1554} color={C.logs} />
      <Junction x={960} y={829} color={C.logs} label="NOC" />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">07  MONITORING CITY  ·  METRICS · LOGS · TRACES</text>
    </Frame>
  )
}

export function DistrictDatabase() {
  return (
    <Frame seed={8}>
      <rect x="0" y="200" width="1920" height="880" fill="#080E14" />
      <path d="M0 200 L80 280 L0 360Z" fill="#121820" />
      <path d="M1920 200 L1840 290 L1920 380Z" fill="#121820" />
      <Tank x={420} y={520} r={70} color={C.db} label="PG" />
      <Tank x={720} y={560} r={58} color={C.danger} label="REDIS" />
      <Tank x={1020} y={500} r={78} color={C.healthy} label="MONGO" />
      <Tank x={1340} y={540} r={64} color={C.logs} label="ES" />
      <HPipe x={198} y={700} w={1554} color={C.db} thick={22} />
      <HPipe x={350} y={430} w={70} color={C.db} thick={12} />
      <HPipe x={650} y={470} w={70} color={C.danger} thick={12} />
      <HPipe x={950} y={410} w={70} color={C.healthy} thick={12} />
      <VPipe x={410} y={590} y2={700} color={C.db} thick={16} />
      <VPipe x={710} y={618} y2={700} color={C.danger} thick={16} />
      <VPipe x={1010} y={578} y2={700} color={C.healthy} thick={16} />
      <VPipe x={1330} y={604} y2={700} color={C.logs} thick={16} />
      <Packet x={428} y={640} color={C.db} axis="y" />
      <Packet x={728} y={650} color={C.danger} axis="y" />
      <Packet x={1028} y={630} color={C.healthy} axis="y" />
      <Packet x={1338} y={640} color={C.logs} axis="y" />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">08  DATABASE RESERVOIR  ·  REPLICATION</text>
    </Frame>
  )
}

export function DistrictCloud() {
  return (
    <Frame seed={9}>
      {[[380, 420, 260, 90], [760, 300, 320, 110], [1180, 380, 280, 100], [520, 620, 300, 80], [1080, 660, 340, 90]].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={C.panel} stroke={C.steelHi} strokeOpacity="0.7" />
          <Windows x={x + 28} y={y + 28} cols={Math.floor((w - 50) / 18)} rows={2} color={C.water} />
          <text x={x + w / 2} y={y - 10} textAnchor="middle" fill={C.water} fontSize="11" fontFamily="JetBrains Mono">
            {['AWS', 'AZURE', 'GCP', 'VPC', 'EDGE'][i]}
          </text>
        </g>
      ))}
      <Antenna x={640} y={420} h={120} />
      <Antenna x={920} y={300} h={150} />
      <Antenna x={1320} y={380} h={130} />
      <HPipe x={198} y={720} w={1554} color={C.water} />
      <line x1="510" y1="465" x2="760" y2="355" stroke={C.steelHi} strokeWidth="2" opacity="0.4" />
      <line x1="1080" y1="355" x2="1180" y2="430" stroke={C.steelHi} strokeWidth="2" opacity="0.4" />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">09  CLOUD INFRASTRUCTURE  ·  IaC</text>
    </Frame>
  )
}

export function DistrictSecurity() {
  return (
    <Frame seed={10}>
      <rect x="420" y="260" width="1080" height="620" fill="#161216" stroke={C.warn} strokeOpacity="0.35" strokeWidth="3" />
      {Array.from({ length: 18 }).map((_, i) => (
        <rect key={i} x={430 + i * 58} y="260" width="10" height="80" fill={C.steel} />
      ))}
      <rect x="860" y="340" width="200" height="280" fill={C.ink} stroke={C.warn} strokeWidth="2" />
      <rect x="900" y="380" width="120" height="160" fill={C.panel} />
      <g className="mech-gate">
        <rect x="920" y="420" width="80" height="100" fill={C.warn} opacity="0.25" />
      </g>
      <circle cx="960" cy="460" r="22" fill="none" stroke={C.warn} strokeWidth="3" />
      <circle cx="960" cy="460" r="6" fill={C.warn} filter="url(#wd-glow)" className="spine-pulse" />
      <Facade x={480} y={420} w={160} h={240} accent={C.danger} />
      <Facade x={1280} y={420} w={160} h={240} accent={C.warn} />
      <HPipe x={198} y={800} w={262} color={C.warn} />
      <HPipe x={1060} y={800} w={692} color={C.healthy} />
      <text x="960" y="330" textAnchor="middle" fill={C.warn} fontSize="14" fontFamily="JetBrains Mono">CHECKPOINT</text>
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">10  SECURITY DISTRICT  ·  IAM · VAULT · WAF</text>
    </Frame>
  )
}

export function DistrictProduction() {
  const heights = [280, 360, 240, 420, 300, 380, 260, 340, 400, 220]
  return (
    <Frame seed={11}>
      {heights.map((h, i) => (
        <g key={i}>
          <Facade x={280 + i * 145} y={880 - h} w={130} h={h} accent={i % 3 === 0 ? C.healthy : i % 3 === 1 ? C.water : C.warn} />
        </g>
      ))}
      <HPipe x={198} y={880} w={1554} color={C.healthy} thick={22} />
      <Junction x={960} y={891} color={C.healthy} label="LIVE" />
      <Gear x={240} y={920} r={26} color={C.healthy} />
      <Gear x={1680} y={920} r={26} reverse color={C.water} />
      {[0, 2, 5, 8].map((i) => <Stack key={i} x={340 + i * 145} y={880 - heights[i]} h={70} />)}
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">11  PRODUCTION CITY  ·  ALL SYSTEMS OPERATIONAL</text>
    </Frame>
  )
}

export function DistrictFinale() {
  return (
    <Frame seed={12}>
      <path d="M0 720 L200 560 L360 640 L560 420 L780 600 L1020 380 L1240 580 L1480 460 L1720 640 L1920 520 L1920 1080 L0 1080Z" fill="#121820" opacity="0.7" />
      <Cabin x={960} y={620} />
      <Pine x={820} y={680} />
      <Pine x={1100} y={670} />
      <Pine x={1180} y={700} s={0.8} />
      <circle cx="960" cy="480" r="90" fill="none" stroke={C.warn} strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="960" cy="480" r="4" fill={C.warn} filter="url(#wd-glow)" />
      <HPipe x={198} y={820} w={1554} color={C.warn} />
      <Junction x={960} y={829} color={C.warn} label="HOME" />
      <text x="960" y="1048" textAnchor="middle" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="4">12  RETURN  ·  WORLD ONLINE</text>
    </Frame>
  )
}

export const DISTRICTS = {
  arrival: DistrictArrival,
  source: DistrictSource,
  pipeline: DistrictPipeline,
  factory: DistrictFactory,
  registry: DistrictRegistry,
  harbor: DistrictHarbor,
  monitor: DistrictMonitor,
  database: DistrictDatabase,
  cloud: DistrictCloud,
  security: DistrictSecurity,
  production: DistrictProduction,
  finale: DistrictFinale,
}
