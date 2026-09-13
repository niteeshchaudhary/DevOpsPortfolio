import { useScroll } from '../ScrollContext'

const EVENTS = [
  ['git', 'push origin main', 'ok'],
  ['gha', 'ci.yml · #1842', '11.4s'],
  ['docker', 'build linux/amd64', 'cached'],
  ['ghcr', 'push plant:sha-7a0f', 'ok'],
  ['helm', 'upgrade harbor --atomic', 'synced'],
  ['istio', 'vs / reviews 1/1', 'ready'],
  ['argocd', 'app plant OutOfSync→Healthy', 'ok'],
  ['k8s', 'rollout restart deploy/api', 'done'],
  ['prom', 'scrape api:9090', '200'],
  ['grafana', 'p99 latency', '42ms'],
  ['vault', 'renew k8s-auth', 'ok'],
  ['tf', 'plan +0 ~2 -0', 'clean'],
]

export default function OpsTicker() {
  const { currentSection, sections } = useScroll()
  const district = sections[currentSection]?.label || 'ARRIVAL'
  const row = [...EVENTS, ...EVENTS]

  return (
    <div className="ops-ticker" aria-hidden>
      <span className="ops-ticker-live">
        <span className="ops-ticker-dot" />
        LIVE
      </span>
      <span className="ops-ticker-zone">{district}</span>
      <div className="ops-ticker-mask">
        <div className="ops-ticker-track">
          {row.map(([svc, msg, tag], i) => (
            <span key={`${svc}-${i}`} className="ops-ticker-item">
              <span className="ops-ticker-svc">{svc}</span>
              <span>{msg}</span>
              <span className="ops-ticker-tag">{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
