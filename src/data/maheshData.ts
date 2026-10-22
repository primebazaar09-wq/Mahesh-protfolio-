export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'graphic-design' | 'video-editing' | 'app-dev';
  projectType: 'Personal App Project' | 'E-Commerce Brand Concept' | 'Creative Brand Concept' | 'Design Portfolio' | 'Video Editing Portfolio';
  summary: string;
  tools: string[];
  role: string;
  focus: string;
  deliverables: string[];
  problem: string;
  approach: string;
  finalResult: string;
  featured: boolean;
  accentColor: string;
  previewType: 'app' | 'brand' | 'studio' | 'design' | 'video';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconType: 'design' | 'video' | 'code';
  categoryKey: 'graphic-design' | 'video-editing' | 'app-dev';
  capabilities: string[];
  deliverableHighlights: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  tools: string[];
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverable: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  type: 'Milestone' | 'Current Focus' | 'Skill Expansion' | 'Vision';
  description: string;
  tags: string[];
}

export interface MaheshProfile {
  name: string;
  title: string;
  location: string;
  workMode: string;
  availabilityStatus: string;
  isAvailableForHire: boolean;
  email: string;
  whatsappNumber: string;
  whatsappMessageTemplate: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutIntro: string;
  aboutPhilosophy: string[];
  socials: {
    instagram: string;
    linkedin: string;
    github: string;
    behance: string;
  };
  portraitUrl: string;
  services: ServiceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  workflow: WorkflowStep[];
  journey: JourneyMilestone[];
}

export const initialMaheshProfile: MaheshProfile = {
  name: "Mahesh",
  title: "Graphic Designer | Video Editor | App Developer",
  location: "Jaipur, Rajasthan, India",
  workMode: "Remote / Worldwide",
  availabilityStatus: "Open for Freelance Projects",
  isAvailableForHire: true,
  email: "primebazaar09@gmail.com",
  whatsappNumber: "+919876543210", // Editable in Live Studio Customizer
  whatsappMessageTemplate: "Hi Mahesh, I came across your portfolio and would like to discuss a project.",
  heroHeadline: "Design That Captures Attention. Technology That Makes It Work.",
  heroSupportingText: "I'm Mahesh — a graphic designer, video editor, and app developer creating compelling visuals, engaging videos, and useful digital experiences.",
  aboutIntro: "I am a multi-disciplinary digital creative who bridges the gap between aesthetics and functionality. By combining creative visual design, dynamic video editing, and modern mobile app development, I help creators, businesses, and emerging brands build a distinctive, high-impact digital presence.",
  aboutPhilosophy: [
    "Instead of separating visual branding from the underlying product, I look at every project holistically. A great brand needs eye-catching graphics, magnetic short-form videos to capture an audience, and seamless mobile applications that turn attention into loyal users.",
    "I believe in honest collaboration, clear communication, and delivering work that genuinely solves a problem. Every project scope, pricing, and revision guideline is agreed upon openly before work begins.",
    "Driven by continuous learning, I am constantly experimenting with cutting-edge UI trends, advanced motion graphics, and AI-assisted workflows to bring fresh creative energy to every collaboration."
  ],
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    behance: "https://behance.net"
  },
  portraitUrl: "/public/assets/aistudio/1792355541595_be6dcb8e.png",
  services: [
    {
      id: "graphic-design",
      title: "Graphic Design",
      shortDesc: "Strategic visual identities, social media creatives, and marketing collateral designed to stop the scroll.",
      iconType: "design",
      categoryKey: "graphic-design",
      capabilities: [
        "Social media posts & promotional creatives",
        "Promotional banners & digital advertisements",
        "Brand identity concepts & logo systems",
        "Posters, flyers & high-CTR YouTube thumbnails",
        "Product creatives & marketing graphics"
      ],
      deliverableHighlights: "High-resolution print & web exports, editable source files, formatted for Instagram, LinkedIn & Web."
    },
    {
      id: "video-editing",
      title: "Video Editing",
      shortDesc: "High-retention short-form edits, cinematic pacing, dynamic captions, and motion graphics tailored for modern algorithms.",
      iconType: "video",
      categoryKey: "video-editing",
      capabilities: [
        "Instagram Reels, YouTube Shorts & TikTok edits",
        "Promotional, commercial & product launch videos",
        "Dynamic animated captions & sound design",
        "Short-form retention & pacing optimisation",
        "Cinematic color grading & creator storytelling"
      ],
      deliverableHighlights: "Rendered in 4K/1080p 9:16 & 16:9, licensed sound effects, motion graphics, and quick revision rounds."
    },
    {
      id: "app-dev",
      title: "App Development",
      shortDesc: "Intuitive mobile interfaces, interactive Android prototypes, and modern front-end experiences engineered for usability.",
      iconType: "code",
      categoryKey: "app-dev",
      capabilities: [
        "Android app concepts & functional prototypes",
        "Mobile UI/UX architecture & wireframing",
        "AI-powered application interfaces & voice concepts",
        "Interactive screens, gestures & smooth animations",
        "API integration & reactive state implementation"
      ],
      deliverableHighlights: "Interactive prototype previews, clean modular codebases, responsive layouts across phone viewports."
    }
  ],
  projects: [
    {
      id: "jarvis-ai",
      title: "JARVIS AI Assistant",
      subtitle: "Futuristic Voice & Interactive Neural Interface Concept",
      category: "app-dev",
      projectType: "Personal App Project",
      summary: "A personal mobile application concept exploring voice-guided commands, animated telemetry rings, conversational AI integration, and tactile futuristic visual feedback.",
      tools: ["React Native", "TypeScript", "Tailwind CSS", "Web Audio API", "AI Model API"],
      role: "Lead Concept Designer & Prototype Developer",
      focus: "Futuristic interface, voice assistant concept, UI animations, and AI integration",
      deliverables: ["Interactive mobile prototype", "Audio waveform visualization", "Voice command state manager", "Dark HUD design system"],
      problem: "Traditional voice assistants often feel sterile, static, or detached from visual cues, providing little feedback during processing or voice recognition states.",
      approach: "Engineered an ambient holographic interface featuring concentric reactive audio rings, real-time status pulses, and modular cards that expand smoothly as AI responses stream in.",
      finalResult: "A functional, responsive prototype demonstrating futuristic sci-fi aesthetic principles with sub-second feedback animations and voice interaction workflows.",
      featured: true,
      accentColor: "#6366f1",
      previewType: "app"
    },
    {
      id: "primebazaar",
      title: "PrimeBazaar",
      subtitle: "E-Commerce Identity, Brand Strategy & Selling Experience",
      category: "graphic-design",
      projectType: "E-Commerce Brand Concept",
      summary: "A comprehensive brand and digital storefront concept developed to create an engaging, modern retail shopping experience across social media and web channels.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Digital Marketing Strategy"],
      role: "Brand Identity Designer & Creative Director",
      focus: "Branding, promotional creatives, and online selling experience",
      deliverables: ["Brand identity & color tokens", "Promotional ad campaign banners", "Instagram carousel creatives", "Product card mockups"],
      problem: "New e-commerce brands often struggle to project trustworthiness and distinctiveness against generic marketplace listings.",
      approach: "Crafted a vibrant visual identity anchored by high-contrast typography, premium gold/dark accents, clear value propositions, and cohesive marketing banner sets.",
      finalResult: "A turnkey visual brand kit and collection of 15+ scroll-stopping promotional creatives ready for multi-channel ad testing.",
      featured: true,
      accentColor: "#f59e0b",
      previewType: "brand"
    },
    {
      id: "visionora-studio",
      title: "Visionora Studio",
      subtitle: "Creative Services Brand Concept & Visual Positioning",
      category: "graphic-design",
      projectType: "Creative Brand Concept",
      summary: "An avant-garde creative studio concept focused on modern visual positioning, editorial typography, and high-end digital service presentation.",
      tools: ["Figma", "Adobe Illustrator", "Photoshop", "Editorial Design"],
      role: "Creative Director & Identity Designer",
      focus: "Visual identity, creative presentation, and digital service positioning",
      deliverables: ["Studio brand guidelines", "Editorial service presentation", "Typography pairings", "Social media aesthetic grid"],
      problem: "Creative service agencies frequently blend together with identical minimalism that lacks character or cinematic authority.",
      approach: "Built a monochrome and electric violet visual framework blending brutalist grid math with sleek editorial type, creating an atmosphere of uncompromising creative focus.",
      finalResult: "A complete creative studio brand presentation with comprehensive social templates and digital client touchpoints.",
      featured: true,
      accentColor: "#8b5cf6",
      previewType: "studio"
    },
    {
      id: "social-media-creatives",
      title: "Social Media Creative Collection",
      subtitle: "High-CTR Visuals, Thumbnails & Promotional Posters",
      category: "graphic-design",
      projectType: "Design Portfolio",
      summary: "A curated collection of promotional banners, YouTube thumbnail concepts, product highlight posters, and event announcements designed for maximum engagement.",
      tools: ["Adobe Photoshop", "Illustrator", "Typography Systems", "Photo Retouching"],
      role: "Graphic Designer & Visual Artist",
      focus: "Promotional graphics, product creatives, typography, and visual composition",
      deliverables: ["20+ social post variations", "High-contrast YouTube thumbnails", "Event & sale posters", "Visual compositional studies"],
      problem: "Social media feeds are flooded with low-effort templates that fail to capture viewer attention in the crucial first 2 seconds.",
      approach: "Applied proven visual hierarchy rules, custom depth layers, dramatic lighting effects, and bold text placement to ensure instant readability even on small mobile screens.",
      finalResult: "A versatile visual portfolio showing strong command over color theory, focal points, and commercial creative presentation.",
      featured: false,
      accentColor: "#06b6d4",
      previewType: "design"
    },
    {
      id: "short-form-videos",
      title: "Short-Form Video Collection",
      subtitle: "High-Retention Instagram Reels & YouTube Shorts",
      category: "video-editing",
      projectType: "Video Editing Portfolio",
      summary: "Dynamic short-form video edits featuring kinetic captions, seamless transitions, synchronized sound effects, and retention-focused storytelling techniques.",
      tools: ["Premiere Pro", "After Effects", "CapCut Pro", "Sound Design"],
      role: "Video Editor & Motion Designer",
      focus: "Pacing, transitions, storytelling, captions, and promotional edits",
      deliverables: ["Reels & Shorts project timelines", "Custom text animations & lower thirds", "B-roll speed ramps", "Audio mastering & SFX beds"],
      problem: "Viewers drop off rapidly when pacing drags or when visual and audio cues do not reinforce the spoken message.",
      approach: "Structured video cuts around rhythmic beats, strategic zooms, subtle sound accents on every emphasis word, and clean kinetic typography.",
      finalResult: "A collection of high-energy video templates demonstrating narrative flow, tight editing rhythm, and modern creator aesthetic standards.",
      featured: false,
      accentColor: "#ec4899",
      previewType: "video"
    }
  ],
  skills: [
    {
      title: "Graphic Design",
      description: "Visual systems, brand storytelling, marketing collateral, and high-impact digital graphics.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva Pro", "Typography & Layout", "Brand Style Guides", "Color Theory", "Vector Art"]
    },
    {
      title: "Video Editing",
      description: "Fast-paced creator videos, cinematic cuts, motion design, and audio-synchronized storytelling.",
      tools: ["Adobe Premiere Pro", "After Effects Basics", "CapCut Pro", "Kinetic Typography", "Sound Design & SFX", "B-Roll Pacing", "Color Grading"]
    },
    {
      title: "App Development",
      description: "Modern component architectures, reactive mobile interfaces, prototypes, and API connectivity.",
      tools: ["React / React Native", "JavaScript & TypeScript", "Tailwind CSS", "Android UI Concepts", "REST APIs", "State Management", "Git & GitHub"]
    },
    {
      title: "UI/UX & Creative Thinking",
      description: "User journey mapping, wireframing, interactive prototyping, and design systems.",
      tools: ["Figma", "Wireframing", "Interactive Prototyping", "Mobile-First Design", "Design Systems", "Usability Testing", "Creative Strategy"]
    }
  ],
  workflow: [
    {
      stepNumber: "01",
      title: "Discover",
      subtitle: "Understand your vision & target audience",
      description: "We begin by discussing your goals, reference styles, target audience, and specific deliverable requirements. No guesswork.",
      keyDeliverable: "Project brief & reference alignment"
    },
    {
      stepNumber: "02",
      title: "Plan",
      subtitle: "Define scope, deliverables & timeline",
      description: "We establish the project roadmap, file specifications, agreed budget, revision limits, and completion milestones before commencing work.",
      keyDeliverable: "Transparent scope & timeline agreement"
    },
    {
      stepNumber: "03",
      title: "Create",
      subtitle: "Design, edit, or develop the solution",
      description: "I execute the work with obsessive attention to detail, whether crafting graphics, cutting videos with precision, or building app screens.",
      keyDeliverable: "First draft / working prototype preview"
    },
    {
      stepNumber: "04",
      title: "Refine",
      subtitle: "Feedback collection & structured revisions",
      description: "We review the draft together. I incorporate your constructive feedback and refine pacing, typography, colors, or code logic.",
      keyDeliverable: "Polished, revised assets ready for sign-off"
    },
    {
      stepNumber: "05",
      title: "Deliver",
      subtitle: "Final handoff of production files",
      description: "You receive clean, organized production assets (high-res exports, source files, video renders, or responsive code bundles).",
      keyDeliverable: "Final organized deliverables & ongoing support"
    }
  ],
  journey: [
    {
      period: "Current Focus",
      title: "Independent Digital Creative & Prototype Builder",
      type: "Current Focus",
      description: "Offering multidisciplinary freelance creative services in Graphic Design, Video Editing, and Mobile Application Development for creators, businesses, and startups worldwide.",
      tags: ["Freelance", "Client Work", "Jaipur / Remote"]
    },
    {
      period: "Milestone",
      title: "JARVIS AI Assistant Prototype Development",
      type: "Milestone",
      description: "Designed and prototyped an interactive futuristic voice assistant interface experimenting with dynamic audio waveforms, reactive HUD states, and AI model response flows.",
      tags: ["React Native", "AI Concepts", "UI Animation"]
    },
    {
      period: "Milestone",
      title: "E-Commerce & Digital Brand Identity Concepts",
      type: "Milestone",
      description: "Engineered comprehensive conceptual branding and creative marketing collateral for PrimeBazaar and Visionora Studio, studying consumer conversion and typography.",
      tags: ["Brand Identity", "Marketing Creatives", "Figma"]
    },
    {
      period: "Continuous",
      title: "Short-Form Creator Video & Motion Editing",
      type: "Skill Expansion",
      description: "Developing rapid-editing workflows for Reels and Shorts, mastering retention pacing, sound synchronization, and kinetic text animations for digital creators.",
      tags: ["Premiere Pro", "CapCut", "Motion Graphics"]
    },
    {
      period: "Roadmap",
      title: "Expanding Cross-Platform App Engineering & Design Systems",
      type: "Vision",
      description: "Continuously deepening technical competencies in scalable React Native architectures, Flutter cross-platform ecosystems, and professional design certifications.",
      tags: ["Mobile Engineering", "Growth", "Collaboration"]
    }
  ]
};
