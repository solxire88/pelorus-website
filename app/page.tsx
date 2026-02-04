import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SubscriptionSection } from "@/components/subscription-section"
import { WorkSection } from "@/components/work-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
    return (
        <main className="min-h-screen relative bg-background">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <SubscriptionSection />
            {/* <WorkSection /> */}
            <ProcessSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            <Toaster />
        </main>
    )
}
