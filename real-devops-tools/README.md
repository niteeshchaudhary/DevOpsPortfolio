# DevOps Tools SVG Kit

A comprehensive collection of **40+ DevOps tool icons** designed with consistent styling following the DevOps SVG Design System.

## 🎨 Design Specifications

- **Canvas**: 64x64
- **Stroke**: 2px with rounded joins and caps
- **Colors**: Tool-specific brand colors adapted to our design system
- **Style**: Hybrid approach - recognizable silhouettes with consistent design treatment
- **Features**: Cyan glow effects, animation-ready IDs, layered structure

## 📁 Tool Categories

### Version Control & CI/CD
- `github.svg` - GitHub Octocat
- `git.svg` - Git diamond logo
- `github-actions.svg` - Workflow automation
- `jenkins.svg` - Jenkins butler
- `gitlab.svg` - GitLab fox
- `argocd.svg` - ArgoCD hexagon

### Containers & Orchestration
- `docker.svg` - Docker whale
- `kubernetes.svg` - K8s wheel

### Cloud Providers
- `aws.svg` - AWS cloud with smile
- `gcp.svg` - GCP multi-color cloud
- `azure.svg` - Azure infinity cloud

### AWS Services
- `lambda.svg` - Serverless functions
- `s3.svg` - Object storage bucket
- `kinesis.svg` - Data streaming
- `rds.svg` - Relational database
- `sqs.svg` - Message queue
- `dynamodb.svg` - NoSQL database
- `firebase.svg` - Firebase flame
- `firestore.svg` - Document database
- `dms.svg` - Database migration
- `cloudfront.svg` - CDN distribution
- `cloudformation.svg` - Infrastructure templates
- `amplify.svg` - App development
- `waf.svg` - Web application firewall

### Security & Network
- `cloudflare.svg` - CDN and security
- `firewall.svg` - Network security wall
- `istio.svg` - Service mesh sail

### Infrastructure as Code
- `terraform.svg` - IaC purple
- `ansible.svg` - Automation red

### Logging & Monitoring
- `elastic.svg` - Search and analytics
- `kibana.svg` - Visualization dashboard
- `logstash.svg` - Data pipeline
- `grafana.svg` - Metrics dashboard
- `prometheus.svg` - Monitoring and alerting

### Databases & Messaging
- `redis.svg` - In-memory data store
- `kafka.svg` - Event streaming
- `rabbitmq.svg` - Message broker

## 🎯 Features

### Consistent Design Language
- All icons use the same metal gradient (`#4D5664` → `#343B46` → `#1D232C`)
- Uniform 2px strokes with rounded caps
- Standardized shadows (0, 4, 4px, 30% opacity)
- Cyan glow effects for active states

### Animation Ready
Each SVG includes:
- Layered groups (`#body`, `#logo`, `#glow`)
- Named elements for GSAP targeting
- Built-in glow filters

### Example Animation
```javascript
// Pulse effect
gsap.to("#glow", {
  opacity: 0.6,
  repeat: -1,
  yoyo: true,
  duration: 1
});

// Rotate logo
gsap.to("#logo", {
  rotate: 360,
  repeat: -1,
  duration: 10
});
```

## 📦 Usage

### HTML
```html
<img src="tools/github.svg" alt="GitHub" class="w-16 h-16" />
```

### React
```jsx
import GitHub from './tools/github.svg';

function ToolIcon() {
  return <GitHub className="w-16 h-16" />;
}
```

### Tailwind CSS
```html
<img src="tools/docker.svg" 
     class="w-16 h-16 hover:scale-110 transition-transform" />
```

## 🔧 File Structure

```
real-devops-tools/
├── tools/
│   ├── github.svg
│   ├── git.svg
│   ├── github-actions.svg
│   ├── jenkins.svg
│   ├── gitlab.svg
│   ├── argocd.svg
│   ├── docker.svg
│   ├── kubernetes.svg
│   ├── aws.svg
│   ├── gcp.svg
│   ├── azure.svg
│   ├── lambda.svg
│   ├── s3.svg
│   ├── kinesis.svg
│   ├── rds.svg
│   ├── sqs.svg
│   ├── dynamodb.svg
│   ├── firebase.svg
│   ├── firestore.svg
│   ├── dms.svg
│   ├── cloudfront.svg
│   ├── cloudformation.svg
│   ├── amplify.svg
│   ├── waf.svg
│   ├── cloudflare.svg
│   ├── firewall.svg
│   ├── istio.svg
│   ├── terraform.svg
│   ├── ansible.svg
│   ├── elastic.svg
│   ├── kibana.svg
│   ├── logstash.svg
│   ├── grafana.svg
│   ├── prometheus.svg
│   ├── redis.svg
│   ├── kafka.svg
│   └── rabbitmq.svg
└── real-svg-kit.md
```

## 🎨 Color Palette

### Brand Colors (Adapted)
- **GitHub**: `#2D3440` → `#1A1F26`
- **Git**: `#F1502F` → `#CB3D1E`
- **Jenkins**: `#D24939` → `#A6382B`
- **GitLab**: `#FC6D26` → `#E24329`
- **ArgoCD**: `#EF7B46` → `#D65D2E`
- **Docker**: `#0DB7ED` → `#0995C1`
- **Kubernetes**: `#326CE5` → `#2555B8`
- **AWS**: `#FF9900` → `#CC7A00`
- **GCP**: `#4285F4`, `#34A853`, `#FBBC05`, `#EA4335`
- **Azure**: `#00A4EF` → `#0078D4`
- **Firebase**: `#FFCA28` → `#FF7043`
- **Terraform**: `#7B42BC` → `#5C358D`
- **Ansible**: `#EE0000` → `#AA0000`
- **Elastic**: `#005571` → `#003A52`
- **Kibana**: `#F04E98` → `#C93C7D`
- **Logstash**: `#FCC300` → `#B88F00`
- **Grafana**: `#F46800` → `#B84F00`
- **Prometheus**: `#E6522C` → `#B84122`
- **Redis**: `#DC382D` → `#A82A22`
- **Kafka**: `#231F20` → `#3D3D3D`
- **RabbitMQ**: `#FF6600` → `#CC5200`
- **Istio**: `#466BB0` → `#2E4A8A`
- **Cloudflare**: `#F38020` → `#D65D08`
- **Firewall**: `#DC3545` → `#A71D2A`

### Universal Elements
- **Metal Gradient**: `#4D5664` → `#343B46` → `#1D232C`
- **Stroke**: `#1A1F26`
- **Glow**: `#00D5FF` with cyan filter
- **Highlight**: White at 30% → 10% → 0% opacity

## 📄 License

MIT License - Free for personal and commercial use.

## 🤝 Contributing

When adding new tools:
1. Follow the 64x64 canvas size
2. Use brand colors adapted to our palette
3. Include `#body`, `#logo`, and `#glow` layers
4. Add cyan glow filter for consistency
5. Test animations with GSAP