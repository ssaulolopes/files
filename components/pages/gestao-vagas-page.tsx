"use client"

import { ArrowLeft, ClipboardList, Users2, Home, CloudDownload, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function GestaoVagasPage({ onBack }: PageProps) {
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
            <span className="font-medium">Gestão de Vagas</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white text-right opacity-50">PROTEÇÃO SOCIAL ESPECIAL</h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-white text-center mx-6">Painéis de Monitoramento 2025</h2>
        <div className="h-px bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48">
          <div className="bg-[#0a2756] p-6 rounded-md flex items-center justify-center">
            <ClipboardList className="h-24 w-24 text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-2xl mb-2">Gestão 2025</h3>
            <p className="text-gray-300 text-base">Dados Gerais Acolhimento 2025 e Painel Geral de Vagas</p>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48">
          <div className="bg-[#0a2756] p-6 rounded-md flex items-center justify-center">
            <Users2 className="h-24 w-24 text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-2xl mb-2">Abordagem Social</h3>
            <p className="text-gray-300 text-base">Painel de Vagas e Painel Geral de Usuários</p>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48">
          <div className="bg-[#0a2756] p-6 rounded-md flex items-center justify-center">
            <Home className="h-24 w-24 text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-2xl mb-2">Unidades de Acolhimento</h3>
            <p className="text-gray-300 text-base">Painel de Confirmação e Monitoramento de Ocupação e Desligamento</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-white text-center mx-6">Ferramentas / Documentação</h2>
        <div className="h-px bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48">
          <div className="bg-[#0a2756] p-6 rounded-md flex items-center justify-center">
            <CloudDownload className="h-24 w-24 text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-2xl">Download da Base de Dados</h3>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48">
          <div className="bg-[#0a2756] p-6 rounded-md flex items-center justify-center">
            <BookOpen className="h-24 w-24 text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-2xl">Instruções de Uso</h3>
          </div>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48">
          <div className="bg-[#0a2756] p-6 rounded-md flex items-center justify-center">
            <Download className="h-24 w-24 text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-2xl">Instalação do Aplicativo Survey 123</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
