import React from "react"
import type { Metadata, Viewport } from 'next'
import { Manrope, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import { ServiceProvider } from '@/lib/service-context'
import './globals.css'

const _sora = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-brand" });

export const metadata: Metadata = {
  title: 'Pelorus | Software + Creative Agency',
  description: 'Pelorus helps businesses build websites, apps, automations, and standout branding/content. Navigate growth with software + creative.',
  generator: 'Pelorus Agency',
  keywords: ['software development', 'creative agency', 'web design', 'mobile apps', 'branding', 'social media management'],
}

export const viewport: Viewport = {
  themeColor: '#0d1029',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_sora.variable} ${_playfair.variable} font-sans antialiased`}>
        <I18nProvider>
          <ServiceProvider>
            {children}
          </ServiceProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
