"use client"

import { DolphinIcon } from "./dolphin-icon"
import { Instagram } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#subscription", label: t.nav.subscription },
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div>
            <a href="#" className="flex items-center gap-2 group mb-4">
              <DolphinIcon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-semibold text-foreground font-brand">Pelorus</span>
            </a>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t.footer.connect}</h4>
            <a
              href="https://instagram.com/pelorus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@pelorus</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pelorus. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
