"use client"

import { ArrowLeft, ClipboardCheck, Monitor, Edit, CloudDownload, Gavel, Scale, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function CartaoProtegePage({ onBack }: PageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-white">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span>Página inicial</span>
          <span>/</span>
          <span className="font-medium">Cartão Protege SUAS</span>
        </div>
      </div>

      <div className="bg-[#1a3b6d] rounded-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-white text-right mb-4">PROTEÇÃO SOCIAL BÁSICA</h1>
      </div>

      <h2 className="text-xl font-bold text-white text-center mb-4">Ferramentas</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <ClipboardCheck className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Declaração Recebimento Cartão Protege SUAS</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <Monitor className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Painel de Monitoramento</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <Edit className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Edição de Dados GRR</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <CloudDownload className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Consulta de Cartões e Download</h3>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white text-center mb-4">Documentação</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <Gavel className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Decreto</h3>
          <p className="text-gray-300 text-sm">Nº 50.743 DE 05 DE MAIO 2022</p>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <Scale className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Resolução</h3>
          <p className="text-gray-300 text-sm">Nº 134 DE 21 DE SET. 2022</p>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <GitBranch className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Procedimento Operacional</h3>
        </div>
      </div>
    </div>
  )
}
