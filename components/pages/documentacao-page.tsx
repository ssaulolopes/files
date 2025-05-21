"use client"

import { ArrowLeft, BookOpen, GitBranch, User, CloudLightning } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function DocumentacaoPage({ onBack }: PageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-white">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <span>Página inicial</span>
          <span>/</span>
          <span className="font-medium">Documentação</span>
        </div>
      </div>

      <div className="bg-[#1a3b6d] rounded-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-white text-right mb-4">PROTEÇÃO SOCIAL BÁSICA</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <BookOpen className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Bibliografia Básica</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <GitBranch className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Procedimento Operacional</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <User className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Matriz de Responsabilidade</h3>
        </div>

        <div className="bg-[#1a3b6d] rounded-md p-6 flex flex-col items-center text-center">
          <div className="bg-[#0a2756] p-4 rounded-md mb-4">
            <CloudLightning className="h-16 w-16 text-sky-400" />
          </div>
          <h3 className="text-white font-medium">Plano Verão</h3>
        </div>
      </div>
    </div>
  )
}
