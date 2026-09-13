import { useMemo } from 'react'

const modules = import.meta.glob('../../real-devops-tools/original-svgs/*.{svg,SVG}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byFile = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split(/[/\\]/).pop().replace(/\.svg$/i, ''), url]),
)

export function toolSrc(name) {
  return byFile[name] || byFile[`${name}-original`] || byFile[name.replace(/-original$/, '')]
}

export const DISTRICT_TOOLS = {
  arrival: [
    { name: 'git', side: 'left', top: '16%', size: 48, rot: -12, inset: '2.6vw' },
    { name: 'github', side: 'left', top: '42%', size: 40, rot: 8, inset: '8.4vw' },
    { name: 'python-original', side: 'left', top: '68%', size: 38, rot: -4, inset: '3.2vw' },
    { name: 'gitlab-original', side: 'right', top: '18%', size: 44, rot: 10, inset: '2.8vw' },
    { name: 'bitbucket-original', side: 'right', top: '44%', size: 38, rot: -6, inset: '8.2vw' },
    { name: 'gitpod-original', side: 'right', top: '70%', size: 36, rot: 6, inset: '3vw' },
  ],
  source: [
    { name: 'github', side: 'left', top: '14%', size: 50, rot: -8, inset: '2.6vw' },
    { name: 'git', side: 'left', top: '40%', size: 36, rot: 14, inset: '8.6vw' },
    { name: 'go-original', side: 'left', top: '66%', size: 34, rot: -6, inset: '3vw' },
    { name: 'gitlab-original', side: 'right', top: '16%', size: 46, rot: 6, inset: '2.8vw' },
    { name: 'bitbucket-original', side: 'right', top: '42%', size: 40, rot: -10, inset: '8.4vw' },
    { name: 'gitpod-original', side: 'right', top: '68%', size: 36, rot: 8, inset: '3.2vw' },
  ],
  pipeline: [
    { name: 'jenkins-original', side: 'left', top: '12%', size: 50, rot: -6, inset: '2.6vw' },
    { name: 'git', side: 'left', top: '38%', size: 36, rot: 10, inset: '8.4vw' },
    { name: 'ansible', side: 'left', top: '64%', size: 38, rot: -8, inset: '3vw' },
    { name: 'github', side: 'right', top: '14%', size: 42, rot: 8, inset: '2.8vw' },
    { name: 'bamboo-original', side: 'right', top: '40%', size: 40, rot: -12, inset: '8.2vw' },
    { name: 'argocd-original', side: 'right', top: '66%', size: 38, rot: 6, inset: '3.2vw' },
  ],
  factory: [
    { name: 'docker', side: 'left', top: '12%', size: 52, rot: -8, inset: '2.4vw' },
    { name: 'jenkins-original', side: 'left', top: '38%', size: 40, rot: 8, inset: '8.6vw' },
    { name: 'ansible', side: 'left', top: '62%', size: 36, rot: -4, inset: '3vw' },
    { name: 'packer-original', side: 'left', top: '82%', size: 34, rot: 10, inset: '8.2vw' },
    { name: 'kubernetes', side: 'right', top: '12%', size: 50, rot: 10, inset: '2.6vw' },
    { name: 'helm-original', side: 'right', top: '38%', size: 40, rot: -8, inset: '8.4vw' },
    { name: 'vagrant-original', side: 'right', top: '64%', size: 36, rot: 6, inset: '3vw' },
  ],
  registry: [
    { name: 'docker', side: 'left', top: '14%', size: 50, rot: 6, inset: '2.6vw' },
    { name: 'portainer-original', side: 'left', top: '42%', size: 40, rot: -10, inset: '8.4vw' },
    { name: 'tomcat-original', side: 'left', top: '70%', size: 36, rot: 8, inset: '3vw' },
    { name: 'nginx-original', side: 'right', top: '16%', size: 44, rot: 8, inset: '2.8vw' },
    { name: 'helm-original', side: 'right', top: '44%', size: 38, rot: -6, inset: '8.2vw' },
    { name: 'apache-original', side: 'right', top: '70%', size: 36, rot: 4, inset: '3.2vw' },
  ],
  harbor: [
    { name: 'kubernetes', side: 'left', top: '12%', size: 54, rot: -10, inset: '2.4vw' },
    { name: 'helm-original', side: 'left', top: '38%', size: 40, rot: 8, inset: '8.6vw' },
    { name: 'nomad-original', side: 'left', top: '64%', size: 36, rot: -6, inset: '3vw' },
    { name: 'rancher-original', side: 'right', top: '14%', size: 46, rot: 6, inset: '2.6vw' },
    { name: 'envoy-original', side: 'right', top: '40%', size: 40, rot: -8, inset: '8.4vw' },
    { name: 'kubeflow-original', side: 'right', top: '66%', size: 36, rot: 10, inset: '3.2vw' },
  ],
  monitor: [
    { name: 'grafana', side: 'left', top: '12%', size: 48, rot: -6, inset: '2.6vw' },
    { name: 'prometheus-original', side: 'left', top: '38%', size: 42, rot: 10, inset: '8.4vw' },
    { name: 'elasticsearch-original', side: 'left', top: '64%', size: 36, rot: -8, inset: '3vw' },
    { name: 'datadog-original', side: 'right', top: '14%', size: 44, rot: 8, inset: '2.8vw' },
    { name: 'kibana-original', side: 'right', top: '40%', size: 40, rot: -8, inset: '8.2vw' },
    { name: 'newrelic-original', side: 'right', top: '66%', size: 36, rot: 6, inset: '3.2vw' },
  ],
  database: [
    { name: 'postgresql-original', side: 'left', top: '12%', size: 48, rot: -8, inset: '2.6vw' },
    { name: 'redis-original', side: 'left', top: '38%', size: 40, rot: 8, inset: '8.6vw' },
    { name: 'cassandra-original', side: 'left', top: '64%', size: 36, rot: -4, inset: '3vw' },
    { name: 'mongodb-original', side: 'right', top: '14%', size: 46, rot: 6, inset: '2.8vw' },
    { name: 'mysql-original', side: 'right', top: '40%', size: 42, rot: -10, inset: '8.2vw' },
    { name: 'prisma-original', side: 'right', top: '66%', size: 36, rot: 8, inset: '3.2vw' },
  ],
  cloud: [
    { name: 'azure-original', side: 'left', top: '12%', size: 48, rot: -6, inset: '2.6vw' },
    { name: 'terraform', side: 'left', top: '36%', size: 42, rot: 10, inset: '8.4vw' },
    { name: 'pulumi-original', side: 'left', top: '60%', size: 36, rot: -8, inset: '3vw' },
    { name: 'heroku-original', side: 'left', top: '80%', size: 34, rot: 6, inset: '8vw' },
    { name: 'googlecloud-original', side: 'right', top: '12%', size: 48, rot: 8, inset: '2.6vw' },
    { name: 'digitalocean-original', side: 'right', top: '36%', size: 40, rot: -8, inset: '8.4vw' },
    { name: 'cloudflare-original', side: 'right', top: '60%', size: 36, rot: 4, inset: '3vw' },
    { name: 'railway-original', side: 'right', top: '80%', size: 34, rot: -6, inset: '8vw' },
  ],
  security: [
    { name: 'vault-original', side: 'left', top: '14%', size: 46, rot: -8, inset: '2.6vw' },
    { name: 'sonarqube-original', side: 'left', top: '40%', size: 40, rot: 8, inset: '8.4vw' },
    { name: 'consul-original', side: 'left', top: '66%', size: 36, rot: -6, inset: '3vw' },
    { name: 'cloudflare-original', side: 'right', top: '16%', size: 44, rot: 6, inset: '2.8vw' },
    { name: 'nginx-original', side: 'right', top: '42%', size: 38, rot: -10, inset: '8.2vw' },
    { name: 'python-original', side: 'right', top: '68%', size: 34, rot: 8, inset: '3.2vw' },
  ],
  production: [
    { name: 'nginx-original', side: 'left', top: '12%', size: 46, rot: -6, inset: '2.6vw' },
    { name: 'argocd-original', side: 'left', top: '38%', size: 42, rot: 8, inset: '8.4vw' },
    { name: 'apache-original', side: 'left', top: '64%', size: 36, rot: -4, inset: '3vw' },
    { name: 'vercel-original', side: 'right', top: '14%', size: 40, rot: 10, inset: '2.8vw' },
    { name: 'netlify-original', side: 'right', top: '40%', size: 42, rot: -8, inset: '8.2vw' },
    { name: 'nextjs-original', side: 'right', top: '66%', size: 38, rot: 6, inset: '3.2vw' },
  ],
  finale: [
    { name: 'github', side: 'left', top: '14%', size: 46, rot: -8, inset: '2.6vw' },
    { name: 'git', side: 'left', top: '38%', size: 36, rot: 10, inset: '8.4vw' },
    { name: 'react-original', side: 'left', top: '62%', size: 38, rot: -6, inset: '3vw' },
    { name: 'vite-original', side: 'left', top: '82%', size: 34, rot: 8, inset: '8vw' },
    { name: 'docker', side: 'right', top: '16%', size: 44, rot: 6, inset: '2.8vw' },
    { name: 'kubernetes', side: 'right', top: '40%', size: 42, rot: -8, inset: '8.2vw' },
    { name: 'terraform', side: 'right', top: '64%', size: 36, rot: 10, inset: '3.2vw' },
    { name: 'grafana', side: 'right', top: '82%', size: 34, rot: -4, inset: '8vw' },
  ],
}

export default function ToolDecor({ district }) {
  const items = useMemo(
    () => (DISTRICT_TOOLS[district] || []).map((t) => ({ ...t, src: toolSrc(t.name) })).filter((t) => t.src),
    [district],
  )
  if (!items.length) return null

  return (
    <div className="tool-decor" aria-hidden>
      {items.map((t, i) => (
        <img
          key={`${t.name}-${i}`}
          src={t.src}
          alt=""
          className="tool-decor-icon"
          style={{
            [t.side]: t.inset || '3.2vw',
            top: t.top,
            width: t.size,
            height: t.size,
            transform: `rotate(${t.rot || 0}deg)`,
            animationDelay: `${i * 0.28}s`,
          }}
        />
      ))}
    </div>
  )
}
