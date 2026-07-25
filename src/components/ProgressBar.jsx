import { useScroll } from '../ScrollContext';
import { motion } from 'framer-motion';

export default function ProgressBar() {
  const { scrollProgress, currentSection, sections } = useScroll();
  const pct = Math.round(scrollProgress * 100);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none">
      <div className="h-1 bg-[#151A21]">
        <motion.div
          className="h-full"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, #00A7D6, ${sections[currentSection]?.color || '#00A7D6'})`,
            boxShadow: '0 0 8px currentColor',
          }}
        />
      </div>
      <div className="absolute top-3 left-4 flex items-center gap-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
        <span className="text-[#3B4048]">DEPLOY</span>
        <span className="text-[#00A7D6]">{pct}%</span>
        <span className="text-[#3B4048]">|</span>
        <span className="text-[#E0E0E0]">{sections[currentSection]?.label || 'START'}</span>
      </div>
      <div className="absolute top-3 right-4 flex items-center gap-1" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
        <span className="text-[#3B4048]">STATUS</span>
        <span className={pct >= 80 ? 'text-[#00C853]' : pct >= 30 ? 'text-[#F4B740]' : 'text-[#FF5A5A]'}>
          {pct >= 95 ? 'PRODUCTION' : pct >= 80 ? 'DEPLOYING' : pct >= 30 ? 'BUILDING' : 'INIT'}
        </span>
      </div>
    </div>
  );
}