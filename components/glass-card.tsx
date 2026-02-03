"use client"

import { cn } from "@/lib/utils"
import type { ReactNode, HTMLAttributes } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className, hover = true, glow = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300 bg-card/80 backdrop-blur-md border border-border/60",
        hover && "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(195,224,229,0.15)]",
        glow && "shadow-[0_0_20px_rgba(195,224,229,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
