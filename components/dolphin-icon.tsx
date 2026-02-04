"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"


interface DolphinIconProps {
  className?: string
}

export function DolphinIcon({ className }: DolphinIconProps) {
  return (
    <Image
      src="/PelorusFavIcon.svg"
      alt="Pelorus icon"
      width={40}
      height={40}
      className={cn("w-10 h-10", className)}
    />
  )
}
