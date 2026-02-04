"use client"

import React from "react"
import SectionGlow from "./section-glow" // Import SectionGlow component

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"
import { Mail, Instagram, Send, CheckCircle, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "@/lib/i18n"
import { useService } from "@/lib/service-context"

export function ContactSection() {
    const { t } = useI18n()
    const { toast } = useToast()
    const { selectedService, setSelectedService } = useService()
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        toast({
            title: t.contact.toast.title,
            description: t.contact.toast.description,
        })
        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: "", company: "", email: "", message: "" })
            setSelectedService(null)
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-medium uppercase tracking-wider">{t.contact.badge}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
                        {t.contact.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Contact cards */}
                    <div className="space-y-6">
                        <GlassCard className="flex items-center gap-4">
                            <div className="p-4 rounded-xl bg-accent/10 text-accent">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.emailUs}</h3>
                                <a
                                    href="mailto:hello@pelorus.agency"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    hello@pelorus.agency
                                </a>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center gap-4">
                            <div className="p-4 rounded-xl bg-accent/10 text-accent">
                                <Instagram className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.followDm}</h3>
                                <a
                                    href="https://instagram.com/pelorusproduction"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    @pelorusproduction
                                </a>
                            </div>
                        </GlassCard>

                        <p className="text-sm text-muted-foreground mt-4">{t.contact.replyTime}</p>
                    </div>

                    {/* Contact form */}
                    <GlassCard hover={false}>
                        {/* Selected service banner */}
                        {selectedService && (
                            <div className="mb-4 p-3 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-between">
                                <div>
                                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                                        {t.contact.requesting}
                                    </span>
                                    <p className="text-sm text-foreground font-medium mt-0.5">{selectedService}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedService(null)}
                                    className="p-1 rounded-full hover:bg-accent/20 transition-colors"
                                    aria-label="Clear selected service"
                                >
                                    <X className="w-4 h-4 text-accent" />
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        {t.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder={t.contact.form.namePlaceholder}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                        {t.contact.form.company}
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder={t.contact.form.companyPlaceholder}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    {t.contact.form.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder={t.contact.form.emailPlaceholder}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    {t.contact.form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                                    placeholder={t.contact.form.messagePlaceholder}
                                />
                            </div>

                            <GlassButton type="submit" className="w-full" disabled={isSubmitted}>
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        {t.contact.form.sent}
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        {t.contact.form.send}
                                    </>
                                )}
                            </GlassButton>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}
