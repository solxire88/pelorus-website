"use client"

import { cn } from "@/lib/utils"
import type { ReactNode, ButtonHTMLAttributes } from "react"

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
  href?: string
}

export function GlassButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: GlassButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none border backdrop-blur-sm",
    {
      "bg-primary/15 text-primary border-primary/30 hover:bg-primary/25 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(195,224,229,0.3)]": variant === "primary",
      "bg-secondary/80 text-secondary-foreground border-border/60 hover:bg-secondary hover:border-primary/30 hover:shadow-[0_0_20px_rgba(195,224,229,0.15)]": variant === "secondary",
    },
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className
  )

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    )
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  )
}
