"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Home, Shield, Users, FileText, ChevronDown, ChevronRight } from "lucide-react"

interface MenuItem {
  id: string
  title: string
  icon: React.ReactNode
  subItems?: { id: string; title: string }[]
}

export function Menu() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const menuItems: MenuItem[] = [
    {
      id: "home",
      title: "Início",
      icon: <Home className="h-5 w-5" />,
    },
    {
      id: "protecao-basica",
      title: "Proteção Social Básica",
      icon: <Shield className="h-5 w-5" />,
      subItems: [
        { id: "emergencia", title: "Emergência Socioassistencial" },
        { id: "cartao", title: "Cartão Protege SUAS" },
        { id: "demandas", title: "Demandas Habitacionais" },
        { id: "documentacao", title: "Documentação" },
      ],
    },
    {
      id: "protecao-especial",
      title: "Proteção Social Especial",
      icon: <Shield className="h-5 w-5" />,
      subItems: [
        { id: "abordagem", title: "Abordagem Social" },
        { id: "gestao", title: "Gestão de Vagas" },
        { id: "censo", title: "Censo Poprua" },
      ],
    },
    {
      id: "cadastro-unico",
      title: "Cadastro Único",
      icon: <Users className="h-5 w-5" />,
      subItems: [
        { id: "paineis", title: "Painéis de Monitoramento" },
        { id: "edicao", title: "Edição de Dados CTR" },
        { id: "formularios", title: "Formulários" },
        { id: "download", title: "Download Base de dados" },
      ],
    },
    {
      id: "vigilancia",
      title: "Vigilância Socioassistencial",
      icon: <FileText className="h-5 w-5" />,
      subItems: [
        { id: "edicao1", title: "1ª Edição Boletim Técnico" },
        { id: "edicao2", title: "2ª Edição Boletim Técnico" },
      ],
    },
  ]

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <aside className="w-60 bg-[#0a2756] border-r border-[#1a3b6d] min-h-[calc(100vh-64px)] transition-all duration-300">
      <nav className="p-4">
        <div className="mb-6">
          <Link href="/" className="flex items-center gap-2 text-white p-2 rounded-md hover:bg-[#1a3b6d]">
            <Home className="h-5 w-5" />
            <span>Início</span>
          </Link>
        </div>

        <div className="space-y-1">
          <h3 className="text-gray-400 text-sm font-medium px-2 mb-2">Serviços</h3>

          {menuItems.slice(1).map((item) => (
            <div key={item.id} className="mb-1">
              <button
                onClick={() => toggleItem(item.id)}
                className="flex items-center justify-between w-full text-white p-2 rounded-md hover:bg-[#1a3b6d] transition-colors"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {item.subItems &&
                  (expandedItems[item.id] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
              </button>

              {item.subItems && expandedItems[item.id] && (
                <div className="ml-7 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href="#"
                      className="flex items-center text-sm text-gray-300 py-1 px-2 rounded hover:bg-[#1a3b6d] hover:text-white"
                    >
                      <span className="text-xs">•</span>
                      <span className="ml-2">{subItem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  )
}
