"use client"

import { useState } from "react"
import { Shield, FileText, Home, Users } from "lucide-react"

interface Button {
  id: number
  title: string
  icon: string
}

interface CategoryCardProps {
  title: string
  description: string
  buttons: Button[]
}

export function CategoryCard({ title, description, buttons }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (title) {
      case "PROTEÇÃO SOCIAL BÁSICA":
        return <Shield className="h-12 w-12 text-sky-400" />
      case "VIGILÂNCIA SOCIOASSISTENCIAL":
        return <FileText className="h-12 w-12 text-sky-400" />
      case "PROTEÇÃO SOCIAL ESPECIAL":
        return <Home className="h-12 w-12 text-sky-400" />
      case "CADASTRO ÚNICO":
        return <Users className="h-12 w-12 text-sky-400" />
      default:
        return <Shield className="h-12 w-12 text-sky-400" />
    }
  }

  return (
    <div
      className="bg-[#1a3b6d] rounded-md overflow-hidden transition-all duration-300 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex items-start gap-4">
        <div className="rounded-full bg-[#0a2756] p-3 transition-colors">{getIcon()}</div>
        <div>
          <h2 className="text-white font-bold text-lg mb-1">{title}</h2>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>

      {/* Submenu que aparece no hover */}
      <div
        className={`absolute inset-0 bg-[#1a3b6d] transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {buttons.map((button) => (
            <div
              key={button.id}
              className="flex flex-col items-center w-24 text-center hover:scale-110 transition-transform"
            >
              <div className="bg-[#0a2756] p-2 rounded-md mb-2">
                <img src={button.icon || "/placeholder.svg"} alt={button.title} className="w-10 h-10" />
              </div>
              <span className="text-white text-xs">{button.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
