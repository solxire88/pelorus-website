"use client"

import { useState, useCallback, useEffect } from "react"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Globe,
    Smartphone,
    ShoppingCart,
    Workflow,
    Settings,
    Share2,
    Video,
    Palette,
    Sparkles,
    FileText,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Check,
} from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useService } from "@/lib/service-context"
import useEmblaCarousel from "embla-carousel-react"
import { SectionGlow } from "./section-glow" // Import SectionGlow component

const serviceIcons = {
    websites: Globe,
    mobile: Smartphone,
    ecommerce: ShoppingCart,
    automation: Workflow,
    maintenance: Settings,
    social: Share2,
    branding: Sparkles,
    design: Palette,
    video: Video,
    content: FileText,
}

type ServiceKey = keyof typeof serviceIcons

interface ServiceData {
    id: ServiceKey
    icon: typeof Globe
}

const softwareServicesData: ServiceData[] = [
    { id: "websites", icon: Globe },
    { id: "mobile", icon: Smartphone },
    { id: "ecommerce", icon: ShoppingCart },
    { id: "automation", icon: Workflow },
    { id: "maintenance", icon: Settings },
]

const creativeServicesData: ServiceData[] = [
    { id: "social", icon: Share2 },
    { id: "branding", icon: Sparkles },
    { id: "design", icon: Palette },
    { id: "video", icon: Video },
    { id: "content", icon: FileText },
]

interface ServiceCardProps {
    service: ServiceData
    category: "software" | "creative"
    onLearnMore: () => void
}

function ServiceCard({ service, category, onLearnMore }: ServiceCardProps) {
    const { t } = useI18n()
    const Icon = service.icon
    const serviceTranslations = t.services[category][service.id as keyof typeof t.services.software]

    return (
        <GlassCard className="group cursor-pointer h-full flex flex-col">
            <div className="flex items-start gap-4 flex-1">
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300 shrink-0">
                    <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 flex flex-col min-h-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{serviceTranslations.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{serviceTranslations.short}</p>
                    <button
                        type="button"
                        onClick={onLearnMore}
                        className="flex items-center gap-1 mt-4 text-accent text-sm font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                        <span>{t.services.learnMore}</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </GlassCard>
    )
}

interface ServiceCarouselProps {
    services: ServiceData[]
    category: "software" | "creative"
    onServiceSelect: (service: ServiceData) => void
}

function ServiceCarousel({ services, category, onServiceSelect }: ServiceCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
    })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(true)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
        return () => {
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="relative">
            {/* Carousel viewport */}
            <div className="overflow-x-clip" ref={emblaRef}>
                <div className="flex gap-4 md:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                        >
                            <ServiceCard
                                service={service}
                                category={category}
                                onLearnMore={() => onServiceSelect(service)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-4 mt-6">
                <button
                    type="button"
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    className="p-2 rounded-full bg-secondary/50 border border-border/50 text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                    {services.map((service, index) => (
                        <button
                            key={service.id}
                            type="button"
                            onClick={() => scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex
                                ? "bg-accent w-4"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    className="p-2 rounded-full bg-secondary/50 border border-border/50 text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Next"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

interface ServiceModalProps {
    service: ServiceData | null
    category: "software" | "creative"
    open: boolean
    onClose: () => void
}

function ServiceModal({ service, category, open, onClose }: ServiceModalProps) {
    const { t } = useI18n()
    const { setSelectedService } = useService()

    if (!service) return null

    const Icon = service.icon
    const serviceTranslations = t.services[category][service.id as keyof typeof t.services.software]

    const handleRequestService = () => {
        setSelectedService(serviceTranslations.title)
        onClose()
        // Scroll to contact section
        const contactSection = document.getElementById("contact")
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="glass border-border/50 max-w-lg">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 rounded-xl bg-accent/10 text-accent">
                            <Icon className="w-6 h-6" />
                        </div>
                        <DialogTitle className="text-xl font-bold text-foreground">
                            {serviceTranslations.title}
                        </DialogTitle>
                    </div>
                </DialogHeader>

                <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                        {serviceTranslations.short}
                    </p>

                    {/* Deliverables */}
                    <div>
                        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                            {t.services.deliverables}
                        </h4>
                        <ul className="space-y-2">
                            {serviceTranslations.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                            {t.services.outcomes}
                        </h4>
                        <ul className="space-y-2">
                            {serviceTranslations.outcomes.map((outcome, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <GlassButton onClick={handleRequestService} className="w-full">
                        {t.services.requestService}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </GlassButton>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export function ServicesSection() {
    const { t } = useI18n()
    const [selectedService, setSelectedService] = useState<{
        service: ServiceData
        category: "software" | "creative"
    } | null>(null)

    return (
        <section id="services" className="relative py-24 md:py-32 overflow-x-hidden">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span className="text-accent text-sm font-medium uppercase tracking-wider">{t.services.badge}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
                        {t.services.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {t.services.subtitle}
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="software" className="w-full">
                    <div className="flex justify-center mb-10">
                        <TabsList className="glass border border-border/50 p-1 rounded-xl">
                            <TabsTrigger
                                value="software"
                                className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=inactive]:text-muted-foreground"
                            >
                                {t.services.tabSoftware}
                            </TabsTrigger>
                            <TabsTrigger
                                value="creative"
                                className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=inactive]:text-muted-foreground"
                            >
                                {t.services.tabCreative}
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="software" className="mt-0">
                        <ServiceCarousel
                            services={softwareServicesData}
                            category="software"
                            onServiceSelect={(service) => setSelectedService({ service, category: "software" })}
                        />
                    </TabsContent>

                    <TabsContent value="creative" className="mt-0">
                        <ServiceCarousel
                            services={creativeServicesData}
                            category="creative"
                            onServiceSelect={(service) => setSelectedService({ service, category: "creative" })}
                        />
                    </TabsContent>
                </Tabs>
            </div>

            {/* Service Modal */}
            <ServiceModal
                service={selectedService?.service ?? null}
                category={selectedService?.category ?? "software"}
                open={!!selectedService}
                onClose={() => setSelectedService(null)}
            />
        </section>
    )
}
