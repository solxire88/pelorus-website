"use client"

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"
import { X, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionGlow } from "./section-glow" // Declared SectionGlow import

const projects = [
  {
    name: "TechFlow Dashboard",
    type: "Website",
    description: "A comprehensive analytics dashboard for SaaS companies to track user engagement and growth metrics.",
    caseStudy: {
      challenge: "The client needed a modern dashboard to visualize complex data sets while maintaining ease of use.",
      solution: "We built a responsive React application with real-time data visualization and intuitive filtering.",
      results: "50% reduction in time spent on data analysis, 30% increase in user engagement.",
    },
  },
  {
    name: "FitTrack Mobile",
    type: "App",
    description: "Cross-platform fitness tracking application with social features and personalized workout plans.",
    caseStudy: {
      challenge: "Users wanted a fitness app that combined tracking with community motivation.",
      solution: "We developed a Flutter app with gamification elements and social workout challenges.",
      results: "100K+ downloads in first month, 4.8 star rating on app stores.",
    },
  },
  {
    name: "Artisan Market",
    type: "E-commerce",
    description: "Multi-vendor marketplace connecting local artisans with customers seeking handmade products.",
    caseStudy: {
      challenge: "Traditional artisans lacked an online presence to reach broader audiences.",
      solution: "We created a marketplace with vendor dashboards, secure payments, and logistics integration.",
      results: "200+ vendors onboarded, $500K+ in sales within 6 months.",
    },
  },
  {
    name: "Vertex Identity",
    type: "Branding",
    description: "Complete visual identity redesign for a fintech startup entering the B2B market.",
    caseStudy: {
      challenge: "The startup needed to establish credibility in a competitive market.",
      solution: "We developed a premium brand system with logo, typography, colors, and guidelines.",
      results: "Successfully raised Series A funding, brand recognition increased by 200%.",
    },
  },
  {
    name: "SupplySync",
    type: "Automation",
    description: "End-to-end supply chain automation system connecting inventory, orders, and shipping.",
    caseStudy: {
      challenge: "Manual processes caused delays and errors in order fulfillment.",
      solution: "We implemented n8n workflows connecting ERP, warehouse, and shipping systems.",
      results: "75% reduction in processing time, 95% accuracy in order fulfillment.",
    },
  },
  {
    name: "GreenLeaf Co.",
    type: "Website",
    description: "Sustainable products showcase website with immersive storytelling and eco-impact calculator.",
    caseStudy: {
      challenge: "The brand needed to communicate their sustainability mission effectively.",
      solution: "We built an interactive website with scroll-driven animations and impact metrics.",
      results: "40% increase in conversion rate, featured in design publications.",
    },
  },
]

const typeColors: Record<string, string> = {
  Website: "bg-blue-500/20 text-blue-300",
  App: "bg-green-500/20 text-green-300",
  "E-commerce": "bg-purple-500/20 text-purple-300",
  Branding: "bg-orange-500/20 text-orange-300",
  Automation: "bg-cyan-500/20 text-cyan-300",
}

interface CaseStudyModalProps {
  project: (typeof projects)[0]
  onClose: () => void
}

function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { t } = useI18n()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="relative glass rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${typeColors[project.type]}`}>
            {project.type}
          </span>
          <h3 className="text-2xl font-bold text-foreground mt-4 mb-2">{project.name}</h3>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{t.work.challenge}</h4>
              <p className="text-muted-foreground">{project.caseStudy.challenge}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{t.work.solution}</h4>
              <p className="text-muted-foreground">{project.caseStudy.solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{t.work.results}</h4>
              <p className="text-muted-foreground">{project.caseStudy.results}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <GlassButton href="#contact" className="w-full">
              {t.work.startSimilar}
              <ExternalLink className="w-4 h-4 ml-2" />
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WorkSection() {
  const { t } = useI18n()
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">{t.work.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t.work.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.work.subtitle}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.name} className="group">
              {/* Placeholder image area */}
              <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">{t.work.projectPreview}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${typeColors[project.type]}`}>
                {project.type}
              </span>

              <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
              >
                {t.work.caseStudy}
                <ExternalLink className="w-3 h-3" />
              </button>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
