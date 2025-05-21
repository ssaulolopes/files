"use client"

import { ArrowLeft, Monitor, Map, ClipboardCheck, CloudDownload, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function EmergenciaPage({ onBack }: PageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-white">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span>Página inicial</span>
          <span>/</span>
          <span className="font-medium">Emergência Socioassistencial</span>
        </div>
      </div>

      <div className="bg-[#1a3b6d] rounded-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-white text-right mb-4">PROTEÇÃO SOCIAL BÁSICA</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <Monitor className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Painéis de Monitoramento</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <Map className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Mapa de Gestão Territorial</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <ClipboardCheck className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Ficha de Atendimento Emergência Socioassistencial</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <CloudDownload className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Consulta de Famílias e Download</h3>
        </div>
      </div>

      <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center md:w-1/3">
        <div className="bg-[#0a2756] p-4 rounded-md mb-4">
          <Edit className="h-16 w-16 text-sky-400" />
        </div>
        <h3 className="text-white font-medium">Edição de Dados</h3>
      </div>
    </div>
  )
}
