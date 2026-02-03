"use client"

import { cn } from "@/lib/utils"

interface DolphinIconProps {
  className?: string
  variant?: "outline" | "filled"
}

export function DolphinIcon({ className, variant = "outline" }: DolphinIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("w-10 h-10", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "outline" ? (
        <path
          d="M75 25C70 20 60 18 50 22C40 26 32 35 28 45C24 55 25 65 30 72C35 79 45 82 55 80C60 79 65 76 68 72L72 65C74 61 75 56 74 51C73 46 70 42 66 40C62 38 57 38 53 40C49 42 46 46 45 51C44 56 45 61 48 65C51 69 56 72 62 73"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
      ) : (
        <path
          d="M75 25C70 20 60 18 50 22C40 26 32 35 28 45C24 55 25 65 30 72C35 79 45 82 55 80C60 79 65 76 68 72L72 65C74 61 75 56 74 51C73 46 70 42 66 40C62 38 57 38 53 40C49 42 46 46 45 51C44 56 45 61 48 65C51 69 56 72 62 73"
          fill="currentColor"
          className="transition-all duration-300"
        />
      )}
      {/* Dolphin eye */}
      <circle cx="58" cy="35" r="2" fill="currentColor" />
      {/* Dolphin fin */}
      <path
        d="M42 38C38 32 35 28 30 25C35 30 37 35 38 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
