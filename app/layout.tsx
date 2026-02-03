import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import { ServiceProvider } from '@/lib/service-context'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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
      <body className="font-sans antialiased">
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
