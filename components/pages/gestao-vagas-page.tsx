"use client"

import { ArrowLeft, ClipboardList, Users2, Home, CloudDownload, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function GestaoVagasPage({ onBack }: PageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-white">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span>Página inicial</span>
          <span>/</span>
          <span className="font-medium">Gestão de Vagas</span>
        </div>
      </div>

      <div className="bg-[#1a3b6d] rounded-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-white text-right mb-4">PROTEÇÃO SOCIAL ESPECIAL</h1>
      </div>

      <h2 className="text-xl font-bold text-white text-center mb-4">Painéis de Monitoramento 2025</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex items-start gap-4">
          <div className="bg-[#0a2756] p-4 rounded-md">
            <ClipboardList className="h-16 w-16 text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">Gestão 2025</h3>
            <p className="text-gray-300 text-sm">Dados Gerais Acolhimento 2025 e Painel Geral de Vagas</p>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex items-start gap-4">
          <div className="bg-[#0a2756] p-4 rounded-md">
            <Users2 className="h-16 w-16 text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">Abordagem Social</h3>
            <p className="text-gray-300 text-sm">Painel de Vagas e Painel Geral de Usuários</p>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex items-start gap-4">
          <div className="bg-[#0a2756] p-4 rounded-md">
            <Home className="h-16 w-16 text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">Unidades de Acolhimento</h3>
            <p className="text-gray-300 text-sm">Painel de Confirmação e Monitoramento de Ocupação e Desligamento</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white text-center mb-4">Ferramentas / Documentação</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex items-start gap-4">
          <div className="bg-[#0a2756] p-4 rounded-md">
            <CloudDownload className="h-16 w-16 text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">Download da Base de Dados</h3>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex items-start gap-4">
          <div className="bg-[#0a2756] p-4 rounded-md">
            <BookOpen className="h-16 w-16 text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">Instruções de Uso</h3>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex items-start gap-4">
          <div className="bg-[#0a2756] p-4 rounded-md">
            <Download className="h-16 w-16 text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">Instalação do Aplicativo Survey 123</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
