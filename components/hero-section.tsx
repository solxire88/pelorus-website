"use client"

import { GlassButton } from "./glass-button"
import { DolphinIcon } from "./dolphin-icon"
import { Zap, Code2, TrendingUp } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()

  const valueChips = [
    { icon: Zap, label: t.hero.chip1 },
    { icon: Code2, label: t.hero.chip2 },
    { icon: TrendingUp, label: t.hero.chip3 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background via-secondary to-background">
      {/* Floating dolphin watermark */}
      <div className="absolute right-10 top-1/3 opacity-5 hidden lg:block">
        <DolphinIcon className="w-96 h-96 text-primary" variant="filled" />
      </div>

      {/* Gradient glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Small accent badge with glow */}
        <div className="flex justify-center mb-6">
          <div className="group px-4 py-2 rounded-full flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 border border-border/60 shadow-[0_0_15px_rgba(195,224,229,0.1)] hover:shadow-[0_0_25px_rgba(195,224,229,0.2)] hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 cursor-default">
            <DolphinIcon className="w-4 h-4 text-accent group-hover:drop-shadow-[0_0_6px_rgba(74,158,173,0.6)] transition-all duration-300" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          {t.hero.headline}
          <br />
          <span className="text-accent">{t.hero.headlineAccent}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <GlassButton href="#contact" size="lg">
            {t.hero.ctaPrimary}
          </GlassButton>
          <GlassButton href="#services" variant="secondary" size="lg">
            {t.hero.ctaSecondary}
          </GlassButton>
        </div>

        {/* Value chips with glow */}
        <div className="flex flex-wrap justify-center gap-3">
          {valueChips.map((chip) => (
            <div
              key={chip.label}
              className="group px-4 py-2 rounded-full flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 border border-border/60 shadow-[0_0_12px_rgba(195,224,229,0.08)] hover:shadow-[0_0_20px_rgba(195,224,229,0.15)] hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              <chip.icon className="w-4 h-4 text-accent group-hover:drop-shadow-[0_0_6px_rgba(74,158,173,0.6)] transition-all duration-300" />
              <span>{chip.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
