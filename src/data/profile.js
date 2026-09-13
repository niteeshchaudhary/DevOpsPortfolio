export const profile = {
  name: 'Niteesh Kamal Chaudhary',
  shortName: 'Niteesh',
  handle: 'niteeshchaudhary',
  title: 'Software Developer · Full Stack · DevOps',
  roles: ['Software Developer', 'Full Stack Engineer', 'Platform / DevOps', 'Problem Solver'],
  avatar: 'https://avatars.githubusercontent.com/u/66108270?v=4',
  email: 'nkchaudhary00@gmail.com',
  github: 'https://github.com/niteeshchaudhary',
  linkedin: 'https://www.linkedin.com/in/niteesh-kamal-chaudhary/',
  twitter: 'https://twitter.com/Niteesh12857418',
  bio: 'I like building systems that actually ship — from Kubernetes platforms and GitOps to full-stack apps and computer-vision tools. Strong engineering background, hands-on across cloud, AI, and product.',
  headline: 'INFRASTRUCTURE DEPLOYMENT',
}

export const skillGroups = [
  {
    name: 'Languages',
    items: ['C', 'C++', 'C#', 'Java', 'Python', 'PHP', 'JavaScript'],
  },
  {
    name: 'Frontend',
    items: ['HTML5', 'CSS3', 'React'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'MySQL', 'PostgreSQL'],
  },
  {
    name: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'Istio', 'ArgoCD', 'AWS', 'GCP', 'Azure', 'Linux', 'Git'],
  },
  {
    name: 'AI / ML',
    items: ['OpenCV', 'TensorFlow', 'PyTorch', 'NLTK', 'NLP'],
  },
]

export const social = [
  { id: 'github', label: 'GitHub', href: profile.github, color: '#B388FF' },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedin, color: '#00CFFF' },
  { id: 'twitter', label: 'Twitter', href: profile.twitter, color: '#4FC3F7' },
  { id: 'email', label: 'Email', href: `mailto:${profile.email}`, color: '#FF8F1F' },
]
