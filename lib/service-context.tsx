"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ServiceContextType {
  selectedService: string | null
  setSelectedService: (service: string | null) => void
}

const ServiceContext = createContext<ServiceContextType | null>(null)

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export function useService() {
  const context = useContext(ServiceContext)
  if (!context) {
    throw new Error("useService must be used within a ServiceProvider")
  }
  return context
}
