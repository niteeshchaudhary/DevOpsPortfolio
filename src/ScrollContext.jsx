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
    { id: 'hero', label: 'Git Push', color: '#00A7D6' },
    { id: 'git', label: 'Repository', color: '#00A7D6' },
    { id: 'ci', label: 'CI Factory', color: '#FF9800' },
    { id: 'docker', label: 'Docker Factory', color: '#00A7D6' },
    { id: 'registry', label: 'Registry', color: '#00A7D6' },
    { id: 'kubernetes', label: 'K8s Harbor', color: '#00C853' },
    { id: 'monitoring', label: 'Monitoring', color: '#00C853' },
    { id: 'database', label: 'Database', color: '#4FC3F7' },
    { id: 'cloud', label: 'Cloud', color: '#00A7D6' },
    { id: 'security', label: 'Security', color: '#F4B740' },
    { id: 'production', label: 'Production', color: '#00C853' },
    { id: 'contact', label: 'Contact', color: '#00D5FF' },
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