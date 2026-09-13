import { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react';

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);
  const rafRef = useRef(null);
  const [infraActive, setInfraActive] = useState(false);

  const sections = [
    { id: 'hero', label: 'ARRIVAL', color: '#00CFFF' },
    { id: 'git', label: 'SOURCE', color: '#00CFFF' },
    { id: 'pipeline', label: 'PIPELINE', color: '#00CFFF' },
    { id: 'factory', label: 'FACTORY', color: '#FF8F1F' },
    { id: 'registry', label: 'REGISTRY', color: '#00CFFF' },
    { id: 'harbor', label: 'HARBOR', color: '#2EE66B' },
    { id: 'monitor', label: 'MONITOR', color: '#B388FF' },
    { id: 'database', label: 'DATABASE', color: '#4FC3F7' },
    { id: 'cloud', label: 'CLOUD', color: '#00CFFF' },
    { id: 'security', label: 'SECURITY', color: '#F4B740' },
    { id: 'production', label: 'PRODUCTION', color: '#2EE66B' },
    { id: 'finale', label: 'COMMS', color: '#00CFFF' },
  ];

  const getSectionProgress = useCallback((index) => {
    if (!sectionRefs.current[index]) return 0;
    const el = sectionRefs.current[index];
    const rect = el.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    const start = rect.top;
    const end = rect.top + rect.height;
    if (end < 0 || start > viewHeight) return 0;
    const visible = Math.min(viewHeight, end) - Math.max(0, start);
    return Math.min(1, Math.max(0, visible / Math.min(viewHeight, rect.height)));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
        setScrollProgress(progress);

        if (progress < 0.03) {
          setInfraActive(false);
        } else {
          setInfraActive(true);
        }

        let current = 0;
        for (let i = 0; i < sectionRefs.current.length; i++) {
          if (sectionRefs.current[i]) {
            const rect = sectionRefs.current[i].getBoundingClientRect();
            const mid = rect.top + rect.height / 2;
            if (mid < window.innerHeight * 0.6) current = i;
          }
        }
        setCurrentSection(current);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const registerSection = useCallback((index, ref) => {
    sectionRefs.current[index] = ref;
  }, []);

  return (
    <ScrollContext.Provider value={{
      scrollProgress,
      currentSection,
      sections,
      sectionRefs,
      registerSection,
      getSectionProgress,
      infraActive,
    }}>
      <div ref={containerRef} style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScroll must be used within ScrollProvider');
  return ctx;
}