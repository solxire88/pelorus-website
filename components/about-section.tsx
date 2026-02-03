"use client"

import { DolphinIcon } from "./dolphin-icon"
import { GlassCard } from "./glass-card"
import { Compass, Palette, Code, Check } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const valueIcons = {
  navigation: Compass,
  creative: Palette,
  technical: Code,
}

type ValueKey = keyof typeof valueIcons

const valuesData: ValueKey[] = ["navigation", "creative", "technical"]

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background dolphin watermark */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-3 hidden lg:block">
        <DolphinIcon className="w-80 h-80 text-primary" variant="filled" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-wider">{t.about.badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">Pelorus</span> — {t.about.description1.replace("Pelorus — ", "")}
              </p>
              <p>
                {t.about.description2}
              </p>
            </div>

            {/* What you get */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">{t.about.whatYouGet}</h3>
              <ul className="grid grid-cols-2 gap-3">
                {t.about.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content - value cards */}
          <div className="space-y-4">
            {valuesData.map((valueKey) => {
              const Icon = valueIcons[valueKey]
              const valueTranslations = t.about.values[valueKey]

              return (
                <GlassCard key={valueKey} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{valueTranslations.title}</h3>
                    <p className="text-sm text-muted-foreground">{valueTranslations.description}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
