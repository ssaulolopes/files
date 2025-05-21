"use client"

import { BulletproofImage } from "@/components/ui/bulletproofimage";
import { useState } from "react"
import {
  Shield,
  FileText,
  Home,
  Users,
  AlertCircle,
  CreditCard,
  FileTextIcon as FileText2,
  Users2,
  BarChart2,
  Edit,
  ClipboardList,
  Download,
  LineChart,
} from "lucide-react"

interface Button {
  id: number
  title: string
  icon: string
  action: () => void
  internal: boolean
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
        return (
          <BulletproofImage
            src="/PSB_ICON.png"
            alt="Proteção Social Básica"
          />
        );
      case "VIGILÂNCIA SOCIOASSISTENCIAL":
        return (
          <BulletproofImage
            src="/VIGILANCIA_ICON.png"
            alt="Vigilância Socioassistencial"
          />
        );
      case "PROTEÇÃO SOCIAL ESPECIAL":
        return (
          <BulletproofImage
            src="/PSE_ICON.png"
            alt="Proteção Social Especial"
          />
        );
      case "CADASTRO ÚNICO":
        return (
          <BulletproofImage
            src="/CADUNICO_ICON.png"
            alt="Cadastro Único"
          />
        );
      }
  };

  const getButtonIcon = (iconName: string) => {
    switch (iconName) {
      case "emergency":
        return <AlertCircle className="h-8 w-8 text-sky-400" />
      case "card":
        return <CreditCard className="h-8 w-8 text-sky-400" />
      case "home":
        return <Home className="h-8 w-8 text-sky-400" />
      case "document":
        return <FileText2 className="h-8 w-8 text-sky-400" />
      case "report":
        return <FileText className="h-8 w-8 text-sky-400" />
      case "people":
        return <Users2 className="h-8 w-8 text-sky-400" />
      case "management":
        return <ClipboardList className="h-8 w-8 text-sky-400" />
      case "chart":
        return <BarChart2 className="h-8 w-8 text-sky-400" />
      case "dashboard":
        return <LineChart className="h-8 w-8 text-sky-400" />
      case "edit":
        return <Edit className="h-8 w-8 text-sky-400" />
      case "form":
        return <ClipboardList className="h-8 w-8 text-sky-400" />
      case "download":
        return <Download className="h-8 w-8 text-sky-400" />
      default:
        return <FileText className="h-8 w-8 text-sky-400" />
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
            <button
              key={button.id}
              onClick={button.action}
              className="flex flex-col items-center w-24 text-center group cursor-pointer"
            >
              <div className="bg-[#0a2756] p-2 rounded-md mb-2 transition-all duration-200 group-hover:bg-sky-700 group-active:bg-sky-800">
                {getButtonIcon(button.icon)}
              </div>
              <span className="text-white text-xs group-hover:text-sky-300">{button.title}</span>
              {!button.internal && <span className="text-gray-400 text-[10px] mt-1">(link externo)</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
