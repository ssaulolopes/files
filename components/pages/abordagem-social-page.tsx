"use client"

import { ArrowLeft, BarChart, BarChart2, FileText, CloudDownload } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function AbordagemSocialPage({ onBack }: PageProps) {
  return (
    <div className="space-y-8">
      <div className="bg-[#1a3b6d] rounded-md p-8">
        <div className="flex items-center gap-3 text-white mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white p-0 h-auto">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2 text-lg">
            <span>Página inicial</span>
            <span>/</span>
            <span className="font-medium">Abordagem Social</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white text-right opacity-50">PROTEÇÃO SOCIAL ESPECIAL</h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-white text-center mx-6">Painéis de Monitoramento 2025</h2>
        <div className="h-px bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <BarChart className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Abordagem Social 2025</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <BarChart className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Coordenadoria</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <BarChart className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">CREAS</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <BarChart className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Centro Pop</h3>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-white text-center mx-6">Ferramentas</h2>
        <div className="h-px bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <BarChart2 className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Preenchimento Abordagem Social 2025</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <BarChart2 className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Painel Geral de Atendimentos</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <FileText className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Documentação</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64">
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <CloudDownload className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Download da Base de Dados</h3>
        </div>
      </div>
    </div>
  )
}
