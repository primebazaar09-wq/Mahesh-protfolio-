export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'systems' | 'web' | 'mobile' | 'opensource';
  year: string;
  role: string;
  client?: string;
  summary: string;
  metrics: string[];
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    architecture: string[];
    results: string[];
  };
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; note: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  availableForHire: boolean;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  metrics: {
    value: string;
    label: string;
    context: string;
  }[];
  theme: 'obsidian' | 'minimal-light' | 'emerald' | 'monograph';
  projects: Project[];
  experiences: ExperienceItem[];
  skillGroups: SkillGroup[];
  testimonials: Testimonial[];
}

export const initialPortfolioData: PortfolioProfile = {
  name: "P. M. Joya",
  title: "Full-Stack Software Engineer & Product Designer",
  tagline: "Architecting resilient distributed systems, modern full-stack web applications, and fluid interfaces engineered for scale.",
  location: "Available Worldwide · Remote",
  email: "pmjoya123@gmail.com",
  availableForHire: true,
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  metrics: [
    { value: "8+", label: "Years Experience", context: "Engineering web systems" },
    { value: "28+", label: "Production Apps", context: "Shipped to global users" },
    { value: "99.98%", label: "Uptime Maintained", context: "Mission-critical services" },
    { value: "1.5M+", label: "Active Users", context: "Engaged across platforms" },
  ],
  bio: [
    "I am a senior full-stack engineer and interface craftsman with over 8 years of experience building mission-critical software. I specialize in bridging the gap between rigorous systems architecture and intuitive, delightful user experiences.",
    "My work spans high-throughput backend microservices, real-time reactive web applications, cloud infrastructure, and design systems. I believe great software is born at the intersection of mechanical sympathy, strict type safety, and uncompromising visual clarity.",
    "When I'm not architecting web platforms or reviewing code, I explore open-source toolchains, generative graphics, and developer productivity instruments."
  ],
  theme: "obsidian",
  projects: [
    {
      id: "aether-flow",
      title: "Aether Flow",
      subtitle: "Distributed Event Stream Orchestrator",
      category: "systems",
      year: "2026",
      role: "Lead Systems Architect",
      client: "Aurora Distributed Systems",
      summary: "A high-throughput distributed pipeline orchestrator that processes 850k+ events/sec with dynamic backpressure regulation and visual DAG execution monitoring.",
      metrics: ["850k+ events/sec", "-42% P99 Latency", "Zero Data Loss"],
      tags: ["TypeScript", "Node.js", "Redis Streams", "Docker", "Tailwind CSS"],
      featured: true,
      liveUrl: "https://example.com/aether-flow",
      githubUrl: "https://github.com/example/aether-flow",
      caseStudy: {
        overview: "Aether Flow addresses complex multi-region streaming bottlenecks for enterprise pipelines requiring real-time DAG scheduling and adaptive stream rate modulation.",
        challenge: "Legacy systems struggled with memory spikes during sudden ingress spikes, causing cascading worker pod evictions and delayed consumer reconciliations.",
        solution: "Designed a lightweight token-bucket flow coordinator with ring-buffered telemetry, decoupled WebSocket state broadcasters, and a reactive dashboard canvas.",
        architecture: [
          "Event Ingress: Partitioned Redis Stream workers with Raft cluster consensus",
          "Execution Core: Asynchronous DAG scheduler with automated checkpointing",
          "Client UI: React 19 virtualized viewport with sub-16ms telemetry re-renders",
          "Deployment: Containerized Kubernetes stateful sets with horizontal autoscaling"
        ],
        results: [
          "Reduced P99 processing latency from 320ms down to 18ms",
          "Saved $18,000/month in idle cloud compute costs via dynamic scale-down",
          "Adopted across 4 enterprise business divisions without production downtime"
        ]
      }
    },
    {
      id: "chronicle-cms",
      title: "Chronicle Studio",
      subtitle: "Collaborative Headless Publishing Engine",
      category: "web",
      year: "2025",
      role: "Principal Frontend Engineer",
      client: "Metropolis Media",
      summary: "A real-time multiplayer editorial suite supporting conflict-free manuscript collaboration, rich block schemas, automated SEO asset rendering, and edge previews.",
      metrics: ["Multiplayer CRDT", "Sub-20ms Sync", "40+ Custom Blocks"],
      tags: ["React 19", "TypeScript", "Tailwind CSS", "WebSockets", "Edge Workers"],
      featured: true,
      liveUrl: "https://example.com/chronicle",
      githubUrl: "https://github.com/example/chronicle-cms",
      caseStudy: {
        overview: "Metropolis Media needed an ultra-fast editorial canvas where dozens of concurrent writers and copyeditors could draft, review, and stage long-form journalism simultaneously.",
        challenge: "Existing headless CMS tools locked documents during editing sessions or caused destructive merge conflicts when multiple authors modified rich tables and embed widgets.",
        solution: "Engineered a custom block editor powered by Conflict-free Replicated Data Types (CRDTs), live presence awareness, and instant edge-side static site staging.",
        architecture: [
          "State Sync: Yjs CRDT integration over secure binary WebSockets",
          "Block Renderer: Modular polymorphic node tree with semantic accessibility",
          "Asset Optimization: Automatic WebP/AVIF transformation pipeline via edge workers",
          "Security: Role-based field level permissions and encrypted audit trails"
        ],
        results: [
          "Over 350 published articles edited simultaneously with zero data collision",
          "Editor load time decreased by 74% compared to prior monolith",
          "Published turnaround time cut from 45 minutes to under 6 minutes"
        ]
      }
    },
    {
      id: "omnipay-os",
      title: "OmniPay Mobile OS",
      subtitle: "Next-Generation Global Liquidity Interface",
      category: "mobile",
      year: "2025",
      role: "Mobile & UI Lead",
      client: "Omni Financial Group",
      summary: "A high-precision mobile financial dashboard providing instantaneous multi-currency FX swaps, biometric approvals, and predictive treasury cash-flow forecasting.",
      metrics: ["$24M Daily Volume", "4.9★ App Store", "Sub-second Clearing"],
      tags: ["React Native", "TypeScript", "Tailwind CSS", "Biometrics", "D3.js"],
      featured: true,
      liveUrl: "https://example.com/omnipay",
      githubUrl: "https://github.com/example/omnipay",
      caseStudy: {
        overview: "OmniPay consolidates fragmented institutional foreign exchange accounts into a unified, secure mobile experience engineered for cross-border commerce.",
        challenge: "High financial volatility required live pricing updates, sub-second execution confirmations, and bulletproof offline transaction queuing under unstable cellular links.",
        solution: "Built a reactive state architecture with local SQLite optimistic storage, cryptographic payload signing, and fluid gesture-driven balance management.",
        architecture: [
          "Security: Enclave hardware key generation and biometric verification",
          "Data Layer: Reactive offline-first sync with idempotency keys",
          "Visualization: Hardware-accelerated canvas charts with zero frame drops"
        ],
        results: [
          "Processed over $1.2B in volume during the first 6 months of release",
          "Achieved a 99.995% transaction execution success rate",
          "Featured on major fintech innovation lists for UI clarity"
        ]
      }
    },
    {
      id: "prism-canvas",
      title: "Prism Lab",
      subtitle: "Parametric Shader & Generative Engine",
      category: "opensource",
      year: "2024",
      role: "Creator & Maintainer",
      summary: "An open-source interactive browser-based GPU shader studio allowing visual artists and developers to design, animate, and export GLSL shaders to WebAssembly.",
      metrics: ["3.2k GitHub Stars", "85k Monthly Users", "Zero Dependencies"],
      tags: ["WebGL", "GLSL", "TypeScript", "Canvas API", "Vite"],
      featured: false,
      liveUrl: "https://example.com/prism-lab",
      githubUrl: "https://github.com/example/prism-lab",
      caseStudy: {
        overview: "Created as an open-source tool to democratize creative coding and real-time graphics authoring directly in standard modern web browsers.",
        challenge: "Compiling shaders on the fly in the browser frequently caused browser tab crashes and unhandled GPU driver compilation errors without informative diagnostics.",
        solution: "Implemented an in-browser AST parser that inspects GLSL syntax, highlights exact line errors with fix suggestions, and runs shaders in isolated Web Worker sandboxes.",
        architecture: [
          "Renderer: Custom WebGL2 state manager with multiple render targets (MRT)",
          "Compiler: In-browser syntax linting and uniform parameter binding",
          "Export: One-click export to standalone Web Components, MP4, and WebM"
        ],
        results: [
          "Trending #1 on GitHub trending repositories for creative tools",
          "Used in university computer graphics courses across 12 countries"
        ]
      }
    },
    {
      id: "kubewatchdog",
      title: "KubeWatchdog",
      subtitle: "Automated Cluster Health & Anomaly Detector",
      category: "systems",
      year: "2024",
      role: "Backend Architect",
      summary: "An autonomous telemetry agent that detects micro-memory leaks, pod thrashing cycles, and ingress certificate expirations before service disruption.",
      metrics: ["<0.5% CPU Overhead", "Automated Remediation", "MIT License"],
      tags: ["Go", "Kubernetes", "Prometheus", "TypeScript", "CLI"],
      featured: false,
      liveUrl: "https://example.com/kubewatchdog",
      githubUrl: "https://github.com/example/kubewatchdog",
      caseStudy: {
        overview: "Built to solve silent node degradation in mid-sized Kubernetes clusters without adding heavy enterprise monitoring bloat.",
        challenge: "Standard alerts triggered after pods had already entered CrashLoopBackOff, causing customer impact and stressful on-call escalations.",
        solution: "Devised statistical moving-window trend heuristics that predict OOM crashes 20 minutes prior to failure threshold.",
        architecture: [
          "DaemonSet agent written for ultra-low memory footprints (<15MB RAM)",
          "Real-time webhook dispatcher with Slack, PagerDuty, and email connectors"
        ],
        results: [
          "Prevented 87 critical staging and production outages over 12 months",
          "Over 120,000 Docker pulls from the public container registry"
        ]
      }
    },
    {
      id: "solace-health",
      title: "Solace Care",
      subtitle: "HIPAA-Compliant Telemedicine Consultation Suite",
      category: "web",
      year: "2023",
      role: "Senior Full-Stack Engineer",
      client: "Solace Health Inc.",
      summary: "Secure WebRTC video consultation system with end-to-end encryption, digital prescription signing, and real-time electronic health record syncing.",
      metrics: ["E2E Encrypted", "HIPAA Validated", "100k+ Consultations"],
      tags: ["WebRTC", "Node.js", "React", "PostgreSQL", "Tailwind CSS"],
      featured: false,
      liveUrl: "https://example.com/solace",
      githubUrl: "https://github.com/example/solace",
      caseStudy: {
        overview: "Comprehensive clinical consultation suite providing doctors and patients with private, low-latency video care rooms and real-time medical charting.",
        challenge: "Maintaining rock-solid video and audio clarity over variable rural bandwidth connections while strictly adhering to regulatory compliance standards.",
        solution: "Integrated adaptive SFU video routing with dynamic bit-rate degradation, encrypted media channels, and offline prescription staging.",
        architecture: [
          "Media: Selective Forwarding Unit (SFU) with automated fallback to P2P mesh",
          "Data: Row-Level Security in PostgreSQL with AES-256 encrypted fields",
          "Audit: Tamper-proof append-only compliance ledger"
        ],
        results: [
          "Facilitated over 100,000 patient appointments with 99.8% session completion",
          "Received flawless external HIPAA and SOC2 Type II compliance audit"
        ]
      }
    }
  ],
  experiences: [
    {
      id: "aurora",
      period: "2024 — Present",
      role: "Lead Software Engineer",
      company: "Aurora Distributed Systems",
      location: "San Francisco / Remote",
      description: "Directing the core architecture for cloud stream processing and developer platform tooling. Mentoring 8 engineers across frontend and backend squads.",
      achievements: [
        "Architected next-generation event orchestrator processing over 10B monthly requests",
        "Decreased cloud infrastructure expenditure by 34% through automated worker right-sizing",
        "Spearheaded company-wide migration to TypeScript strict mode and automated integration suites"
      ],
      technologies: ["TypeScript", "Node.js", "Docker", "Kubernetes", "Redis", "React"]
    },
    {
      id: "veloce",
      period: "2022 — 2024",
      role: "Senior Frontend Architect",
      company: "Veloce Digital",
      location: "New York / Remote",
      description: "Led the design systems guild and unified 6 standalone enterprise web applications into a cohesive, high-performance micro-frontend ecosystem.",
      achievements: [
        "Constructed zero-dependency headless UI library used by 45+ product engineers",
        "Improved Core Web Vitals across all product surfaces to 95+ Lighthouse score",
        "Reduced time-to-first-feature for new engineering hires from 3 weeks to 3 days"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GraphQL", "Storybook"]
    },
    {
      id: "prism",
      period: "2020 — 2022",
      role: "Full-Stack Engineer",
      company: "Prism Interactive",
      location: "Austin, TX",
      description: "Engineered real-time collaborative workspaces, interactive data visualizations, and robust REST/WebSocket microservices.",
      achievements: [
        "Designed WebSocket broadcasting cluster sustaining 50,000 concurrent sessions",
        "Implemented end-to-end test coverage that reduced regression bug reports by 60%",
        "Collaborated with product designers to ship 12 major feature iterations on schedule"
      ],
      technologies: ["JavaScript / TS", "Node.js", "Express", "PostgreSQL", "WebSockets", "CSS3"]
    },
    {
      id: "nexus",
      period: "2018 — 2020",
      role: "Software Developer",
      company: "Nexus Softworks",
      location: "Seattle, WA",
      description: "Built client-facing web portals, RESTful integrations, and automated deployment pipelines for high-growth tech startups.",
      achievements: [
        "Developed custom customer analytics dashboards handling 2M+ records daily",
        "Automated CI/CD pipelines reducing deployment friction and zeroing out release rollback rates"
      ],
      technologies: ["React", "Node.js", "MySQL", "AWS S3 / EC2", "HTML5 / CSS3"]
    }
  ],
  skillGroups: [
    {
      category: "Core Languages & Runtimes",
      skills: [
        { name: "TypeScript", level: 95, note: "Strict type systems, generics, AST, library authoring" },
        { name: "JavaScript (ESNext)", level: 98, note: "Event loop, V8 optimization, asynchronous execution" },
        { name: "Node.js", level: 92, note: "Streams, cluster worker threads, low-latency HTTP" },
        { name: "Go / Golang", level: 82, note: "Goroutines, channels, microservices, CLI tools" },
        { name: "Python", level: 80, note: "Automation, data scripting, pipeline tooling" }
      ]
    },
    {
      category: "Frontend & Interface Engineering",
      skills: [
        { name: "React 19 & Next.js", level: 96, note: "Hooks, Server Components, suspense, concurrent mode" },
        { name: "Tailwind CSS & Styling", level: 95, note: "Design tokens, utility-first systems, responsive math" },
        { name: "State Management", level: 90, note: "Zustand, Redux Toolkit, reactive observables" },
        { name: "WebGL & Canvas", level: 78, note: "Three.js, 2D Canvas context, shaders, visual telemetry" },
        { name: "Accessibility & WCAG", level: 92, note: "Screen-readers, ARIA semantics, keyboard navigation" }
      ]
    },
    {
      category: "Backend, Databases & Distributed Systems",
      skills: [
        { name: "PostgreSQL & SQL", level: 90, note: "Query optimization, indexing, partitions, Drizzle/Prisma" },
        { name: "Redis & In-Memory Stores", level: 88, note: "Caching topologies, Pub/Sub, rate-limiting, streams" },
        { name: "REST & GraphQL APIs", level: 94, note: "Contract-first OpenAPI, Apollo, typed schema validation" },
        { name: "WebSockets & Real-time", level: 90, note: "Binary payloads, heartbeat reconnection, CRDTs" },
        { name: "Message Queues", level: 84, note: "Kafka, RabbitMQ, resilient worker job processors" }
      ]
    },
    {
      category: "Cloud, DevOps & Tooling",
      skills: [
        { name: "Docker & Containers", level: 88, note: "Multi-stage builds, minimal images, layer caching" },
        { name: "Kubernetes (K8s)", level: 80, note: "Deployments, services, ingress, helm charts" },
        { name: "AWS & GCP Cloud", level: 86, note: "Serverless functions, Cloud Run, S3, IAM security" },
        { name: "CI/CD & Git Workflows", level: 92, note: "GitHub Actions, automated test matrices, semantic releases" },
        { name: "Vite & Build Tooling", level: 94, note: "Rollup plugins, bundle splitting, module federation" }
      ]
    }
  ],
  testimonials: [
    {
      id: "t1",
      quote: "Joya possesses that rare dual superpower: deep systems-level architectural rigor coupled with obsessive craft in user interface design. Joya tackled our hardest latency challenge and delivered a clean, maintainable solution.",
      author: "Sarah Lin",
      role: "VP of Engineering",
      company: "Aurora Distributed Systems",
      avatarText: "SL"
    },
    {
      id: "t2",
      quote: "Working with Joya was a game-changer for our design systems guild. Joya unified fragmented web apps into an ergonomic UI toolkit that doubled our feature shipment velocity without sacrificing quality.",
      author: "Marcus Vance",
      role: "Product Director",
      company: "Veloce Digital",
      avatarText: "MV"
    },
    {
      id: "t3",
      quote: "Exceptional communicator, humble teammate, and relentless engineer. Joya's ability to dive into complex edge cases and emerge with elegant simplicity is something every engineering leader looks for.",
      author: "Elena Rostova",
      role: "Founder & CTO",
      company: "Nexus Softworks",
      avatarText: "ER"
    }
  ]
};
