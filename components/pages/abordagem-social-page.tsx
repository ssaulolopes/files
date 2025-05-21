"use client"

import { ArrowLeft, BarChart, BarChart2, FileText, CloudDownload } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function AbordagemSocialPage({ onBack }: PageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-white">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span>Página inicial</span>
          <span>/</span>
          <span className="font-medium">Abordagem Social</span>
        </div>
      </div>

      <div className="bg-[#1a3b6d] rounded-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-white text-right mb-4">PROTEÇÃO SOCIAL ESPECIAL</h1>
      </div>

      <h2 className="text-xl font-bold text-white text-center mb-4">Painéis de Monitoramento 2025</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <BarChart className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Abordagem Social 2025</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <BarChart className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Coordenadoria</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <BarChart className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">CREAS</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <BarChart className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Centro Pop</h3>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white text-center mb-4">Ferramentas</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <BarChart2 className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Preenchimento Abordagem Social 2025</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <BarChart2 className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Painel Geral de Atendimentos</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <FileText className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Documentação</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <CloudDownload className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Download da Base de Dados</h3>
        </div>
      </div>
    </div>
  )
}
