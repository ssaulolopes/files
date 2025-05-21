"use client"

import { useState } from "react"
import { Menu } from "@/components/menu"
import { Header } from "@/components/header"
import { CategoryCard } from "@/components/category-card"

export default function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const categories = [
    {
      id: 1,
      title: "PROTEÇÃO SOCIAL BÁSICA",
      description:
        "Acesso a Emergência Socioassistencial, Cartão Protege SUAS, Acompanhamento Familiar, Demandas Habitacionais e Documentação",
      buttons: [
        { id: 1, title: "Emergência Socioassistencial", icon: "/placeholder.svg?height=40&width=40" },
        { id: 2, title: "Cartão Protege SUAS", icon: "/placeholder.svg?height=40&width=40" },
        { id: 3, title: "Demandas Habitacionais", icon: "/placeholder.svg?height=40&width=40" },
        { id: 4, title: "Documentação", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: 2,
      title: "VIGILÂNCIA SOCIOASSISTENCIAL",
      description: "Boletins Técnicos",
      buttons: [
        { id: 1, title: "1ª Edição Boletim Técnico", icon: "/placeholder.svg?height=40&width=40" },
        { id: 2, title: "2ª Edição Boletim Técnico", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: 3,
      title: "PROTEÇÃO SOCIAL ESPECIAL",
      description: "Acesso a Abordagem social, Censo Poprua e Gestão de Vagas",
      buttons: [
        { id: 1, title: "Abordagem Social", icon: "/placeholder.svg?height=40&width=40" },
        { id: 2, title: "Gestão de Vagas", icon: "/placeholder.svg?height=40&width=40" },
        { id: 3, title: "Censo Poprua", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: 4,
      title: "CADASTRO ÚNICO",
      description: "Acesso aos Painéis de Monitoramento, Edição de Dados CTR, Formulários e Download de Base de Dados",
      buttons: [
        { id: 1, title: "Painéis de Monitoramento", icon: "/placeholder.svg?height=40&width=40" },
        { id: 2, title: "Edição de dados CTR", icon: "/placeholder.svg?height=40&width=40" },
        { id: 3, title: "Formulários", icon: "/placeholder.svg?height=40&width=40" },
        { id: 4, title: "Download Base de dados", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a2756]">
      <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
      <div className="flex">
        {sidebarVisible && <Menu />}
        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarVisible ? "" : "ml-0"}`}>
          <div className="bg-[#1a3b6d] rounded-md p-6 mb-6 text-white text-center">
            <h1 className="text-xl font-semibold">SEJA BEM-VINDO(A)</h1>
            <p className="text-sm">ao Sistema Integrado da Secretaria Municipal de Assistência Social</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                buttons={category.buttons}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
