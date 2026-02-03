"use client"

import { GlassCard } from "./glass-card"
import { Search, PenTool, Code, Rocket } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const stepIcons = {
  discover: Search,
  design: PenTool,
  build: Code,
  launch: Rocket,
}

type StepKey = keyof typeof stepIcons

const stepsData: { key: StepKey; number: string }[] = [
  { key: "discover", number: "01" },
  { key: "design", number: "02" },
  { key: "build", number: "03" },
  { key: "launch", number: "04" },
]

export function ProcessSection() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">{t.process.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t.process.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((step, index) => {
            const Icon = stepIcons[step.key]
            const stepTranslations = t.process.steps[step.key]

            return (
              <div key={step.key} className="relative">
                {/* Connector line */}
                {index < stepsData.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
                )}

                <GlassCard className="relative z-10">
                  <span className="text-4xl font-bold text-accent/20">{step.number}</span>
                  <div className="mt-4 mb-4 p-3 rounded-xl bg-accent/10 text-accent inline-flex">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{stepTranslations.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stepTranslations.description}</p>
                </GlassCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
