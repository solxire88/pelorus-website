"use client"

import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"
import { Check, Star, Zap, Crown } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionGlow } from "./section-glow" // Import SectionGlow

const tierIcons = {
  starter: Zap,
  growth: Star,
  elite: Crown,
}

type TierKey = keyof typeof tierIcons

const tiersData: { key: TierKey; featured?: boolean }[] = [
  { key: "starter" },
  { key: "growth", featured: true },
  { key: "elite" },
]

export function SubscriptionSection() {
  const { t } = useI18n()

  return (
<section id="subscription" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">{t.subscription.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t.subscription.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.subscription.subtitle}
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiersData.map((tier) => {
            const Icon = tierIcons[tier.key]
            const tierTranslations = t.subscription.tiers[tier.key]

            return (
              <GlassCard
                key={tier.key}
                className={tier.featured ? "relative border-accent/30 md:scale-105" : ""}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {t.subscription.mostPopular}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{tierTranslations.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{tierTranslations.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tierTranslations.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <GlassButton
                  href="#contact"
                  variant={tier.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  {t.subscription.requestOffer}
                </GlassButton>
              </GlassCard>
            )
          })}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.subscription.pricingNote}
        </p>
      </div>
    </section>
  )
}
