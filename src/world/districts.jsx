import { C } from './constants'
import {
  SpinePair, Stars, HPipe, Junction, Facade, Stack, Pine, Cabin, Crane,
  Tank, Ship, Conveyor, Antenna, ScreenWall,
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
      <path d="M0 760 L140 520 L260 640 L400 380 L560 610 L720 520 L780 700 L1140 700 L1200 520 L1280 640 L1480 480 L1680 700 L1920 560 L1920 1080 L0 1080Z" fill="#121820" />
      <path d="M0 860 L180 720 L340 800 L520 640 L720 800 L780 900 L1140 900 L1200 780 L1500 700 L1720 840 L1920 760 L1920 1080 L0 1080Z" fill="#0D1218" />
      <Cabin x={380} y={640} />
      <Pine x={220} y={700} s={1.2} />
      <Pine x={280} y={720} s={0.9} />
      <Pine x={520} y={710} s={1.1} />
      <Pine x={1400} y={740} s={1} />
      <Pine x={1520} y={760} s={1.3} />
      <Pine x={1640} y={700} s={0.85} />
      <path d="M380 310 C320 400 280 520 230 700" fill="none" stroke={C.water} strokeWidth="10" opacity="0.35" />
      <path d="M380 310 C320 400 280 520 230 700" fill="none" stroke={C.water} strokeWidth="3" className="spine-flow" strokeDasharray="10 14" />
      <HPipe x={198} y={820} w={420} color={C.water} />
      <Packet x={260} y={829} color={C.water} travel={90} />
      <Packet x={360} y={829} color={C.healthy} travel={70} />
      <Gear x={1480} y={860} r={28} />
      <Gear x={1544} y={872} r={18} reverse color={C.water} />
      <Junction x={198} y={829} color={C.water} label="PUSH" />
      <text x="360" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">01  ARRIVAL</text>
    </Frame>
  )
}

export function DistrictSource() {
  return (
    <Frame seed={2}>
      <rect x="0" y="420" width="700" height="660" fill="#0C141C" />
      <rect x="1220" y="420" width="700" height="660" fill="#0C141C" />
      <rect x="220" y="420" width="460" height="200" fill="url(#wd-water)" opacity="0.45" />
      <rect x="1260" y="420" width="460" height="200" fill="url(#wd-water)" opacity="0.45" />
      {[0, 1].map((i) => (
        <g key={`l-${i}`} transform={`translate(${320 + i * 180}, 760)`}>
          <rect x="-28" y="-200" width="56" height="200" fill={C.steelLo} stroke={C.steelHi} />
          <g className="mech-gate">
            <rect x="-18" y="-170" width="36" height="70" fill={C.water} opacity={0.3 + i * 0.2} />
          </g>
          <text y="-210" textAnchor="middle" fill={C.healthy} fontSize="10" fontFamily="JetBrains Mono">{['main', 'dev'][i]}</text>
        </g>
      ))}
      {[0, 1].map((i) => (
        <g key={`r-${i}`} transform={`translate(${1360 + i * 180}, 760)`}>
          <rect x="-28" y="-200" width="56" height="200" fill={C.steelLo} stroke={C.steelHi} />
          <g className="mech-gate">
            <rect x="-18" y="-170" width="36" height="70" fill={C.water} opacity={0.25 + i * 0.2} />
          </g>
          <text y="-210" textAnchor="middle" fill={C.healthy} fontSize="10" fontFamily="JetBrains Mono">{['feat', 'rel'][i]}</text>
        </g>
      ))}
      <rect x="200" y="760" width="500" height="70" fill={C.metal} stroke={C.steel} />
      <rect x="1240" y="760" width="500" height="70" fill={C.metal} stroke={C.steel} />
      <HPipe x={198} y={790} w={480} color={C.water} thick={22} />
      <HPipe x={1240} y={790} w={512} color={C.water} thick={22} />
      <Junction x={320} y={801} color={C.healthy} label="REPO" />
      <text x="280" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">02  DAM GATES</text>
    </Frame>
  )
}

export function DistrictPipeline() {
  return (
    <Frame seed={3}>
      <path d="M0 880 L720 860 L720 1080 L0 1080Z" fill="#10161C" />
      <path d="M1200 860 L1920 840 L1920 1080 L1200 1080Z" fill="#10161C" />
      <HPipe x={198} y={240} w={400} color={C.water} />
      <HPipe x={198} y={430} w={360} color={C.ci} />
      <HPipe x={1280} y={430} w={360} color={C.healthy} />
      <HPipe x={1280} y={620} w={470} color={C.logs} />
      <Junction x={520} y={249} color={C.ci} label="HOOK" />
      <Junction x={500} y={439} color={C.ci} label="BUILD" />
      <Junction x={1480} y={439} color={C.healthy} label="TEST" />
      <Junction x={1500} y={629} color={C.logs} label="ART" />
      <Packet x={320} y={249} color={C.water} travel={140} />
      <Packet x={360} y={439} color={C.ci} travel={110} />
      <Packet x={1400} y={439} color={C.healthy} travel={140} />
      <Packet x={183} y={320} color={C.water} axis="y" travel={80} />
      <Gear x={1500} y={780} r={40} />
      <Gear x={1576} y={806} r={24} reverse color={C.ci} />
      <Piston x={380} y={700} />
      <Facade x={280} y={500} w={160} h={160} accent={C.ci} />
      <Facade x={1340} y={280} w={190} h={150} accent={C.healthy} />
      <Stack x={430} y={500} h={70} />
      <text x="280" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">03  PIPELINE</text>
    </Frame>
  )
}

export function DistrictFactory() {
  return (
    <Frame seed={4}>
      <rect x="210" y="220" width="500" height="620" fill="#141A22" stroke={C.steel} strokeWidth="2" />
      <rect x="1210" y="220" width="520" height="620" fill="#141A22" stroke={C.steel} strokeWidth="2" />
      <rect x="210" y="220" width="500" height="28" fill={C.steelLo} />
      <rect x="1210" y="220" width="520" height="28" fill={C.steelLo} />
      <Facade x={250} y={300} w={200} h={280} accent={C.ci} />
      <Facade x={470} y={360} w={160} h={220} accent={C.warn} />
      <Facade x={1260} y={300} w={220} h={280} accent={C.healthy} />
      <Facade x={1500} y={360} w={180} h={220} accent={C.logs} />
      <Stack x={430} y={300} h={110} />
      <Stack x={1460} y={300} h={90} />
      <Conveyor x={240} y={700} w={430} />
      <Conveyor x={1240} y={700} w={450} />
      <Piston x={360} y={560} color={C.warn} />
      <Gear x={1580} y={640} r={36} color={C.ci} />
      <Gear x={1654} y={656} r={22} reverse />
      <HPipe x={198} y={720} w={110} color={C.ci} />
      <HPipe x={1630} y={720} w={122} color={C.healthy} />
      <Packet x={220} y={729} color={C.ci} travel={70} />
      <Packet x={1648} y={729} color={C.healthy} travel={80} />
      <text x="280" y="290" fill={C.ci} fontSize="12" fontFamily="JetBrains Mono">RECEIVE</text>
      <text x="1300" y="290" fill={C.healthy} fontSize="12" fontFamily="JetBrains Mono">PACKAGE</text>
      <text x="280" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">04  CI FACTORY</text>
    </Frame>
  )
}

export function DistrictRegistry() {
  return (
    <Frame seed={5}>
      <rect x="220" y="180" width="480" height="700" fill="#12181F" stroke={C.steel} />
      <rect x="1240" y="180" width="500" height="700" fill="#12181F" stroke={C.steel} />
      {[0, 1, 2].map((col) => (
        <g key={`l-${col}`} transform={`translate(${250 + col * 150}, 230)`}>
          <rect width="140" height="600" fill={C.panel} stroke={C.steelMid} />
          {Array.from({ length: 8 }).map((_, r) => (
            <rect key={r} x="10" y={18 + r * 70} width="120" height="52" rx="4" fill={C.metal} stroke={C.water} strokeOpacity="0.35" />
          ))}
        </g>
      ))}
      {[0, 1, 2].map((col) => (
        <g key={`r-${col}`} transform={`translate(${1280 + col * 150}, 230)`}>
          <rect width="140" height="600" fill={C.panel} stroke={C.steelMid} />
          {Array.from({ length: 8 }).map((_, r) => (
            <rect key={r} x="10" y={18 + r * 70} width="120" height="52" rx="4" fill={C.metal} stroke={C.healthy} strokeOpacity="0.35" />
          ))}
        </g>
      ))}
      <Crane x={1680} y={840} reach={-280} color={C.water} />
      <HPipe x={198} y={860} w={500} color={C.water} />
      <HPipe x={1240} y={860} w={512} color={C.water} />
      <Packet x={280} y={869} color={C.water} travel={160} />
      <Packet x={1320} y={869} color={C.healthy} travel={160} />
      <text x="280" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">05  REGISTRY</text>
    </Frame>
  )
}

export function DistrictHarbor() {
  return (
    <Frame seed={6}>
      <rect x="0" y="620" width="720" height="460" fill="#071820" />
      <rect x="1200" y="620" width="720" height="460" fill="#071820" />
      <rect x="0" y="620" width="720" height="460" fill="url(#wd-water)" opacity="0.22" />
      <rect x="1200" y="620" width="720" height="460" fill="url(#wd-water)" opacity="0.22" />
      <rect x="200" y="560" width="500" height="70" fill={C.metal} stroke={C.steel} />
      <rect x="1240" y="560" width="500" height="70" fill={C.metal} stroke={C.steel} />
      <Crane x={420} y={560} reach={160} color={C.healthy} />
      <Crane x={1480} y={560} reach={160} color={C.ci} />
      <Ship x={260} y={680} color={C.healthy} dir={1} />
      <Ship x={1280} y={700} w={190} color={C.water} dir={1} />
      <Ship x={1500} y={730} w={170} color={C.warn} dir={-1} />
      <Facade x={250} y={400} w={140} h={160} accent={C.healthy} />
      <rect x="1640" y="300" width="22" height="260" fill={C.steelLo} />
      <circle cx="1651" cy="286" r="28" fill="none" stroke={C.warn} strokeWidth="4" opacity="0.8" />
      <g transform="translate(1651, 286)">
        <g className="mech-radar">
          <line x1="0" y1="0" x2="22" y2="-18" stroke={C.warn} strokeWidth="2" />
        </g>
      </g>
      <circle cx="1651" cy="286" r="6" fill={C.warn} filter="url(#wd-glow)" className="spine-pulse" />
      <HPipe x={198} y={574} w={500} color={C.healthy} />
      <HPipe x={1240} y={574} w={512} color={C.healthy} />
      <text x="260" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">06  HARBOR</text>
    </Frame>
  )
}

export function DistrictMonitor() {
  return (
    <Frame seed={7}>
      <Facade x={230} y={260} w={240} h={520} accent={C.logs} />
      <Facade x={490} y={320} w={180} h={460} accent={C.healthy} />
      <Facade x={1280} y={240} w={240} h={540} accent={C.water} />
      <Facade x={1540} y={300} w={180} h={480} accent={C.warn} />
      <ScreenWall x={250} y={300} w={200} h={80} />
      <ScreenWall x={1310} y={280} w={200} h={90} />
      <Antenna x={460} y={260} h={160} />
      <Antenna x={1510} y={240} h={150} />
      <HPipe x={198} y={820} w={500} color={C.logs} />
      <HPipe x={1240} y={820} w={512} color={C.logs} />
      <Junction x={320} y={829} color={C.logs} label="NOC" />
      <text x="260" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">07  MONITORING</text>
    </Frame>
  )
}

export function DistrictDatabase() {
  return (
    <Frame seed={8}>
      <rect x="0" y="200" width="720" height="880" fill="#080E14" />
      <rect x="1200" y="200" width="720" height="880" fill="#080E14" />
      <Tank x={360} y={520} r={70} color={C.db} label="PG" />
      <Tank x={560} y={560} r={50} color={C.danger} label="REDIS" />
      <Tank x={1380} y={500} r={72} color={C.healthy} label="MONGO" />
      <Tank x={1600} y={540} r={56} color={C.logs} label="ES" />
      <HPipe x={198} y={700} w={500} color={C.db} thick={22} />
      <HPipe x={1240} y={700} w={512} color={C.db} thick={22} />
      <Packet x={360} y={640} color={C.db} axis="y" travel={48} />
      <Packet x={560} y={650} color={C.danger} axis="y" travel={40} />
      <Packet x={1380} y={630} color={C.healthy} axis="y" travel={48} />
      <Packet x={1600} y={640} color={C.logs} axis="y" travel={40} />
      <text x="260" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">08  DATABASE</text>
    </Frame>
  )
}

export function DistrictCloud() {
  return (
    <Frame seed={9}>
      {[[250, 360, 220, 90], [430, 520, 240, 80]].map(([x, y, w, h], i) => (
        <g key={`l-${i}`}>
          <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={C.panel} stroke={C.steelHi} strokeOpacity="0.7" />
          <text x={x + w / 2} y={y - 10} textAnchor="middle" fill={C.water} fontSize="11" fontFamily="JetBrains Mono">
            {['AWS', 'VPC'][i]}
          </text>
        </g>
      ))}
      {[[1280, 300, 240, 100], [1480, 480, 220, 90], [1340, 660, 280, 80]].map(([x, y, w, h], i) => (
        <g key={`r-${i}`}>
          <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={C.panel} stroke={C.steelHi} strokeOpacity="0.7" />
          <text x={x + w / 2} y={y - 10} textAnchor="middle" fill={C.water} fontSize="11" fontFamily="JetBrains Mono">
            {['AZURE', 'GCP', 'EDGE'][i]}
          </text>
        </g>
      ))}
      <Antenna x={360} y={360} h={120} />
      <Antenna x={1520} y={300} h={150} />
      <HPipe x={198} y={720} w={500} color={C.water} />
      <HPipe x={1240} y={720} w={512} color={C.water} />
      <text x="260" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">09  CLOUD</text>
    </Frame>
  )
}

export function DistrictSecurity() {
  return (
    <Frame seed={10}>
      <rect x="220" y="260" width="480" height="620" fill="#161216" stroke={C.warn} strokeOpacity="0.35" strokeWidth="3" />
      <rect x="1240" y="260" width="480" height="620" fill="#161216" stroke={C.warn} strokeOpacity="0.35" strokeWidth="3" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={`l-${i}`} x={240 + i * 56} y="260" width="10" height="80" fill={C.steel} />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={`r-${i}`} x={1260 + i * 56} y="260" width="10" height="80" fill={C.steel} />
      ))}
      <Facade x={280} y={420} w={160} h={240} accent={C.danger} />
      <Facade x={1380} y={420} w={160} h={240} accent={C.warn} />
      <rect x="500" y="380" width="120" height="160" fill={C.panel} stroke={C.warn} />
      <g className="mech-gate">
        <rect x="520" y="420" width="80" height="100" fill={C.warn} opacity="0.25" />
      </g>
      <HPipe x={198} y={800} w={500} color={C.warn} />
      <HPipe x={1240} y={800} w={512} color={C.healthy} />
      <text x="300" y="330" fill={C.warn} fontSize="14" fontFamily="JetBrains Mono">GATE</text>
      <text x="260" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">10  SECURITY</text>
    </Frame>
  )
}

export function DistrictProduction() {
  const left = [300, 360, 240, 400]
  const right = [280, 380, 260, 340]
  return (
    <Frame seed={11}>
      {left.map((h, i) => (
        <Facade key={`l-${i}`} x={230 + i * 120} y={880 - h} w={110} h={h} accent={i % 2 ? C.water : C.healthy} />
      ))}
      {right.map((h, i) => (
        <Facade key={`r-${i}`} x={1280 + i * 120} y={880 - h} w={110} h={h} accent={i % 2 ? C.warn : C.healthy} />
      ))}
      <HPipe x={198} y={880} w={500} color={C.healthy} thick={22} />
      <HPipe x={1240} y={880} w={512} color={C.healthy} thick={22} />
      <Gear x={240} y={920} r={26} color={C.healthy} />
      <Gear x={1680} y={920} r={26} reverse color={C.water} />
      <Stack x={280} y={880 - left[0]} h={70} />
      <Stack x={1400} y={880 - right[1]} h={70} />
      <text x="260" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">11  PRODUCTION</text>
    </Frame>
  )
}

export function DistrictFinale() {
  return (
    <Frame seed={12}>
      <path d="M0 720 L200 560 L360 640 L560 520 L700 700 L0 900Z" fill="#121820" opacity="0.7" />
      <path d="M1220 700 L1360 520 L1560 600 L1760 480 L1920 640 L1920 1080 L1220 900Z" fill="#121820" opacity="0.7" />
      <Cabin x={380} y={620} />
      <Pine x={240} y={680} />
      <Pine x={520} y={670} />
      <Pine x={1400} y={700} s={0.9} />
      <Pine x={1540} y={670} />
      <Pine x={1680} y={710} s={0.8} />
      <HPipe x={198} y={820} w={480} color={C.warn} />
      <HPipe x={1240} y={820} w={512} color={C.warn} />
      <Junction x={320} y={829} color={C.warn} label="HOME" />
      <text x="260" y="1048" fill={C.steelHi} fontSize="13" fontFamily="JetBrains Mono" letterSpacing="3">12  RETURN</text>
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
