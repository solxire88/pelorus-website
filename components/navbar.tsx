"use client"

import { useState, useEffect } from "react"
import { DolphinIcon } from "./dolphin-icon"
import { GlassButton } from "./glass-button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const { language, setLanguage, t } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#subscription", label: t.nav.subscription },
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <DolphinIcon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="text-xl font-semibold text-foreground">Pelorus</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language Toggle & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex items-center bg-secondary/50 rounded-lg p-1 border border-border/50">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                language === "en" 
                  ? "bg-primary/20 text-primary shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                language === "fr" 
                  ? "bg-primary/20 text-primary shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              FR
            </button>
          </div>
          
          <GlassButton href="#contact" size="sm">
            {t.nav.letsTalk}
          </GlassButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border/50",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Language Toggle */}
          <div className="flex items-center gap-2 py-2">
            <span className="text-sm text-muted-foreground">Language:</span>
            <div className="flex items-center bg-secondary/50 rounded-lg p-1 border border-border/50">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                  language === "en" 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                  language === "fr" 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                FR
              </button>
            </div>
          </div>
          
          <GlassButton href="#contact" className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            {t.nav.letsTalk}
          </GlassButton>
        </div>
      </div>
    </header>
  )
}
